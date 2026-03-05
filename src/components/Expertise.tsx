import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const skills = [
  {
    icon: faReact,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications using modern frontend technologies and component-based architectures.",
    tech: ["React", "JavaScript", "HTML", "CSS"]
  },
  {
    icon: faPython,
    title: "Backend Development",
    description:
      "Designing APIs and backend services for scalable applications using Python frameworks and database systems.",
    tech: ["Python", "Flask", "FastAPI", "PostgreSQL"]
  },
  {
    icon: faDocker,
    title: "DevOps & Tools",
    description:
      "Working with containerization, version control, and development tools to build and deploy reliable software systems.",
    tech: ["Docker", "Git", "Linux", "CI/CD"]
  }
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={skill.icon} size="3x" />

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>

                {skill.tech.map((tech, i) => (
                  <Chip key={i} className="chip" label={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Expertise;