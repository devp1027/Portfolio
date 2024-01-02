import React, {useState} from 'react'
import { Tab, Tabs, Box } from "@mui/material";
import "../Styles/experiance.css";
import { Typography } from '@mui/material';

function Experiance() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
 
  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };
  return (
    <div class="experiance">
      <h1>Experience</h1>
        <React.Fragment>
        <Tabs className="Tabs"
        value={currentTabIndex} onChange={handleTabChange} 
        variant='fullWidth' indicatorColor='secondary'>
          <Tab label={<span style={{ color: 'white', fontSize: '16px' }}>CBSS Computer Science Club</span>} />
          <Tab label={<span style={{ color: 'white', fontSize: '16px' }}>First Robotics</span>} />
          <Tab label={<span style={{ color: 'white', fontSize: '16px' }}>McMaster Rocketry Team</span>} />
          <Tab label={<span style={{ color: 'white', fontSize: '16px' }}>IEEE Member</span>} />
          <Tab label={<span style={{ color: 'white', fontSize: '16px' }}>Saputo</span>} />
        </Tabs>

        {currentTabIndex === 0 && (
        <Box className = "CBSS" sx={{ p: 3 }}>
          <h2>Programming Instructor @ Castlebrooke Computer Science Club</h2>
          <p>Oct 2022 - Jun 2022</p>
          <Typography component="div">
            <ul>
              <li>Conducted regular workshops and lessons on Python, HTML, and CSS to a diverse group of over 100 students, equipping them with the necessary skills and knowledge to excel in the University of Waterloo's Canadian Computing Competition</li>
              <li>Collaborated with educators and fellow students to organize a comprehensive school-wide hackathon</li>
              <li>Additionally, spearheaded weekly competitions within the school community, aimed at enhancing students' skills and capabilities.</li>
              <li>The implementation of lessons and workshops resulted in improvements in computer science grades, increase ranging from 7% to 14%, as well as improving performance in the UW CCC by a remarkable 25% increase in points compared to previous years.</li>
            </ul>
          </Typography>
        </Box>
        )}

        {currentTabIndex === 1 && (
          <Box className = 'FRC' sx={{ p: 3 }}>
            <h2>Team Lead of Problem Solving team @ First Robotics </h2>
            <p>Dec 2020 - May 2021</p>
            <Typography component="div">
            <ul>
              <li>Team Lead of the problem-solving team in schools Innovation Challenge team. </li>
              <li>Hosted meetings with the team every week, and gave team members responsibilities and deadlines</li>
              <li>Assisted team members with any difficulties and problems.</li>
            </ul>
          </Typography>
          </Box>
        )}

        {currentTabIndex === 2 && (
          <Box className='MRT' sx={{ p: 3 }}>
            <h2>Launch Oversight and Logistics Team Member</h2>
            <p>Sep 2023 - Present</p>
            <Typography component="div">
            <ul>
              <li>Curated a risk assessment Form that analyzes the various risks involved with the launch and created safety measures to combat the risks</li>
              <li>Prepared logistics reports on how to safely use and manage the rocket</li>
            </ul>
          </Typography>
          </Box>
        )}
        {currentTabIndex === 3 && (
          <Box className = "IEEE" sx={{ p: 3 }}>
            <h2>RPI & Soldering Team Member</h2>
            <p>Sep 2023 - Present</p>
            <Typography component="div">
            <ul>
              <li>Utilized various RPI modules, such as Luma, to develop small projects such as creating a mini sound board with push buttons, and manipulated LED matrices relay characters while changing colour and orientation.</li>
              <li>Learned to develop circuit schematics and modelled a parallel LED matrix circuit on EasyEDA</li>
              <li>Learned how to read circuit schematics and translate the given schematic to a real circuit</li>
            </ul>
          </Typography>
          </Box>
        )}
        {currentTabIndex === 4 && (
          <Box className="saputo" sx={{ p: 3 }}>
            <h2>General Picker @ Saputo Dairy Products</h2>
            <p>Jun 2022 - Aug 2022</p>
            <Typography component="div">
            <ul>
              <li>Effectively oversaw daily inventory management operations, leveraging physical strength to transfer products from incoming trucks to their designated storage areas.</li>
              <li>Exercised meticulous attention to detail in upholding rigorous food safety procedures to prevent contamination and maintain optimal sterilization standards.</li>
            </ul>
          </Typography>
          </Box>
        )}
        </React.Fragment>

    </div>
  )
}

export default Experiance