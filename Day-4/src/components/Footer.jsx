import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgb(49, 49, 48)', color: 'rgb(222, 95, 41)' }}>
      &copy; {currentYear} PerfumePalette. All rights reserved.
    </footer>
  );
};

export default Footer;
