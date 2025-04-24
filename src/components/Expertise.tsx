import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "SpringBoot",
    "CSS3",
    "Express",
    "Node.js",
    "MongoDB",
    "Angular",
    "HTML5",
    "Bootstrap",
    "Tailwind CSS"
];

const labelsSecond = [
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "MySQL",
    "MongoDB",
    "PostgreSQL"
];

const labelsThird = [
    "C++",
    "C",
    "Java",
    "Python",
    "JavaScript",
    "PHP"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Programming</h3>
                    <p>I'm passionate about solving complex problems through programming. With strong fundamentals in data structures and algorithms (evidenced by my 1500+ rating on LeetCode and 5-star HackerRank profile), I create efficient and optimized solutions across multiple programming languages.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Development</h3>
                    <p>I have built a diverse array of web applications using the MERN stack (MongoDB, Express, React, Node.js). I specialize in creating responsive and interactive UIs with modern frameworks like React and Angular, while integrating various APIs for dynamic data handling.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Database</h3>
                    <p>I have experience working with various databases and development tools to support efficient application development. My skills include version control, containerization, and working in Linux environments to create robust and scalable solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
