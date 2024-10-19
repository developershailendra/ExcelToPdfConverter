import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          <div className="col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Footer</h5>
            <ul>
              <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-center">Copyright 2023 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;