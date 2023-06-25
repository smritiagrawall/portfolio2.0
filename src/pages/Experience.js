import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import {motion} from 'framer-motion';
import {pageAnimation,titleAnim} from "../animation";

function Experience() {
  const titleanimation ={
    hidden:{opacity:0},
    show:{opacity:1,transition:{duration:2}},
        }
    
        const containerr={
            hidden:{x:100},
            show:{x:0,transition:{duration:0.75,ease:"easeOut",staggerChildren:1,when:'beforeChildren'}},
            
        }
  return (
    <motion.div
      className="page1"
      initial={{
        scaleX: 0,
      }}
      animate={{
        scaleX: 1,
      }}
      exit={{
        scale: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
          <motion.div
        className="page-body"
        initial={{
          y: -150,
        }}
        animate={{
          y: 0,
        }}
      >
      <VerticalTimeline lineColor="#3e497a">
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"

          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Joint media head at ACM
          </h3>

         <p>
          joined as joint media head at ACM(Association of computary and machineary) chapter
          in college 
          
          </p>
         
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Frontend web developer Internship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            O(1) Coding Club
          </h4>
          <p>Completed my first intership at o(1) coding club as frontend web developer.
              Worked on web project called as Know your prep currently hosted and used by many colleges.</p>
    <p>"6 months"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          React Internship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Etherate labs
          </h4>
          <p>Completed my second paid intership at Etherate labs as frontend web developer.
              Worked on chorme extension designing part called as firefly.</p>
    <p>"1 month"</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </motion.div>
    </motion.div>
  );
}

export default Experience;
