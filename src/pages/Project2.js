import React from 'react';
import med1 from '../assets/medScreen/med1.png';
import med2 from '../assets/medScreen/med2.png';
import med3 from '../assets/medScreen/med3.png';
import med4 from '../assets/medScreen/med4.png';
import med5 from '../assets/medScreen/med5.png';
import med6 from '../assets/medScreen/med6.png';
import med7 from '../assets/medScreen/Med7.png';

const Project2 = () => {
  return (
    <div className="container">
      <h1 className="title">MyMediAlert</h1>

      {/* Description */}
      <div className="description-container">
        <p className="description">
          MyMediAlert helps you manage your medication schedule effortlessly. Set up timely reminders to never miss a dose, and keep track of your medicine supply with a clear overview of your remaining doses. 
          <br /><br />
          Our app includes a comprehensive pharmacy dictionary to give you detailed information on your medications, including how to take them and potential side effects. Stay informed with daily health tips and access your medication history for easy reference. Whether you’re managing prescriptions for yourself or loved ones, MyMediAlert makes staying on top of medication simple and stress-free.
          <br /><br />
          <strong>Made by SwiftUI</strong> - providing a smooth and native iOS experience.
          <br /><br />
          <strong>Key Features:</strong><br />
          - Medication reminders to ensure you never miss a dose <br />
          - Pharmacy dictionary with detailed medicine information <br />
          - Medication history tracking <br />
          - Daily health tips and notifications <br />
          - User-friendly interface for managing prescriptions <br />
        </p>
        <a href="https://apps.apple.com/se/app/my-medical-reminder/id123456789" className="download-button">Download from the App Store</a>
      </div>

      {/* Screenshots */}
      <div className="screenshots-container">
        <img src={med1} alt="Screenshot 1" className="screenshot-image" />
        <img src={med2} alt="Screenshot 2" className="screenshot-image" />
        <img src={med3} alt="Screenshot 3" className="screenshot-image" />
        <img src={med4} alt="Screenshot 4" className="screenshot-image" />
        <img src={med5} alt="Screenshot 5" className="screenshot-image" />
        <img src={med6} alt="Screenshot 6" className="screenshot-image" />
        <img src={med7} alt="Screenshot 7" className="screenshot-image" />
      </div>
    </div>
  );
};

export default Project2;
