import c2 from '../assets/images/certificates/NPTEL24CS91S35950002404106108_page-0001.jpg';
import c3 from '../assets/images/certificates/img19.jpg';
import c4 from '../assets/images/certificates/img19 (2).jpg';
import c5 from '../assets/images/certificates/img19 (3).jpg';
import c6 from '../assets/images/certificates/img19 (5).jpg';
import c7 from '../assets/images/certificates/a_page-0001.jpg';
import c8 from '../assets/images/certificates/Coursera ZA2ZNHYV6XFH.jpg';
import c9 from '../assets/images/certificates/32QZJMA5U8XG.jpg';
import c10 from '../assets/images/certificates/62HL6EY4AFRD.jpg';
import c11 from '../assets/images/certificates/BF5F2VXYZPJA.jpg';
import c12 from '../assets/images/certificates/Coursera 3NE27MP3AW25.jpg';
import c13 from '../assets/images/certificates/Coursera 5MMQR8D6PFV8.jpg';
import c14 from '../assets/images/certificates/Coursera 6EXPGZSVYPNW.jpg';
import c15 from '../assets/images/certificates/Coursera 8EKFEUB5ZEVD.jpg';
import c16 from '../assets/images/certificates/Coursera 62HL6EY4AFRD.jpg';
import c17 from '../assets/images/certificates/Coursera BF5F2VXYZPJA.jpg';
import c18 from '../assets/images/certificates/Coursera HPSP729GFKAY.jpg';
import c19 from '../assets/images/certificates/Coursera L3UW73SB9YWZ.jpg';
import c20 from '../assets/images/certificates/Coursera LCTVPC2UYP2P.jpg';
import c21 from '../assets/images/certificates/Coursera PBXER2RV5CPK.jpg';
import c22 from '../assets/images/certificates/Coursera RHX8JTGFSUJQ.jpg';
import c23 from '../assets/images/certificates/Coursera SR57Q7GQ6T99.jpg';
import c24 from '../assets/images/certificates/Coursera TTQV2N5CNFCG.jpg';
import c25 from '../assets/images/certificates/Coursera U6W4464JV5UN.jpg';
import c27 from '../assets/images/certificates/Coursera XRFZNWU5HLDT.jpg';
import c28 from '../assets/images/certificates/Coursera Z9GB7X28S5KW.jpg';
import c30 from '../assets/images/certificates/download.png';

import '../assets/styles/Certificates.scss';

function Certificates() {
    const certificates = [
        { src: c2, title: 'Software Testing', provider: 'NPTEL' },
        { src: c3, title: 'Java(Basic)', provider: 'Hackerrank' },
        { src: c4, title: 'Python(Basic)', provider: 'Hackerrank' },
        { src: c6, title: 'Software Engineer Intern', provider: 'Hackerrank' },
        { src: c5, title: 'Problem Solving (Intermediate)', provider: 'Hackerrank' },
        { src: c7, title: 'DSA-Training', provider: 'Linux Socials' },
        { src: c8, title: 'Learn to code with AI', provider: 'Coursera' },
        { src: c11, title: 'Generative AI for everyone', provider: 'Coursera' },
        { src: c10, title: 'Introduction to Generative AI', provider: 'Coursera' },
        { src: c9, title: 'Generative AI Primer', provider: 'Coursera' },
        { src: c12, title: 'ChatGPT Playground for beginners', provider: 'Coursera' },
        { src: c13, title: 'Introduction to Large Language Models', provider: 'Coursera' },
        { src: c14, title: 'Build AI Apps with ChatGPT, Dall-E, and GPT-4', provider: 'Coursera' },
        { src: c15, title: 'Server side JavaScript with Node.js', provider: 'Coursera' },
        { src: c16, title: 'Generative AI with Large Language Models', provider: 'Coursera' },
        { src: c17, title: 'HTML, CSS, and JavaScript for Web Developers', provider: 'Coursera' },
        { src: c18, title: 'Approximation Algorithms and Linear Programming', provider: 'Coursera' },
        { src: c19, title: 'GenAI for Everyone', provider: 'Coursera' },
        { src: c20, title: 'Software Development Processes and Methodologies', provider: 'Coursera' },
        { src: c21, title: 'Algorithms on String', provider: 'Coursera' },
        { src: c22, title: 'Prompt Engineering for ChatGPT', provider: 'Coursera' },
        { src: c23, title: 'The Bits and Bytes of Computer Networking', provider: 'Coursera' },
        { src: c24, title: 'Dynamic Programming, Greedy Algorithms', provider: 'Coursera' },
        { src: c25, title: 'ChatGPT for beginners', provider: 'Coursera' },
        { src: c9, title: 'ChatGPT Advanced Data Analysis', provider: 'Coursera' },
        { src: c27, title: 'Introduction to MongoDB for Students', provider: 'MongoDB' },
        { src: c28, title: 'Software Engineer', provider: 'Hackerrank' },
        { src: c30, title: 'Mastering Data Structures & Algorithms using C and C++', provider: 'Udemy' },
    ];

    return (
        <div className="projects-container" id="projects">
            <h1>Certifications</h1>
            <div className="projects-grid">
                {certificates.map((cert, index) => (
                    <div className="project" key={index}>
                        <a href={cert.src} target="_blank" rel="noopener noreferrer">
                            <img src={cert.src} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                        <h2>{cert.title}</h2>
                        <p>{cert.provider}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificates;
