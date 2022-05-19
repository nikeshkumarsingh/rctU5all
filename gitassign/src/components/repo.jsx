import axios from "axios";

import {useState,useEffect}from "react";
import { Card } from "./styles/card";
import { Main } from "./styles/main";

const gitrepo=(q,page)=>{
    return axios(`https://api.github.com/search/repositories?q=react`,{
        method:"GET",
        params:{
            q:q,
            per_page:5,
            page
        }
    });
}

export const Repo=()=>{
  const [loading,setLoading]=useState(true);
  const [query,setQuery]=useState("")
  const [data,setData]=useState([]);
  const [sub,setSub]=useState("react")
  const [page,setPage]=useState(1);
console.log(data)

  useEffect(()=>{
      gitrepo(query,page)
      .then((res)=>{
          setLoading(false);
          
          setData(res.data.items);
      })
      .catch((err)=>{
          setLoading(false);
          console.log(err);
      })
  })
  const handleclick=()=>{
      setQuery(sub)
      
  }
  const cahngepage=(e)=>{
    setPage(e.target.value);
  }

    return(
        <div>

            <h2>github</h2>
            {loading && <div>...loading</div>}
            <div>
            <input type="text" onChange={(e)=>setSub(e.target.value)} placeholder="search repo"/>
                
            <button onClick={handleclick}>search</button><span><select onChange={cahngepage}><option value="5">5</option>
                <option value="7">7</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="20">20</option>
                </select></span>
            </div>
            <Main>
                {data.map((e)=>(
                    <Card key={e.id}>
                        <img style={{width:"50%"}} src={e.owner.avatar_url}/>
                        <p>{e.name}</p>
                        <p>visibility:{e.visibility}</p>
                        <p>name: {e.full_name}</p>
                        <p>open</p>
                        <p>{e.created_at}</p>
                        <p>license:-</p>
                        <p>key:{e.license.key}</p>
                        <p>name:{e.license.name}</p>
                        <p>TOPICS:{e.topics}</p>
                    </Card>
                ))}
            </Main>
        </div>
    )
}