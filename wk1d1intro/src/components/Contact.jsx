import React,{useState}from "react";
export const Contact=({id,Text,num,onDelete})=>{

    return(
        <div style={({
                      padding:"1rem",
                      
                      marginBottom:"0.25rem",
                      gap:"1rem"
        })}>
            <h3>
                {Text} 
            </h3>
            <br></br>
            <div style={({color:"grey" ,marginTop:"-40px"})}>{num}</div>
            <button onClick={()=>onDelete(id)}>DELETE</button>
            <div style={({border:"1px solid grey",marginTop:"8px"})}></div>
        </div>
    )
}