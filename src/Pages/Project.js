import React from 'react'
import "../Styles/Projects.css";
import { Typography } from '@mui/material';
import remote_pic from '../Components/Icons/CCR_picture.png'
import QIL_pic from '../Components/Icons/RQA_picture.png'
import webapp_pic from '../Components/Icons/webapp_picture.png'

function Project() {
  return (
    <div className = 'title'>
      <h1>Projects</h1>
      {/* ------------------------------ */}
      <div className='ComfortClick'>
        <h2>ComfortClick Remote</h2>
        <div className = "remote_pic" style={{float : 'right', paddingRight : '50px'}} >
            <img src={remote_pic}/>
        </div>
          <Typography className='CCR' component="div" >
            <ul>
              <li>Developed a personalized remote for individuals with Multiple Sclerosis, that has many functions to provide a more convenient TV viewing experience.</li>
              <li>Using various Arduino libraries, we controlled IR sensors and receivers to input and output correct binary data</li>
              <li>With the use of Autodesk inventor an ergonomic casing was built which in which an anti-slip material was used to help with holding the remote for prolonged periods of time.</li>
            </ul>
          </Typography>
      </div>
      {/* ------------------------------ */}
      <div className='GetAGrip'>
        <h2>GetAGrip, Robotic Q-Arm</h2>
        <div className = "QIL_pic" style={{float : 'left', paddingLeft : '50px'}} >
            <img src={QIL_pic}/>
        </div>
        <Typography className='RQA' component="div">
            <ul>
              <li>Utilized Quanser interactive labs and python to code and test a robotic Q-Arm that accurately picks up, transfers, and drops off a sterilized container based on size and color.</li>
              <li>Utilized functions and pythons random module to run various tests on the code to ensure it works for all occurrences</li>
              <li>Created an algorthim that accurately checks for changes in the poteniometer reading, and translates the changes to the Q-Arm </li>
              <li>Utilized Quanser Interactive Labs to test the robotic Q-Arm</li>
            </ul>
          </Typography>
        {/* ------------------------------ */}
        <div className="MyWorkouts">
          <h2>MyWorkouts, Workout Planner and Sorter Web App</h2>
          <div className = "webapp_pic" style={{float : 'right', paddingRight : '0px'}} >
            <img src={webapp_pic}/>
          </div>
          <Typography className='webapp' component="div">
            <ul>
              <li>Developed a web app that’s stores, and logs workouts using Flask backend to manage the app route and process the HTTP requests.</li>
              <li>Utilized the JavaScript Local Storage to manage and store user information as well as tracking progress, the web app was hosted using Heroku.</li>
              <li>Implemented a responsive frontend that uses HTML, CSS, and JavaScript </li>
            </ul>
          </Typography>
        </div>

      </div>
    </div>
  )
}

export default Project