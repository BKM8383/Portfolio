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
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><h2>MERN Movie App</h2></a>
                <p>Developed a full-stack application using the MERN stack for efficient data handling and dynamic updates. Integrated TMDB APIs to fetch and display real-time movie details with search and filter functionality based on title, genre, and rating.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><h2>Tetris Game</h2></a>
                <p>Built an interactive 2D Tetris game with JavaScript featuring classic gameplay mechanics and responsive controls. Implemented core game logic including piece rotation, movement, and line clearing.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><h2>Tic-Tac-Toe</h2></a>
                <p>Developed a classic Tic-Tac-Toe game with interactive mechanics and win detection algorithms. Designed user-friendly interface with clear visual feedback for game progress.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><h2>Recursion Tree Visualizer</h2></a>
                <p>Outlined a Recursion Tree Visualizer to illustrate recursive function execution dynamically. Created visual representations of function calls, parameters, and return values to aid in understanding complex algorithms.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><h2>Rock-Paper-Scissors Game</h2></a>
                <p>Created an interactive Rock-Paper-Scissors game with JavaScript featuring player vs. computer gameplay, score tracking, and responsive design for various screen sizes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><h2>IPL Scheduler</h2></a>
                <p>Programmed a console-based IPL Scheduler application for automating match scheduling, team management, and tournament organization. Implemented algorithms for generating balanced fixtures and tournament brackets.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><h2>Billing System</h2></a>
                <p>Developed a comprehensive Billing System application for tracking transactions, generating invoices, and managing financial records. Created user-friendly interfaces for data input and reporting.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><h2>Movie Booking System</h2></a>
                <p>Built a console-based Movie Booking System that allows users to browse available movies, select showtimes, choose seats, and process ticket purchases. Implemented data structures to manage theater capacity and booking information.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><h2>Real-time Chat App</h2></a>
                <p>Created a real-time Chat App with secure authentication and instant messaging functionality. Implemented websockets for live communication and database integration for message persistence.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><h2>JavaScript Games Collection</h2></a>
                <p>Developed a collection of mini-games and interactive applications using JavaScript, HTML, and CSS. Projects showcase front-end development skills and programming logic implementation.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
