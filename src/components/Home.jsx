import React from 'react'
import "./Home.css"
import "./Todo.css"
import Todo from './components/Todo.jsx'
import { NavLink } from 'react-router-dom'
import Weather from './Weather'
import Calculator from './Calculator'
import { NavLink, Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
        <h1>Projects</h1>

        <div className="container">
            <div className="project">
                <Weather/>
            </div>
            <div className="project">
                
                <NavLink to="/calculator"><h1>Calculator by Disha</h1></NavLink>
            </div>
            <div className="project">
              {/* Ishika - todo app */}
                <NavLink to="/Todo"><h1>TodoApp by Ishika</h1></NavLink>

            </div>
            <div className="project">
                <NavLink to="/weatherapi"><h1>Weather App by jatin</h1></NavLink>
            </div>
        </div>
    </>
  )
}

export default Home