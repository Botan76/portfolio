import React from 'react';
import screenshot1 from '../assets/workScreen/0x0ss.png';
import screenshot2 from '../assets/workScreen/0x0ss (1).png';
import screenshot3 from '../assets/workScreen/0x0ss (2).png';
import screenshot4 from '../assets/workScreen/0x0ss (3).png';
import screenshot5 from '../assets/workScreen/0x0ss (4).png';

const Project1 = () => {
  return (
    <div className="container">
      <h1 className="title">Work Time Tracker Pro</h1>

      {/* Description */}
      <div className="description-container">
  <p className="description">
    TimeWork Tracker Pro is your ultimate solution for efficient time management, built with SwiftUI for a smooth, native iOS experience. Seamlessly track your work hours by easily clocking in and out, and enjoy a responsive, intuitive interface that makes managing your time effortless.

    With user-friendly start and stop controls, you can quickly log your daily activities while the app accurately calculates your total work hours. Monthly summaries give you a clear view of your accumulated hours, helping you stay on top of your productivity. Whether you're a freelancer, consultant, or simply tracking work time, TimeWork Tracker Pro offers precise, reliable time management.

    <br /><br /> <strong>Key Features:</strong><br />
    - Start and stop timer for precise hour tracking <br />
    - Monthly breakdown of worked hours <br />
    - Simple and intuitive SwiftUI interface <br />
    - Accurate time calculations for better productivity <br />
    - Exportable reports for quick reference <br />

    <br />
    Download <strong>TimeWork Tracker Pro</strong> today and take full control over your work hours! Boost your efficiency and productivity with accurate time tracking.
  </p>
  <a href="https://apps.apple.com/se/app/time-work-tracker-pro/id6475238728?l=en-GB" className="download-button">Download from the App Store</a>
</div>

      {/* Screenshots */}
      <div className="screenshots-container">
        <img src={screenshot1} alt="Screenshot 1" className="screenshot-image" />
        <img src={screenshot2} alt="Screenshot 2" className="screenshot-image" />
        <img src={screenshot3} alt="Screenshot 3" className="screenshot-image" />
        <img src={screenshot4} alt="Screenshot 4" className="screenshot-image" />
        <img src={screenshot5} alt="Screenshot 5" className="screenshot-image" />
      </div>
    </div>
  );
};

export default Project1;
