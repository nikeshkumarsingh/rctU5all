import React,{useState}from"react";
import {Contact}from "./Contact";
import { Addtext } from "./Addtext";
const initstate=[
  {
    id:1,
    first_name:"nikesh",
    phone:"121212212"
  },
  {
    id:2,
    first_name:"ashwin",
    phone:"131232313"
  }
];
export const List=()=>{
  const [containerList,setContainerList]=useState(initstate);
  const handleClick=(text,num)=>{
      setContainerList([
          ...containerList,
          {
              id:containerList[containerList.length-1].id+1,
              first_name:text,
              phone:num
              
          }
      ])
  }
  const deleteById=(id)=>{
      setContainerList(containerList.filter((item)=>item.id!==id))
  }

  return (
    <div>
        <h1>Contact Details</h1>
        <Addtext handleClick={handleClick}/>
        <br/>
        {containerList.map((item)=>(
            <div key={item.id}>
              <Contact 
               id={item.id}
               Text={item.first_name}
               num={item.phone}
               onDelete={deleteById}
              />
              </div>
        ))}
    </div>
  );
}