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
          date=" Aug 2025 – Present"
          iconStyle={{ background: "#A91D3A", color: "#A91D3A" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Team Lead Android Developer — TuduTechLab (Pvt.) Ltd </h3>
          <p>
          Leading native Android development in Kotlin & Java.

Guiding developers through clean architecture, code reviews, and best practices.

Collaborating with cross-functional teams to deliver high-quality apps.

Ensuring performance optimization and scalable feature implementation.


          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#A91D3A", color: "#A91D3A" }}
          contentArrowStyle={{ borderRight: "7px solid  #A91D3A" }}
          date="Sep 2025 – Present
"
          iconStyle={{ background: "#A91D3A", color: "#A91D3A" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Senior Android Developer — WebsCare (Pvt.) Ltd.
</h3>
          <p>
 Developing advanced native Android applications using Kotlin/Java.

Mentoring junior Android engineers and assisting in code quality improvements.

Enhancing app performance, stability, and maintainability.

Working closely with designers and backend teams for seamless feature delivery.


          </p>
        </VerticalTimelineElement>
         <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#A91D3A", color: "#A91D3A" }}
          contentArrowStyle={{ borderRight: "7px solid  #A91D3A" }}
          date="Jan 2025 – Aug 2025

"
          iconStyle={{ background: "#A91D3A", color: "#A91D3A" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Senior Android Developer — FutureTech

</h3>
          <p>
Led Android development for multiple client and in-house projects.

Implemented clean, scalable MVVM architecture with Jetpack components.

Improved app responsiveness, UI consistency, and system efficiency.

Collaborated across teams to meet project deadlines and product goals..


          </p>
        </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#A91D3A", color: "#A91D3A" }}
          contentArrowStyle={{ borderRight: "7px solid  #A91D3A" }}
          date="Aug 2022 – Jan 2025


"
          iconStyle={{ background: "#A91D3A", color: "#A91D3A" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Android Developer — Enfotrix (Pvt.) Ltd.


</h3>
          <p>
Developed 12+ major Android applications in Kotlin/Java.

Worked with Room, WorkManager, Firebase, and REST APIs for full app lifecycles.

Built high-performance UI using XML layouts and custom components.

Mentored interns and junior developers in Android fundamentals.


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