// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Login2 from './screens/Login2';
import Layout from './Layout.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';
import { DoctorsResults } from './components/Home/finddoctor.jsx';
import { DoctorDetails } from './components/Home/Doctor.jsx';
import { Clinic } from './components/Home/map.jsx';
import { DoctorAppointment} from "./components/Home/Appointment.jsx";
import {ClinicAppointment} from "./components/Home/AppointmentClinic.jsx";
import DoctorInterface from './components/Home/DoctorInterface.jsx';
//import Github from './components/Github/Github.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createuser" element={<Signup />} />
        <Route path="/logindoctor" element={<Login2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/finddoctor" element={<DoctorsResults />} />
        <Route path="/map" element={<Clinic />} />
        <Route path="/AppointmentClinic" element={<ClinicAppointment />} />
        <Route path="/Appointment" element={<DoctorAppointment />} />
        <Route path="/Doctor" element={<DoctorDetails />} />
        <Route path="/doctor-interface" element={<DoctorInterface />} />
        <Route 
          loader={githubInfoLoader}
          path="/github" 
          element={<Github />}
        />
        <Route path="/loginuser" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

