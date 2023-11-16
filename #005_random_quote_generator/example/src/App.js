import Navbar from "./components/Navbar.js";
import "./App.css";
import Quote from "./components/Quote.js";
import React,{ useState } from "react";

function App() {
  //Adding Theme Colors of bootstrap in an Array
  const colors = [
    'bg-primary',
    'bg-secondary',
    'bg-success',
    'bg-info',
    'bg-warning',
    'bg-danger',
    'bg-dark',
  ];
  //Setting Colormode to change color randomly
  const [mode, setMode] = useState(colors[0]);
  const toggleColor = ()=>{
    let randomColor = Math.floor(Math.random() * colors.length);
    setMode(colors[randomColor]);
  }
  //Changing body color according to mode
  document.getElementById("mainbody").className = mode;
  
  
  
  //passing props to change color and function to change color on click
  return (
    <>
      <Navbar mode={mode}/>
      <Quote mode={mode} toggleColor={toggleColor}/>
    </>
  );
}

export default App;
