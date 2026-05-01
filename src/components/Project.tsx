import React from "react";
import portfolioImage from '../assets/images/portfolio-v1.png';
import skillSwapImage from '../assets/images/skillswap.jpg';
import traxnLabsImage from '../assets/images/traxnlabs.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://geeked-aadi.github.io/portfolio-v1/" target="_blank" rel="noreferrer">
                        <img src={portfolioImage} className="zoom" alt="Portfolio Website Screenshot" width="100%" />
                    </a>
                    <a href="https://geeked-aadi.github.io/portfolio-v1/" target="_blank" rel="noreferrer">
                        <h2>Personal Portfolio Website</h2>
                    </a>
                    <p>A responsive React-based portfolio website showcasing my skills, projects, and experience as a full stack developer. Built with React, TypeScript, SCSS, and Material-UI icons.</p>
                </div>

                <div className="project">
                    <img src={traxnLabsImage} className="zoom" alt="TracxnLabs Screenshot" width="100%" />
                    <h2>TracxnLabs</h2>
                    <p>An AI-powered secure online examination platform with real-time webcam proctoring, face detection, credibility scoring, and automated code evaluation. Built with React, TypeScript, Supabase, and TailwindCSS.</p>
                </div>

                <div className="project">
                    <img src={skillSwapImage} className="zoom" alt="Skill Swap Screenshot" width="100%" />
                    <h2>Skill Swap</h2>
                    <p>A MERN stack platform for peer-to-peer skill exchange featuring real-time chat, video calls, mentorship matching, and AI-powered recommendations.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;