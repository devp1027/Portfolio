import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import {HashLink} from "react-router-hash-link"
import resume from '../Components/Icons/Patel_Dev_Resume.pdf'

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        setExpandNavbar(false);
    },[location])
  return (
    <div className="navbar" id={expandNavbar ? "open":"close"} >
        <div className='toggleButton'>
            <button onClick={()=> {
                setExpandNavbar((prev)=>!prev)
            }}>
            <ReorderIcon></ReorderIcon>
            </button>
        </div>
        <nav className='links'>
            <Link className='home' to='/'>Dev Patel</Link>
            <Link to='/AboutMe'>About Me</Link>
            <HashLink className='contact' to='#Footer' smooth={true} duration={800}>Contact</HashLink>
            <a href = {resume} target = "_blank">Resume</a>
        </nav>
    </div>
  )
}

export default Navbar