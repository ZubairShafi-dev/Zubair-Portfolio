import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

  import React from 'react'
  const WorkIcon = () => <></>;
  const Experience = () => {
    return (
      <div style={{ maxWidth: "90vw", margin: "0 auto", padding: "20px" }}>Experience

        <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#A91D3A", color: "#A91D3A" }}
          contentArrowStyle={{ borderRight: "7px solid  #A91D3A" }}
          date="31/05/2022  - present"
          iconStyle={{ background: "#A91D3A", color: "#A91D3A" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Mobile application developer </h3>
          <h4 className="vertical-timeline-element-subtitle">Enfotrix, Sargodha</h4>
          <p>
          Led development projects from concept to deployment, managing agile workflows for timely, high-quality results.
          Conducted Android development training for two years, mentoring students in advanced mobile technologies and real-world projects.
          </p>
        </VerticalTimelineElement>
  
       
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#A91D3A", color: "#A91D3A" }}
          contentArrowStyle={{ borderRight: "7px solid  #A91D3A" }}
          date="31/05/2022  - present"
          iconStyle={{ background: "#A91D3A", color: "#A91D3A" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Mobile application developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Enfotrix, Sargodha</h4>
          <p>
       
          </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline></div>
    )
  }
  
  export default Experience