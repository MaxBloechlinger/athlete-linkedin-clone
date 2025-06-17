import React, {useEffect, useState} from "react";
import LoginComponent from "../components/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebaseConfig";
import Loader from "../components/common/Loader";

export default function Login(){
    const [loading, setloading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if(res?.accesstoken){
                navigate("/home")
            } else{
                setloading(false);
            }
        });
    }, [])
    return loading ? <Loader/> : <LoginComponent/>;
}