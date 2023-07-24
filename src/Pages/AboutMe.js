import React from 'react'
import "../Styles/AboutMe.css";
import cricket_pic from '../Components/Icons/cricket_picture.jpg'

function AboutMe() {
  return (
    <div className='title'>
      <h1>Who is Dev Patel?</h1>
      <div className='description'>
        <div className = "cricket_pic" style={{float : 'left', paddingLeft : '50px'}} >
          <img src={cricket_pic}/>
        </div>
        <div className='intro'>
          <p>
            Hello, I'm Dev Patel, a technology enthusiast focused on designing, developing, and programming
            solutions that can truly transform lives. 
          </p>
          <p>
            In addition to my passion for technology, I am an accomplished cricketer, having represented the Ontario U18
            Provincial team and currently making strides towards representing the Canadian U19 National team. 
          </p>
          <p>
            Growing up in Toronto, Canada I found my passion for technology and innnovation from a very young age. 
            Since then, I have consistently pursued knowledge of cutting-edge advancements and dedicated myself to
            creating projects that have the power to positively transform lives. I am currently studying Computer
            Engineering at McMaster University and always seeking new internship opportunities 
          </p>
        </div> 
        <div className='Connect'>
        <h1>Let's Connect!</h1>
          <p>Thank you for going over my website!</p>
          <p>Please feel welcome to connect with me through any of my socials below, I'm always down for a chat! </p>
        </div> 
        </div>
      </div> 
  )
}

export default AboutMe


{/* <div className='Connect'>
        <h1>Let's Connect!</h1>
        <p>Thank you for going over my website!</p>
        <p>Please feel welcome to connect with me through any of my socials below, I'm always down for a chat! </p>
</div> */}