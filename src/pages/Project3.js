import React from 'react';
import walletScreenshot1 from '../assets/walletScreen/wallet 1.png';
import walletScreenshot2 from '../assets/walletScreen/wallet 2.png';

const Project3 = () => {
  return (
    <div className="container">
      <h1 className="title">WalletManager</h1>

      {/* Description */}
      <div className="description-container">
        <p className="description">
          WalletManager is a powerful app designed to simplify your financial tracking. With its modern design and intuitive interface, managing your finances has never been easier.
          <br /><br />
          Track your income and expenses effortlessly, get real-time balance updates, and access a comprehensive history of all your transactions, right from your pocket.
          <br /><br />
          This app was built using <strong>Kotlin Compose</strong> to deliver a native and efficient experience for Android users.
        </p>

        <br /><br /> <strong>Key Features:</strong><br />
        <ul>
          <li>Effortless Income and Expense Tracking</li>
          <li>Real-time Balance Updates</li>
          <li>Comprehensive Transaction History</li>
        </ul>
        <a href="https://play.google.com/store/apps/details?id=com.bootan.walletmanager&hl=en" className="download-button">Download from the Google Play</a>
      </div>

      {/* Screenshots */}
      <div className="screenshots-container">
        <img src={walletScreenshot1} alt="Wallet Screenshot 1" className="screenshot-image" />
        <img src={walletScreenshot2} alt="Wallet Screenshot 2" className="screenshot-image" />
      </div>
    </div>
  );
};

export default Project3;
