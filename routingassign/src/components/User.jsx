import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const useQuery=(q)=>{
    const param= new URLSearchParams(window.location.search);
    return param.get(q);
}
export const User = () => {
  const [user, setUser] = useState([]);
  //console.log(user)
  useEffect(() => {
    axios.get(`https://reqres.in/api/users`).then(({ data }) => {
      setUser(data.data);
      
    });
  }, []);
  return (
    <div>
      {user.map((user) => (
        <p key={user.id}>
          <Link to={`/user/${user.id}`}>
            {user.id}. {user.first_name}
          </Link>
        </p>
      ))}
    </div>
  );
};
