import React from 'react';
import './Face2.css';

const Face3 = ({ details }) => {
  return (
    <div className="face3-container">
      <div className="label">Skill Sets</div>
      <div className="content">{details.skillSets}</div>

      <div className="label">Years of Experience</div>
      <div className="content">{details.yearsOfExperience}</div>

      <div className="label">Restrictions and Objections</div>
      <div className="content">{details.restrictionsAndObjections}</div>

      <div className="face-number">Face 3</div>
    </div>
  );
};

export default Face3;