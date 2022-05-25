

import { Pro } from './components/chakRa';
import { AppendData } from './components/data';
import { Nav } from './components/NAv';
import { Simp } from './components/simple';
import{Routes,Route}from"react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <AppendData/>
      <Pro/>
      <Simp/> */}
      <Routes>
       <Route path="/" element={<AppendData/>}></Route>
       <Route path="/layout1" element={<Pro/>}></Route>
       <Route path="/layout2" element={<Simp/>}></Route>
       {/* <Route path="/layout3" element={}></Route> */}
      
     </Routes>
    </div>
  );
}

export default App;
