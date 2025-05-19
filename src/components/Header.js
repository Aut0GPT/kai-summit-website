import React from 'react';
import '../styles/Header.css';

const Header = ({ eventInfo }) => {
  return (
    <header className="site-header">
      <div className="container header-content">
        <h1>{eventInfo.name.toUpperCase()} {new Date(eventInfo.date).getFullYear()}</h1>
        <p className="date-location">
          {eventInfo.date} • {eventInfo.location.venue} • {eventInfo.location.city}
        </p>
        <p className="tagline">{eventInfo.tagline}</p>
        <a href="#inscricao" className="btn btn-large">
          GARANTA SUA PARTICIPAÇÃO
        </a>
        <p className="urgency">Vagas Limitadas!</p>
      </div>
    </header>
  );
};

export default Header;
