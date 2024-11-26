import React from 'react';
import './Face2.css';

const Face2 = ({ details }) => {
  return (
    <div className="face2-container">
      <div className="label">License State</div>
      <div className="content">{details.licenseState}</div>

      <div className="label">Credentialing CAQH</div>
      <div className="content">{details.credentialingCAQH ? '✔' : '❌'}</div>

      <div className="label">Board Certifications</div>
      <div className="content">{details.boardCertifications}</div>

      <div className="label">Certifications</div>
      <div className="content">
        ACLS {details.certifications.ACLS ? '✔' : '❌'} | ATLS {details.certifications.ATLS ? '✔' : '❌'} | BLS {details.certifications.BLS ? '✔' : '❌'}
      </div>

      <div className="label">DEA</div>
      <div className="content">{details.DEA ? '✔' : '❌'}</div>

      <div className="face-number">Face 2</div>
    </div>
  );
};

export default Face2;
