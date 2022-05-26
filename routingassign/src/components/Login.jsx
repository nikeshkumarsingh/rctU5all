import {useContext}from"react";
import{AuthContext}from "../context/Authcontext";
import {useNavigate}from "react-router-dom";

export const Login=()=>{
const {handleAuth}=useContext(AuthContext);
const navigate=useNavigate();
    return(
        <div>
            <input type="text" placeholder="enter name"/>
            <input type="text" placeholder="enter email"/>
            <button onClick={()=>{
                handleAuth(true);
                navigate("/",{replace:true})
            }

            }>Submit</button>
        </div>
    )
}