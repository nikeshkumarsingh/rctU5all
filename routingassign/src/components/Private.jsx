import { AuthContext } from "../context/Authcontext";
import{Navigate}from "react-router-dom";
import {useContext}from "react";
export const Private=({children})=>{
const {isAuth}=useContext(AuthContext);
    if(!isAuth){
        return <Navigate to={"/login"} reaplace={true}/>
    }
    return children;
    
};