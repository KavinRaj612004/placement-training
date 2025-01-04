import React from 'react';
import '../components/footer.css';

const Footer = () => {
  const handleReset = () => {
    document.getElementById('form').reset();
  };

  return (
    <footer className="footer">
      <form id="form" className="form-container">
        <h1>STUDENT DETAILS</h1>
        <div className="row">
          <div className="col">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="col">
            <label htmlFor="rollno">Roll No</label>
            <input type="text" name="rollno" id="rollno" />
          </div>
          <div className="col">
            <label htmlFor="phonenumber">Phone Number</label>
            <input type="number" name="phonenumber" id="phonenumber" />
          </div>
        </div>
        <button type="button" onClick={handleReset}>
          Submit
        </button>
      </form>
    </footer>
  );
};

export default Footer;
