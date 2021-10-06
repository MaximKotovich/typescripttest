import React, {useEffect} from 'react';
import './App.scss';
import Autor from "./store/components/autor"
import HomePage from "./store/components/homePage";
import { useTypeSelector } from './store/reducers/combineReducer';
import {BrowserRouter,Route} from "react-router-dom"


function App() {
const isLogined = useTypeSelector(state => state.autor.isLogined);
const llStorage = Boolean(localStorage.getItem('isLogined'));




  if (llStorage){ 
  return(
      <HomePage></HomePage> 
  )}
  return(
       <Autor></Autor> 
  )

}

export default App;
