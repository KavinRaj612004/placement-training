import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#282c34',
    color: '#ffffff',
    padding: '20px 0',
    textAlign: 'center',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const sectionStyle = {
    flex: '1',
    margin: '10px',
    minWidth: '250px',
  };

  const headingStyle = {
    marginBottom: '10px',
    fontSize: '1.5em',
    color: '#f4f4f4',
  };

  const textStyle = {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    color: '#d1d1d1',
  };

  const linkStyle = {
    color: '#61dafb',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  const bottomStyle = {
    marginTop: '20px',
    borderTop: '1px solid #444',
    paddingTop: '10px',
    color: '#a1a1a1',
  };

  const quickLinksStyle = {
    textAlign: 'center',  // This will center the content in the Quick Links section
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h2 style={headingStyle}>About Us</h2>
          <p style={textStyle}>
            This is an interface for the FullStack Project Development... Stay tuned.....
          </p>
        </div>
        <div style={{ ...sectionStyle, ...quickLinksStyle }}>
          <h2 style={headingStyle}>Quick Links</h2>
          <ul style={textStyle}>
            <li>
              <a href="https://github.com/KavinRaj612004" style={linkStyle} target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Contact Us</h2>
          <p style={textStyle}>Email: ytrogkavin@gmail.com</p>
          <p style={textStyle}>Phone: 7397717598</p>
          <p style={textStyle}>Address: 472 Erode, Tamil Nadu</p>
        </div>
      </div>
      <div style={bottomStyle}>
        <p>&copy; 2025 Your Website Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
