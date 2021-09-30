import React from 'react';
import './App.scss';
import Autor from "./store/components/autor"
import HomePage from "./store/components/homePage";


function App() {


  if (localStorage.getItem("isLogined")){ 
  return(
    <Autor></Autor>
  )}
  return(
    <HomePage></HomePage>  
  )

}

export default App;
