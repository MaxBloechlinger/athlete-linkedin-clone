import React, { useMemo, useState } from 'react';
import Home from '../Pages/Home'
import { getCurrentUser } from '../api/FirestoreAPIs';
import Topbar from '../components/common/Topbar';

export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});
  
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, [])
  return (
    <div>
        <Topbar />
        <Home currentUser={currentUser}/>
    </div>
  );
}
