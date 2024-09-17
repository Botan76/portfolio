import React from "react";
import screenshotTime from '../assets/workTimeIcon.png'
import screenshotMed from '../assets/MedAlertIcon.png'
import screenshotWallet from '../assets/walletIcon.png'
// Example project data
const projects = [
  {
    title: "Work Time Tracker Pro",
    description: "SwiftUI Project",
    imageUrl: screenshotTime, // Replace with your image
    link: "/project1", // Replace with the link to your project page
  },
  {
    title: "MyMediAlert",
    description: "SwiftUI Project",
    imageUrl: screenshotMed, // Replace with your image
    link: "/project2", // Replace with the link to your project page
  },
  {
    title: "WalletManager",
    description: "Kotlin Compose Project",
    imageUrl: screenshotWallet, // Replace with your image
    link: "/project3", // Replace with the link to your project page
  },
];

const Projects = () => {
  return (
    <div className="container">
      {/* Title */}
      <h1 className="title">My Projects</h1>

      {/* Project Boxes in Row */}
      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
