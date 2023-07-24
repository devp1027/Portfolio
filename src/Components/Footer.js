import React from 'react'
import "../Styles/Footer.css";
import github from './Icons/gihub logo.svg'
import email from './Icons/Email logo.svg'
import linkedin from './Icons/Linkedin Logo.svg'

function Footer() {
  return (
    <div className='footer' id="Footer">
        <div className = "Contact">
        <a href="https://www.linkedin.com/in/devp27/" target="_blank" rel="noreferrer"> <img src={linkedin} /> </a>
        <a href="https://github.com/devp1027" target="_blank" rel="noreferrer"> <img src={github} /> </a>
        <a href="mailto: devp7765@gmail.com" target="_blank" rel="noreferrer"> <img src={email} /> </a>
        </div>

        <div class = "name_copyright">
            <p>&copy; 2022 Dev Patel</p>
        </div>
    </div>
  )
}

export default Footer