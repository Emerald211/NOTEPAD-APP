import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/home";
import Nav from "./component/nav";
import AddNote from "./component/nextpage";
import Editnote from "./component/editnote";


function App() {
  
  const [lightMode, Mode] = useState(false);
  localStorage.setItem("colorChange", lightMode);
  const getColorChange = localStorage.getItem('colorChange')
  
  const changeMode = () => {
    const appBody = document.querySelector('body');

    
  


    Mode(!lightMode)

    localStorage.setItem("colorChange", !lightMode);


    console.log(getColorChange)

    

    appBody.style.backgroundColor = lightMode ? "" : "#EEEEEE"
    


  }
  return (
    <BrowserRouter>
      <Nav change ={changeMode} mode={lightMode} />
      <Routes>
        <Route path="/" element={<Home change = {lightMode} />} />
        <Route path="/addnote" element={<AddNote />} />
        <Route path="/editnote" element={<Editnote />} />
      </Routes>
      
   
    </BrowserRouter>
  );
}

export default App;
