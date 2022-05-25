import { Box, Container, WrapItem } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from "react-router-dom";
export const Nav = () => {
    const nav=[
        {title:"Home",to:"/"},
        {title:"layout-1",to:"/layout1"},
        {title:"layout-2",to:"/layout2"},
        {title:"layout-3",to:"/layout3"}
    ]
  return (
    <Container style={{ border: "1px solid black", height: "70px",display:"flex",justifyContent:"space-between" ,width:"100%"}}>
      <Box style={{ width: "65px" }}>
        <img style={{width:"100%"}} src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75" />
      </Box>
      <Box style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)" ,gridGap:"15px"}}>
          {nav.map((e,i)=>(
              <Link style={{fontSize:"20px"}} key={i} to={e.to}>{e.title}</Link>
          ))}
      </Box>
      <Box style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridGap:"5px"}}>
        <Button colorScheme="blue" variant="outline">
          Sign in
        </Button>

        <Button style={{border:"1px solid blue",color:"blue",padding:"7px", borderRadius:"5px"}} colorScheme="blue" variant="outline">
          Log in
        </Button>
        <Button style={{background:"rgb(87,111,209)",color:"white" ,padding:"7px", borderRadius:"5px"}} colorScheme='blue'>Post a job<span>🚀</span></Button>
      </Box>
    </Container>
  );
};
