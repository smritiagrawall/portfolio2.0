import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import Link from '@material-ui/core/Link';
import { Parallax } from "react-parallax";
import image1 from '../images/head2.jpg';
import smruti from '../images/smruti.png';
import "../styles/Home.css";
import image2 from '../images/head6.jpg';
import image3 from '../images/head7.jpg';
import SkillBar from 'react-skillbars';
import {motion} from 'framer-motion';
import {pageAnimation,titleAnim} from "../animation";
import image4 from '../images/head11.jpg';

function Home() {
  const titleanimation ={
    hidden:{opacity:0},
    show:{opacity:1,transition:{duration:2}},
        }
    
        const containerr={
            hidden:{x:100},
            show:{x:0,transition:{duration:0.75,ease:"easeOut",staggerChildren:1,when:'beforeChildren'}},
            
        }
  const skills = [
    { type: 'HTML', level: 70 },
    { type: 'Python', level: 55 },
    { type: 'DBMS', level: 50 },
    { type: 'React', level: 45 },  
    { type: 'c++', level: 40 },
    { type: 'Java', level: 35 },  
    { type: 'Django', level: 10 },
   
  ];
  const colors = {
    
    bar: {
      hue: 32,
      saturation: 50,
      level: {
        minimum: 30,
        maximum: 70
      }
    },
    title: {
      text: {
        hue: 45,
        saturation: {
          minimum: 30,
          maximum: 70
        },
        level: 50
      },
      background: {
        background:"#2196F3",
        hue: 30,
        saturation: {
          minimum: 30,
          maximum: 70
        },
        level: {
          minimum: 0,
          maximum: 50
        }
      }
    }
  };
  return (
    < div className="home" >
    <Parallax bgImage={image1} strength={500}>
       <motion.div className="about" variants={pageAnimation} initial="hidden" animate="show">
        <h1> Hi, My Name is Smruti</h1>
        <div className="prompt">
          <p> Student of CS department  specialising in Data Science.Currently working as frontend web developer.</p>
          <img className="image" src={smruti} alt="my image"></img>
       
        </div>

      </motion.div>
      </Parallax>
      <Parallax bgImage={image3} strength={500}> 
     <div className="aa">
 
<SkillBar skills={skills} animationThreshold={0.8} colors={colors} height={20}/>
</div>
</Parallax>
       <Parallax bgImage={image2} strength={500}> 
       <div className="skills">
      
       {/* <h1> About me</h1> */}
        <ol className="list">
          <li className="item">
            <h3 className="heading"> About me</h3>
            <span className="para">
            I am currently a third year student at Shri Ramdeobaba college of engineering and management and pursuing my btech from here.
            I am frontend web developer, currently execeling in data science.
            
            </span>
          </li>
          
        
        </ol>
       </div>
     
     </Parallax>
     <Parallax bgImage={image3} strength={500}>
     <div className="projects1">
       <h1> Education</h1>
      <div className="projectList">
       <div className="proj1">
        <h1>10th</h1>
       <p className="paraa"> Vidyaniketan English Medium School (93%)</p>
        </div>
        <div className="proj1">
        <h1>12th</h1>
          <p className="paraa">Atulesh High School (74%)</p>
        </div>
<div>
  <p></p>
  <p></p>
</div>
      </div>
      </div>
      </Parallax>
      <div className="skills">
      <ol className="list">
      <li className="item">
            <h3 className="heading">Contact details</h3>
            <span className="prompt">
              <p className="mail">smrutiagrawal02@gmail.com</p>
             <Link href="https://www.linkedin.com/in/smruti-agrawal/" target="_blank" ><LinkedInIcon /></Link>
          <Link href="https://twitter.com/SmritiA60055787" target="_blank" > <TwitterIcon /></Link>
         
          <Link href="https://github.com/smritiagrawall" target="_blank" ><GithubIcon /></Link>
          
            </span>
          </li>
      </ol>
      </div>
    </div>

    
  );
}

export default Home;
