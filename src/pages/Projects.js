import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import {motion} from 'framer-motion';
import {pageAnimation,titleAnim} from "../animation";
import "../styles/Projects.css";
import todo from "../assets/todo1.gif";
import Proj1 from "../images/music.gif";
import ListAltIcon from '@material-ui/icons/ListAlt';
import GitHubIcon from "@material-ui/icons/GitHub";

function Projects() {
  const titleanimation ={
    hidden:{opacity:0},
    show:{opacity:1,transition:{duration:2}},
        }
    
        const containerr={
            hidden:{x:100},
            show:{x:0,transition:{duration:0.75,ease:"easeOut",staggerChildren:1,when:'beforeChildren'}},
            
        }
  return (
    <motion.div className="projects"  variants={pageAnimation} initial="hidden" animate="show">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {/* {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })} */}
        <div className="proj">

        <a href="https://todoapp-87ebb.web.app/"> <h2>  {<ListAltIcon />} To-do App</h2></a>
          {/* <h2>  {<ListAltIcon />} To-do App</h2> */}
          <p>Todo app which helps you to add,delete and maintain an todo list</p>
           <a href="https://github.com/smritiagrawall/todo"> <p>      {<GitHubIcon />} link to code</p></a>
        </div>
        <div className="proj">
          <p>loading..</p>
        {/* <img src={Proj1} className="imge"></img> */}
        </div>
        <div className="proj">
          <p>loading..</p>
        {/* <img src={Proj1} className="imge"></img> */}
        </div>
        <div className="proj">
          <p>loading..</p>
        {/* <img src={Proj1} className="imge"></img> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
