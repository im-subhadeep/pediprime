import React from 'react';
import './Home.css';

import findDoctor from './images/finddoctor.jpg';
import findClinic from './images/findclinic.png';
import treatmentData from './images/treatment data.png';  // Rename to avoid spaces
import trackAppointment from './images/medical_article.jpg';
import doctorInterface from './images/doctor interface.jpg';  // Rename to avoid spaces
import healthCoins from './images/healthcoins.png';
import medicalArticle from './images/medical_article.jpg';  
import childrenWithDoctor from './images/children picture with doctor.jpg'; 

 // Renamed to avoid spaces
 const handleLogout = () => {
  localStorage.removeItem("authToken"); // Remove the authentication token from local storage
  navigate("/loginuser");
};

const Home = () => {
  return (
    <div className="home">
      <div className="banner-card">
        <img src={childrenWithDoctor} alt="Children with Doctor" /> 
        <div className="banner-text">
          <h1>Indias First<br /> Affordable Next <br /> Generation Pediatrics<br /> Clinic Services<br /></h1>
          <p>A babys smile is one of the <br /> most beautiful treasure in <br /> the world, so their happiness <br /> is most vital to us. We treat <br /> your child as if they were our <br /> own little brother or sister.</p>
        </div>
      </div>

      <div className="banner">
        <div className="left-side">
          <div className="discount">100% Free</div>
          <div className="date-range">01.04.2024 - 05.04.2024</div>
        </div>
        <div className="right-side">
          Your Consultant
        </div>
      </div>

      <div className="icon-container">
        <div className="icon">
          <a href="/finddoctor">
            <img src={findDoctor} alt="Doctor Icon" />
            <div className="icon-label">Find Doctor</div>
          </a>
        </div>
        
        <div className="icon">
          <a href="/map">
            <img src={findClinic} alt="Clinic Icon" />
            <div className="icon-label">Book Appointment</div>
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <img src={treatmentData} alt="Treatment Data Icon" />
            <div className="icon-label">Your Treatment Data</div>
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <img src={trackAppointment} alt="Track Appointment Icon" />
            <div className="icon-label">Track Your Appointment</div>
          </a>
        </div>
        <div className="icon">
          <a href="/doctor-interface">
            <img src={doctorInterface} alt="Doctor Interface Icon" />
            <div className="icon-label">Doctor's Interface</div>
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <img src={healthCoins} alt="Health Coins Icon" />
            <div className="icon-label">Health Coins</div>
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <img src={medicalArticle} alt="Medical Article Icon" />
            <div className="icon-label">Medical Article</div>
          </a>
        </div>
      </div>

      <div className="join-us">
        <p>Join us today and experience the future healthcare.</p>
        <a href="/loginuser" className="signup-login-btn">Login</a>
      </div>
    </div>
  );
};

export default Home;
