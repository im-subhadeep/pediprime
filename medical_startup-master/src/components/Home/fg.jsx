// import React, { useState } from 'react';
// import './fg.css'; // Import the CSS file for doctor styling
// import doctorImg1 from "./images/d.jpg";
// import doctorImg2 from "./images/d1.jpg";
// import doctorImg3 from "./images/d2.jpg";``
// import doctorImg4 from "./images/d3.jpg";
// import doctorImg5 from "./images/d4.jpg";
// // import doctorImg6 from "./download (5).jpg";

// // Sample doctor data
// const doctors = [
//   {
//     name: "Dr. John Doe",
//     specialty: "Cardiologist",
//     location: "New York City",
//     image: doctorImg1
//   },
//   {
//     name: "Dr. Jane Smith",
//     specialty: "Pediatrician",
//     location: "Los Angeles",
//     image: doctorImg2
//   },
//   {
//     name: "Dr. Michael Johnson",
//     specialty: "Dermatologist",
//     location: "Chicago",
//     image: doctorImg3
//   },
//   {
//     name: "Dr. Emily Brown",
//     specialty: "Oncologist",
//     location: "San Francisco",
//     image: doctorImg4
//   },
//   {
//     name: "Dr. Alex Lee",
//     specialty: "Orthopedic Surgeon",
//     location: "Boston",
//     image: doctorImg5
//   },
//   // {
//   //   name: "Dr. Sarah Wilson",
//   //   specialty: "Neurologist",
//   //   location: "Seattle",
//   //   image: doctorImg6
//   // }
// ];

// function FindDoctors() {
//   const [filteredDoctors, setFilteredDoctors] = useState(doctors);
//   const [queryLocation, setQueryLocation] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Filter doctors based on the search query
//     const filtered = doctors.filter(doctor =>
//       doctor.location.toLowerCase().includes(queryLocation.toLowerCase())
//     );
//     setFilteredDoctors(filtered);
//   };

//   return (
//     <div className="doctors-container">
//       <div className="left-section">
//         <h1 className="hd">Find Doctors</h1>
//         <div className="search-container">
//           {/* Search bar */}
//           <form className="search-form" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Enter location"
//               value={queryLocation}
//               onChange={(e) => setQueryLocation(e.target.value)}
//               className="search-input" 
//             />
//              <button type="submit" className="search-button">Search</button>
//           </form>
  
//         </div>
//         <h2 className="hdr">Search result</h2>
//         <div className="additional-doctors-container">
//           {/* Displaying additional doctor information */}
      
//           <div className="row">
//             {filteredDoctors.map((doctor, index) => (
//               <div className="doctor-info" key={index}>
//                 <img src={doctor.image} alt={`Doctor Image ${index}`} />
//                 <div className="doctor-details">
//                   <p className="doctor-name">{doctor.name}</p>
//                   <p className="doctor-specialty">Specialty: {doctor.specialty}</p>
//                   <p className="doctor-location">Location: {doctor.location}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export { FindDoctors };

import React, { useState } from 'react';
import './fg.css'; // Import the CSS file for doctor styling
import { Map } from './clinic.jsx';
// Import the Map component
import { Link } from 'react-router-dom';
import doctorImg1 from "./images/d.jpg";
import doctorImg2 from "./images/d1.jpg";
import doctorImg3 from "./images/d2.jpg";
import doctorImg4 from "./images/d3.jpg";
import doctorImg5 from "./images/d4.jpg";
import doctorImg6 from "./images/d5.jpg";
import doctorImg7 from "./images/d6.jpg";
import doctorImg8 from "./images/d7.jpg";

// Sample doctor data
const doctors = [
  {
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    location: "New York City",
    image: doctorImg1
  },
  {
    name: "Dr. Jane Smith",
    specialty: "Pediatrician",
    location: "Los Angeles",
    image: doctorImg2
  },
  {
    name: "Dr. Michael Johnson",
    specialty: "Dermatologist",
    location: "Chicago",
    image: doctorImg3
  },
  {
    name: "Dr. Emily Brown",
    specialty: "Oncologist",
    location: "San Francisco",
    image: doctorImg4
  },
  {
    name: "Dr. Alex Lee",
    specialty: "Orthopedic Surgeon",
    location: "Boston",
    image: doctorImg5
  },
  {
    name: "Dr. Sarah Wilson",
    specialty: "Neurologist",
    location: "Seattle",
    image: doctorImg6
  },
  {
    name: "Dr. David Kim",
    specialty: "Gynecologist",
    location: "Miami",
    image: doctorImg7
  },
  {
    name: "Dr. Samantha Lee",
    specialty: "Psychiatrist",
    location: "Houston",
    image: doctorImg8
  }
];

function FindDoctors() {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [queryDoctor, setQueryDoctor] = useState('');
  const [queryLocation, setQueryLocation] = useState('');

  const handleSubmitDoctor = (e) => {
    e.preventDefault();
    // Filter doctors based on the search query
    const filtered = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(queryDoctor.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    // Filter doctors based on the location query
    const filtered = doctors.filter(doctor =>
      doctor.location.toLowerCase().includes(queryLocation.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  const handleClear = () => {
    setQueryDoctor('');
    setQueryLocation('');
    setFilteredDoctors(doctors);
  };

  return (
    <div className="doctors-container">
      <div className="left-section">
        <h1 className="hd">Find Doctors</h1>
        <div className="search-container">
          {/* Doctor Search bar */}
          <form className="search-form" onSubmit={handleSubmitDoctor}>
            <input
              type="text"
              placeholder="Enter doctor name"
              value={queryDoctor}
              onChange={(e) => setQueryDoctor(e.target.value)}
              className="search-input" 
            />
            <button type="submit" className="search-button">Search</button>
          </form>
          {/* Location Search bar */}
          <form className="search-form" onSubmit={handleSubmitLocation}>
            <input
              type="text"
              placeholder="Enter location"
              value={queryLocation}
              onChange={(e) => setQueryLocation(e.target.value)}
              className="search-input" 
            />
            <button type="submit" className="search-button">Search</button>
          </form>
          <button type="button" className="clear-button" onClick={handleClear}>Clear</button>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
      <div className="right-section">
        <div className="additional-doctors-container">
          <div className="row">
            <h2 className="hdr">Search result</h2>
            {filteredDoctors.map((doctor, index) => (
              <div className="doctor-info" key={index}>
                <Link to="/Doctor">
                  <img src={doctor.image} alt={`Doctor Image ${index}`} />
                </Link>
                <div className="doctor-details">
                  <p className="doctor-name">
                    <Link to="/Doctor">{doctor.name}</Link>
                  </p>
                  <p className="doctor-specialty">Specialty: {doctor.specialty}</p>
                  <p className="doctor-location">Location: {doctor.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { FindDoctors };
