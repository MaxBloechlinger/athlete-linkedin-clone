import React, {useEffect, useState} from "react";
import Homecomponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebaseConfig";
import Loader from "../components/common/Loader";


export default function Home({currentUser}) {
    const [loading, setloading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if(res?.accesstoken){
                navigate("/")
            } else{
                setloading(false);
            }
        });
    }, []);
    return loading ? <Loader/> : <Homecomponent currentUser={currentUser}/>;
}