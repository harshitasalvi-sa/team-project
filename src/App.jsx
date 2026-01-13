import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import WeatherApi from './components/WeatherApi';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/weatherapi" element={<WeatherApi />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
