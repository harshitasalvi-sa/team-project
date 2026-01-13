import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import WeatherApi from './components/WeatherApi';
import Todo from './components/todo.jsx';
import Weather from './components/Weather';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/weatherapi" element={<WeatherApi />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/todo" element={<Todo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
