import React from 'react';
import './MainComponent.css'; // Import the CSS for styling

const MainComponent = () => {
  return (
    <div className="main-container">
      <header className="header">
        <h1>Excel to PDF Converter</h1>
        <p>by Shailendra Tomar</p>
      </header>
      <div className="content">
        <p>Welcome to the Excel to PDF Converter application. Here you can convert your Excel files into PDF format easily and efficiently.</p>
        {/* You can add more content or components here, such as upload functionality */}
      </div>
    </div>
  );
};

export default MainComponent;