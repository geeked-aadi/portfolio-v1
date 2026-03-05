import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
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
                {/* <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Project Title 2</h2></a>
                    <p>Project description goes here. Add details about technologies used and what the project accomplishes.</p>
                </div>
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Project Title 3</h2></a>
                    <p>Project description goes here. Add details about technologies used and what the project accomplishes.</p>
                </div> */}
            </div>
        </div>
    );
}

export default Project;