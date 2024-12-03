import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import { Route,  Routes } from "react-router-dom";
import Form from "./components/Form/Form";


function App() {

    
  
 
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/result' element = {<Form/>} />
      </Routes>
    </>
  );
}

export default App;
