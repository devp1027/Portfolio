import React from 'react'
import Experiance from './Experiance';
import "../Styles/Home.css";
import arrow from '../Components/Icons/arrow_down.png'
import Project from './Project';

function Home() {
  return (
    <div className='Home'>
      <div className="Name">
        <h3>Hey, my name is . . .</h3>
        <h2>Dev Patel</h2>
        <div className = 'discription'>
          <p>I currently study Computer Engineering at McMaster University & focus on Robotics Engineering and Software Development</p>
        </div>
      </div>
      <div className = "scroll_down">
        <img src={arrow}/>
      </div>
      <div className="experiance">
      <Experiance/>
      </div>
      <div className='projects'>
        <Project/>
      </div>
    </div>
  )
}

export default Home