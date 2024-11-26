import React from 'react';
import './Face1.css';

const Face1 = ({ details }) => {
  return (
    <div className="face1-container">
      <div className="image-container">
        {details.photo && (
          <img
            src={URL.createObjectURL(details.photo)}
            alt="Doctor"
            className="profile-img"
          />
        )}
      </div>

      <div className="content">
        {details.firstName} {details.lastName}
      </div>

      <div className="label">Speciality</div>
      <div className="content">{details.speciality}</div>

      <div className="label">Availability</div>
      <div className="content">{details.availability ? 'Available' : 'Not Available'}</div>

      <div className="face-number">Face 1</div>
    </div>
  );
};

export default Face1;
