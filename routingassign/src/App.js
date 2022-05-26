import logo from './logo.svg';
import './App.css';
import{Routes,Route}from"react-router-dom";
import {About}from "./components/About";
import{Home}from "./components/Home";
import{Navbar}from "./components/Navbar";
import{User}from "./components/User";
import { Userdetail } from './components/Userdetail';
import{Private}from "./components/Private";
import {Login}from "./components/Login";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Routing App</h1>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/user" element={<User/>}></Route>
       <Route path="/user/:id" element={<Private><Userdetail/></Private>}></Route>
       <Route path="/login" element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
