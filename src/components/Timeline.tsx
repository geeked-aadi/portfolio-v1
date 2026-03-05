import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

const educationData = [
  {
    date: "Sept 2024 – Present",
    title: "B.E in Computer Science Engineering",
    subtitle: "Bapuji Institute of Engineering and Technology",
    description: "CGPA: 8.5 / 10",
  },
  {
    date: "Aug 2022 – Apr 2024",
    title: "Higher Secondary Education (12th)",
    subtitle: "Athani Composite PU College",
    description: "Result: 95%",
  },
    {
    date: "2022",
    title: "Secondary School Certificate (10th)",
    subtitle: "B.E.A Higher Primary School — CBSE",
    description: "Score: 85.2%",
  },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education</h1>

        <VerticalTimeline>
          {educationData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "white",
                color: "rgb(39,40,34)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date={item.date}
              iconStyle={{
                background: "#5000ca",
                color: "#fff",
              }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.title}
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                {item.subtitle}
              </h4>

              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;