import { useParams ,Navigate} from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import axios from "axios";
export const Userdetail = () => {
  const { id } = useParams();
  const [userdata, setUserdata] = useState({});
 const {isAuth}=useContext(AuthContext)
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setUserdata(data.data);
      
    });
  }, []);
if(!isAuth){
return <Navigate to={"/login"}/>
}
  return (
    <div>
      <img src={userdata.avatar}/>
      <p>user: {userdata.first_name} {userdata.last_name}</p>
      <p>email: {userdata.email}</p>
    </div>
  );
};
