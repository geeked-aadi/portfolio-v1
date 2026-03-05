import React from "react";
import portfolioImage from '../assets/images/portfolio-v1.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://geeked-aadi.github.io/portfolio-v1/" target="_blank" rel="noreferrer"><img src={portfolioImage} className="zoom" alt="Portfolio Website Screenshot" width="100%" /></a>
                    <a href="https://geeked-aadi.github.io/portfolio-v1/" target="_blank" rel="noreferrer"><h2>Personal Portfolio Website</h2></a>
                    <p>A responsive React-based portfolio website showcasing my skills, projects, and experience as a full stack developer. Built with React, TypeScript, SCSS, and Material-UI icons.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;