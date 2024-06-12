import React, { useState, useEffect } from 'react';
import "./App.css";
import doctorImg1 from "./images/d.jpg";
import axios from 'axios'; // Import Axios for making HTTP requests

function DoctorAppointment() {
  const [patientList, setPatientList] = useState([]);
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    fathersName: '',
    mothersName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    address: '',
    slot: '' // Added slot field for selecting time slot
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails({
      ...patientDetails,
      [name]: value
    });
  }

  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    if (
      patientDetails.name &&
      patientDetails.age &&
      patientDetails.gender &&
      patientDetails.dateOfBirth &&
      patientDetails.address &&
      patientDetails.fathersName &&
      patientDetails.mothersName &&
      patientDetails.slot // Ensure slot is selected
    ) {
      // Make a POST request to the backend API to save patient data
      axios.post('http://localhost:5000/api/patients', patientDetails)
        .then(response => {
          // Handle successful response
          console.log(response.data);
          // Display success message if needed
          alert(`Appointment booked with Dr. John Doe. Appointment number: ${response.data.appointmentNumber}`);
          // Add the new patient to the patient list
          setPatientList([...patientList, response.data]);
          // Reset form fields after booking
          setPatientDetails({
            name: '',
            fathersName: '',
            mothersName: '',
            dateOfBirth: '',
            age: '',
            gender: '',
            address: '',
            slot: ''
          });
        })
        .catch(error => {
          // Handle error
          console.error('Error submitting appointment:', error);
          // Display error message if needed
          alert('Error booking appointment. Please try again later.');
        });
    } else {
      alert('Please fill in all the fields.');
    }
  };

  useEffect(() => {
    // Fetch existing patients on component mount
    axios.get('http://localhost:5000/api/patients')
      .then(response => {
        setPatientList(response.data);
      })
      .catch(error => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  return (
    <div className="doctor-appointment-container">
      <div className="middle-section">
        <h1 id="a" className='hd'>Doctor Information</h1>
        <div className="doctor-de">
          <div>
            <img src={doctorImg1} alt="doctor image" />
            <p>
              <strong>Name:</strong>Dr Soumpdeep Pal<br />
              <strong>Specialty:</strong> Cardiology<br />
              <strong>Clinic Time:</strong> Monday to Friday, 9:00 AM - 5:00 PM<br />
              <strong>Location:</strong> 123 Main Street, Bankura, State, Zip Code<br />
              <strong>Consultation Fees:</strong> 100 (may vary)<br />
              <strong>Contact:</strong> Mobile: +919832457567<br />
              <strong>Holiday:</strong>Sunday,Thrusday<br />
              <strong>About Dr Soumpdeep Pal:</strong>
              Dr Soumpdeep Pal is a highly experienced cardiologist dedicated to providing personalized care to his patients. With over 15 years of experience in the field, he specializes in diagnosing and treating various heart conditions. Dr. Doe is known for his compassionate approach and commitment to delivering the highest quality of care to his patients.<br />
            </p>
          </div>
        </div>
      </div>
      <div className="middle-section">
        <div className="book-appointment2">
          <div className="appointment-details2">
            <h2 id="f2">Book Appointment with Dr Soumpdeep Pal</h2>
            <form onSubmit={handleSubmitAppointment}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={patientDetails.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Father's Name:</label>
                <input type="text" name="fathersName" value={patientDetails.fathersName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Mother's Name:</label>
                <input type="text" name="mothersName" value={patientDetails.mothersName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Slot:</label>
                <select name="slot" value={patientDetails.slot} onChange={handleInputChange}>
                  <option value="">Choose your given slot</option>
                  <option value="9Am-11Am">9Am-11Am</option>
                  <option value="2pm-4pm">2pm-4pm</option>
                  <option value="7pm-9pm">7pm-9pm</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date of Birth:</label>
                <input type="date" name="dateOfBirth" value={patientDetails.dateOfBirth} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input type="text" name="age" value={patientDetails.age} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <select name="gender" value={patientDetails.gender} onChange={handleInputChange}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input type="text" name="address" value={patientDetails.address} onChange={handleInputChange} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="patient-list">
        <h2 id="f">Patient List</h2>
        {patientList.length === 0 ? (
          <p>No appointments booked yet.</p>
        ) : (
          <ul>
            {patientList.map((patient, index) => (
              <li key={index}>
                <strong>Name:</strong> {patient.name}, <strong>Age:</strong> {patient.age}, <strong>Gender:</strong> {patient.gender}, <strong>Address:</strong> {patient.address}, <strong>Date of Birth:</strong> {patient.dateOfBirth}, <strong>Father's Name:</strong> {patient.fathersName}, <strong>Mother's Name:</strong> {patient.mothersName}, <strong>Slot:</strong> {patient.slot}, <strong>Appointment Number:</strong> {patient.appointmentNumber}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export { DoctorAppointment };
