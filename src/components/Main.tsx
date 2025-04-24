import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description'; // Import CV icon
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/BKm83" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://drive.google.com/file/d/1911zexz3GNL1a4NDPdtEEvdhDqRT37qf/view?usp=sharing" target="_blank" rel="noreferrer"><DescriptionIcon/></a> {/* CV icon */}
          </div>
          <h1>Bhupendra Kumawat</h1>
          <p>Aspiring Software Developer | CSE Student @ LPU | Passionate about Software Development & Problem Solving</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/bkm8383/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/BKm83" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="/path-to-your-cv.pdf" target="_blank" rel="noreferrer"><DescriptionIcon/></a> {/* CV icon */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;