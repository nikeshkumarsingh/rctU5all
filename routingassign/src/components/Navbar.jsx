import { Link } from "react-router-dom";
export const Navbar = () => {
  const nav = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    {title:"User" , to:"/user"},
  ];
  return (
    <div style={{display:"flex",justifyContent:"space-around",background:"teal",height:"50px",marginBottom:"20px"}}>
      
      {nav.map((e, i) => (
        <Link style={{color:"white"}}key={i} to={e.to}>
          {e.title}
        </Link>
      ))}
    </div>
  );
};
