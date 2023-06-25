import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import Link from '@material-ui/core/Link';
import { Parallax } from "react-parallax";
import image1 from '../images/Home4.png';
import smruti from '../images/smriti.jpeg';
import "../styles/Home.css";
import image2 from '../images/Home9.png';
import image3 from '../images/Home5.png';
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
    
    // bar: {
      // hue: 32,
      bar:"#93ABE2",
      saturation: 50,
      level: {
        minimum: 30,
        maximum: 70
      },
    // },
    title: {
      
    },
    title: {
      // text: {
      //   hue: 45,
      //   saturation: {
      //     minimum: 30,
      //     maximum: 70
      //   },
      //   level: 50
      // },
      text: '#D5D9E3',
      background: '#3035BA',
         hue: 30,
        saturation: {
          minimum: 30,
          maximum: 70
        },

      // background: {
      //   background:"#3744b9",
      //   hue: 30,
      //   saturation: {
      //     minimum: 30,
      //     maximum: 70
      //   },
      //   level: {
      //     minimum: 0,
      //     maximum: 50
      //   }
      // }
    }
  };
  return (
    < div className="home" >
    <Parallax bgImage={image1} strength={500} className="back">
       <motion.div className="about" variants={pageAnimation} initial="hidden" animate="show">
        <h1> Hi, My Name is Smruti</h1>
        <div className="prompt">
          <p> Student of CS department  specialising in Data Science.Currently working as frontend web developer.</p>
          {/* <img className="image" src={smruti} alt="my image"></img> */}
          <a href="resume.pdf" ><button type="button"  className="button">Resume</button></a>
{/* <a rel="noreferrer" href={require("../images/resume.pdf")} download={"resume"}><button type="button"  className="button">Resume</button></a> */}
        </div>

      </motion.div>
      </Parallax>
      <Parallax bgImage={image3} strength={500}> 
     <div className="aa">
 
<SkillBar skills={skills} animationThreshold={0.8} colors={colors} height={20}/>
</div>
</Parallax>
       <Parallax bgImage={image2} strength={500}> 
       <h3 className="heading"> About me</h3>
       <div className="skillss">
  
            <div className="para">
              <p className="pp">
            Hey,I am Smruti Agrawal. A Frontend developer(React). C,C++,Python are the languages I learned during my academics. 
            Currently I am a third year student at Shri Ramdeobaba college of engineering and management  pursuing 
            my Bachelor's degree in Computer Science,specialising in data science.
            </p>
            </div>
        
        <div className="img"><img className="image" src={smruti} alt="my image"></img></div>
        
        
       </div>
     
     </Parallax>
  
      <div className="skills">
  

  <h3 className="heading">Contact details</h3>
  
     
      <div className="para">
        <p>
        smrutiagrawal02@gmail.com
      </p>
      <span className="icon">
      <Link href="https://www.linkedin.com/in/smruti-agrawal/" target="_blank" className="iicon"><LinkedInIcon /></Link>
          <Link href="https://twitter.com/SmritiA60055787" target="_blank" > <TwitterIcon /></Link>
         
          <Link href="https://github.com/smritiagrawall" target="_blank" ><GithubIcon /></Link>
      </span>
      </div>
      </div>
      {/* <div className="skills">
      
            <h3 className="heading">Contact details</h3>
            <div className="prompt">
              
              <p className="mail">smrutiagrawal02@gmail.com</p>
             <Link href="https://www.linkedin.com/in/smruti-agrawal/" target="_blank" ><LinkedInIcon /></Link>
          <Link href="https://twitter.com/SmritiA60055787" target="_blank" > <TwitterIcon /></Link>
         
          <Link href="https://github.com/smritiagrawall" target="_blank" ><GithubIcon /></Link>
          
            </div>
         
      </div> */}
    </div>

    
  );
}

export default Home;
