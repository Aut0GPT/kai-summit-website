import React from 'react';
import '../styles/Footer.css';

const Footer = ({ eventInfo }) => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Kai Summit - {eventInfo.location.venue}</p>
        <div className="contact-info">
          <p>{eventInfo.location.address} - {eventInfo.location.city}, {eventInfo.location.state}</p>
          <p>Para mais informau00e7u00f5es: (11) 3456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
