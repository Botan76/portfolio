import React from "react";
import '../styles/Home.css'; // Import the Home.css file
import myPicture from '../assets/profilePic.png'; // Replace with the actual image file path

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Side: Name and Title */}
      <div className="home-text">
        <h1>Bootan Majeed</h1>
        <p>Software Developer</p>
        <p>Experienced in building apps for both Android and iOS using SwiftUI and Kotlin Compose.</p>
      </div>

      {/* Right Side: Picture */}
      <div className="home-image">
        <img
          src={myPicture}
          alt="Bootan Majeed"
        />
      </div>
    </div>
  );
};

export default Home;
