import React from 'react'
import "./Home.css"
import "./Todo.css"
import Todo from './components/Todo.jsx'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <h1>Projects</h1>

        <div className="container">
            <div className="project">
                {/* Harshita - weather app */}
            </div>
            <div className="project">
                
            </div>
            <div className="project">
              {/* Ishika - todo app */}
                <NavLink to="/Todo"><h1>TodoApp by Ishika</h1></NavLink>

            </div>
            <div className="project">

            </div>
        </div>
    </>
  )
}

export default Home