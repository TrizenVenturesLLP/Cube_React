import React, { useState } from 'react';
import Cube from './Cube';
import './DoctorForm.css';

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    face1: {
      firstName: '',
      middleName: '',
      lastName: '',
      title: '',
      dateOfBirth: '',
      street: '',
      city: '',
      zipCode: '',
      state: '',
      mobileNumber: '',
      homeNumber: '',
      email: '',
      speciality: '',
      photo: null,
      availability: false,
    },
    face2: {
      licenseState: '',
      expDate: '',
      link: '',
      credentialingCAQH: false,
      referenceNumber: '',
      boardCertifications: '',
      certifications: {
        ACLS: false,
        ATLS: false,
        BLS: false,
      },
      certificationExpDates: {
        ACLS: '',
        ATLS: '',
        BLS: '',
      },
      DEA: false,
      deaNumber: '',
      deaExpDate: '',
    },
    face3: {
      skillSets: '',
      yearsOfExperience: '',
      restrictionsAndObjections: '',
    },
    face4: {
      practiceName: '',
      practiceAddress: '',
      practiceCity: '',
      practiceState: '',
      practiceZipCode: '',
      practicePhoneNumber: '',
      practiceEmail: '',
    },
    face5: {
      malpracticeInsurance: false,
      interestedInQuote: false,
    },
    face6: {
      documents: {
        CV: null,
        licenses: null,
        certifications: null,
        insurance: null,
      },
    },
  });

  const [showCube, setShowCube] = useState(false);

  const handleInputChange = (face, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [face]: {
        ...prevData[face],
        [field]: value,
      },
    }));
  };

  const handleFileUpload = (face, field, file) => {
    setFormData((prevData) => ({
      ...prevData,
      [face]: {
        ...prevData[face],
        [field]: file,
      },
    }));
  };

  const handleCreateCube = () => {
    setShowCube(true);
  };

  return (
    <div className="doctor-form">
      <h1>Doctor Form</h1>

      {/* Face 1 - Personal Details */}
      <section className="form-section">
        <h2>Face 1 - Personal Details</h2>
        <label>First Name</label>
        <input type="text" value={formData.face1.firstName} onChange={(e) => handleInputChange('face1', 'firstName', e.target.value)} />
        <label>Middle Name</label>
        <input type="text" value={formData.face1.middleName} onChange={(e) => handleInputChange('face1', 'middleName', e.target.value)} />
        <label>Last Name</label>
        <input type="text" value={formData.face1.lastName} onChange={(e) => handleInputChange('face1', 'lastName', e.target.value)} />
        <label>Title</label>
        <input type="text" value={formData.face1.title} onChange={(e) => handleInputChange('face1', 'title', e.target.value)} />
        <label>Date of Birth</label>
        <input type="date" value={formData.face1.dateOfBirth} onChange={(e) => handleInputChange('face1', 'dateOfBirth', e.target.value)} />
        <label>Street</label>
        <input type="text" value={formData.face1.street} onChange={(e) => handleInputChange('face1', 'street', e.target.value)} />
        <label>City</label>
        <input type="text" value={formData.face1.city} onChange={(e) => handleInputChange('face1', 'city', e.target.value)} />
        <label>Zip Code</label>
        <input type="text" value={formData.face1.zipCode} onChange={(e) => handleInputChange('face1', 'zipCode', e.target.value)} />
        <label>State</label>
        <input type="text" value={formData.face1.state} onChange={(e) => handleInputChange('face1', 'state', e.target.value)} />
        <label>Mobile Number</label>
        <input type="text" value={formData.face1.mobileNumber} onChange={(e) => handleInputChange('face1', 'mobileNumber', e.target.value)} />
        <label>Home Number</label>
        <input type="text" value={formData.face1.homeNumber} onChange={(e) => handleInputChange('face1', 'homeNumber', e.target.value)} />
        <label>Email</label>
        <input type="email" value={formData.face1.email} onChange={(e) => handleInputChange('face1', 'email', e.target.value)} />
        <label>Speciality</label>
        <select value={formData.face1.speciality} onChange={(e) => handleInputChange('face1', 'speciality', e.target.value)}>
          <option value="">Select Speciality</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Physiology">Physiology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Neurology">Neurology</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>
        <label>Photo</label>
        <input type="file" onChange={(e) => handleFileUpload('face1', 'photo', e.target.files[0])} />
        <label>Availability</label>
        <input type="checkbox" checked={formData.face1.availability} onChange={(e) => handleInputChange('face1', 'availability', e.target.checked)} />
      </section>

      {/* Face 2 - License Details */}
      <section className="form-section">
        <h2>Face 2 - License Details</h2>
        <label>License State</label>
        <select value={formData.face2.licenseState} onChange={(e) => handleInputChange('face2', 'licenseState', e.target.value)}>
          <option value="">Select License State</option>
          <option value="Alaska">Alaska</option>
          <option value="California">California</option>
          <option value="New York">New York</option>
          <option value="Texas">Texas</option>
        </select>
        <label>Expiration Date</label>
        <input type="date" value={formData.face2.expDate} onChange={(e) => handleInputChange('face2', 'expDate', e.target.value)} />
        <label>Link</label>
        <input type="text" value={formData.face2.link} onChange={(e) => handleInputChange('face2', 'link', e.target.value)} />
        <label>Credentialing CAQH</label>
        <input type="checkbox" checked={formData.face2.credentialingCAQH} onChange={(e) => handleInputChange('face2', 'credentialingCAQH', e.target.checked)} />
        <label>Reference Number</label>
        <input type="text" value={formData.face2.referenceNumber} onChange={(e) => handleInputChange('face2', 'referenceNumber', e.target.value)} />
        <label>Board Certifications</label>
        <input type="text" value={formData.face2.boardCertifications} onChange={(e) => handleInputChange('face2', 'boardCertifications', e.target.value)} />
        <div className="certifications">
          <label>ACLS</label>
          <input type="checkbox" checked={formData.face2.certifications.ACLS} onChange={(e) => handleInputChange('face2', 'certifications', { ...formData.face2.certifications, ACLS: e.target.checked })} />
          <label>ACLS Expiration Date</label>
          <input type="date" value={formData.face2.certificationExpDates.ACLS} onChange={(e) => handleInputChange('face2', 'certificationExpDates', { ...formData.face2.certificationExpDates, ACLS: e.target.value })} />
          <label>ATLS</label>
          <input type="checkbox" checked={formData.face2.certifications.ATLS} onChange={(e) => handleInputChange('face2', 'certifications', { ...formData.face2.certifications, ATLS: e.target.checked })} />
          <label>ATLS Expiration Date</label>
          <input type="date" value={formData.face2.certificationExpDates.ATLS} onChange={(e) => handleInputChange('face2', 'certificationExpDates', { ...formData.face2.certificationExpDates, ATLS: e.target.value })} />
          <label>BLS</label>
          <input type="checkbox" checked={formData.face2.certifications.BLS} onChange={(e) => handleInputChange('face2', 'certifications', { ...formData.face2.certifications, BLS: e.target.checked })} />
          <label>BLS Expiration Date</label>
          <input type="date" value={formData.face2.certificationExpDates.BLS} onChange={(e) => handleInputChange('face2', 'certificationExpDates', { ...formData.face2.certificationExpDates, BLS: e.target.value })} />
        </div>
        <label>DEA</label>
        <input type="checkbox" checked={formData.face2.DEA} onChange={(e) => handleInputChange('face2', 'DEA', e.target.checked)} />
        <label>DEA Number</label>
        <input type="text" value={formData.face2.deaNumber} onChange={(e) => handleInputChange('face2', 'deaNumber', e.target.value)} />
        <label>DEA Expiration Date</label>
        <input type="date" value={formData.face2.deaExpDate} onChange={(e) => handleInputChange('face2', 'deaExpDate', e.target.value)} />
      </section>

      {/* Face 3 - Experience and Skills */}
      <section className="form-section">
        <h2>Face 3 - Experience and Skills</h2>
        <label>Skill Sets/Procedures</label>
        <textarea value={formData.face3.skillSets} onChange={(e) => handleInputChange('face3', 'skillSets', e.target.value)} />
        <label>Years of Experience</label>
        <input type="text" value={formData.face3.yearsOfExperience} onChange={(e) => handleInputChange('face3', 'yearsOfExperience', e.target.value)} />
        <label>Restrictions and Objections</label>
        <textarea value={formData.face3.restrictionsAndObjections} onChange={(e) => handleInputChange('face3', 'restrictionsAndObjections', e.target.value)} />
      </section>

      {/* Face 5 - Malpractice Insurance */}
      <section className="form-section">
        <h2>Face 5 - Malpractice Insurance</h2>
        <label>Do you carry own Malpractice Insurance?</label>
        <input type="checkbox" checked={formData.face5.malpracticeInsurance} onChange={(e) => handleInputChange('face5', 'malpracticeInsurance', e.target.checked)} />
        <label>Interested in Free Quote?</label>
        <input type="checkbox" checked={formData.face5.interestedInQuote} onChange={(e) => handleInputChange('face5', 'interestedInQuote', e.target.checked)} />
      </section>

      {/* Face 6 - Document Repositories */}
      <section className="form-section">
        <h2>Face 6 - Document Repositories</h2>
        <label>CV</label>
        <input type="file" onChange={(e) => handleFileUpload('face6', 'documents', { ...formData.face6.documents, CV: e.target.files[0] })} />
        <label>Licenses</label>
        <input type="file" onChange={(e) => handleFileUpload('face6', 'documents', { ...formData.face6.documents, licenses: e.target.files[0] })} />
        <label>Certifications</label>
        <input type="file" onChange={(e) => handleFileUpload('face6', 'documents', { ...formData.face6.documents, certifications: e.target.files[0] })} />
        <label>Insurance</label>
        <input type="file" onChange={(e) => handleFileUpload('face6', 'documents', { ...formData.face6.documents, insurance: e.target.files[0] })} />
      </section>

      <button onClick={handleCreateCube}>Create Cube</button>

      {showCube && <Cube details={formData} />}
    </div>
  );
};

export default DoctorForm;
