import React from 'react';
import './Face2.css';

const Face5 = ({ details }) => {
  return (
    <div className="face5-container">
      <div className="label">Malpractice Insurance</div>
      <div className="content">{details.malpracticeInsurance ? '✔' : '❌'}</div>

      <div className="label">Interested in Quote</div>
      <div className="content">{details.interestedInQuote ? '✔' : '❌'}</div>

      <div className="face-number">Face 5</div>
    </div>
  );
};

export default Face5;
