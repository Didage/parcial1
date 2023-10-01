import React from 'react';
import { useState, useEffect } from "react";


import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {

  const [carList, setCarList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/parts' element={<Home carList={carList} setCarList={setCarList} />}/>
          <Route path='/parts/:id' element={<Detail carList={carList} setCarList={setCarList}/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
