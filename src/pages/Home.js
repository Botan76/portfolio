import React from "react";
import '../styles/Home.css'; // Import the Home.css file
import myPicture from '../assets/profilePic4.png'; // Replace with the actual image file path
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'; // FontAwesome icons for LinkedIn, Instagram, Gmail, and GitHub

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Side: Name and Title */}
      <div className="home-text">
        <h1>Bootan Majeed</h1>
        <p>Software Developer</p>
        <p className="experience-text">
          Experienced in building apps for both Android and iOS using SwiftUI, Kotlin Compose and React Native.
        </p>
      </div>

      {/* Right Side: Picture */}
      <div className="home-image">
        <img
          src={myPicture}
          alt="Bootan Majeed"
        />
      </div>

      {/* Bottom Content: Social Icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/botan-majeed-006798220/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a href="https://www.instagram.com/botan.majeed?igsh=dnFnaThwbDZtNWhn&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram-icon" />
        </a>
        <a href="mailto:botan_art@hotmail.com">
          <FaEnvelope className="icon gmail-icon" />
        </a>
        <a href="https://github.com/Botan76" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github-icon" />
        </a>
      </div>
    </div>
  );
};

export default Home;
