import React, {useState, useMemo} from 'react';
import { postStatus, getStatus } from '../../../api/FirestoreAPIs';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';
import ModalComponent from '../Modal';
import getUniqueId from '../../../helpers/getUniqueId';
import PostsCard from '../PostsCard';

import "./index.scss";

export default function PostStatus({currentUser}) {
  let userEmail = localStorage.getItem('userEmail')
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState("")
    const [allStatuses, setAllStatus] = useState([]);
    const sendStatus = async () => {
      let object = {
        status: status,
        timeStamp: getCurrentTimeStamp("LLL"),
        userEmail: currentUser.email,
        userName: currentUser.name,
        postID: getUniqueId(),
      }

      await postStatus(object);
      setModalOpen(false);
      setStatus("");
    };


    useMemo(() => {
      getStatus(setAllStatus);
    }, []);
  
  return (
    <div className='post-status-main'>
      <div className='post-status'>
        <button className='open-post-model' onClick={() => setModalOpen(true)}>
        Post Something
        </button>
      </div>

      <ModalComponent 
      setStatus={setStatus} 
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen}
      status={status}
      sendStatus={sendStatus}
      />
      <div>
        {allStatuses.map((posts) => {
          return <PostsCard posts={posts}/>;
          
      })}
      </div>      
    </div>
  )
}
