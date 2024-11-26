import React from 'react';
import './Face2.css';

const Face6 = ({ details }) => {
  return (
    <div className="face6-container">
      <div className="label">CV</div>
      <div className="content">{details.documents.CV ? 'Uploaded' : 'Not Uploaded'}</div>

      <div className="label">Licenses</div>
      <div className="content">{details.documents.licenses ? 'Uploaded' : 'Not Uploaded'}</div>

      <div className="label">Certifications</div>
      <div className="content">{details.documents.certifications ? 'Uploaded' : 'Not Uploaded'}</div>

      <div className="label">Insurance</div>
      <div className="content">{details.documents.insurance ? 'Uploaded' : 'Not Uploaded'}</div>

      <div className="face-number">Face 6</div>
    </div>
  );
};

export default Face6;
