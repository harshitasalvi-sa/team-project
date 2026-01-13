import React from 'react'
import "./Home.css"
import Calculator from './Calculator'
import { NavLink, Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
        <h1>Projects</h1>

        <div className="container">
            <div className="project">
                {/* Harshita - weather app */}
            </div>
            <div className="project">
                <NavLink to="/calculator"><h1>Calculator by Disha</h1></NavLink>
            </div>
            <div className="project">

            </div>
            <div className="project">
                <NavLink to="/weatherapi"><h1>Weather App by jatin</h1></NavLink>
            </div>
        </div>
    </>
  )
}

export default Home