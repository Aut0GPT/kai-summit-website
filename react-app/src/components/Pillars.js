import React from 'react';
import '../styles/Pillars.css';

const Pillars = ({ pillars }) => {
  return (
    <section className="pillars" id="pillars">
      <div className="container">
        <h2>Nossos Pilares Fundamentais</h2>
        <p>{pillars.introduction}</p>
        
        <div className="pillars-container">
          {pillars.pillars.map((pillar, index) => (
            <div className="pillar-card" key={index}>
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>{pillar.name}</h3>
              <p className="japanese">{pillar.japanese}</p>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
        
        <a href="#benefits" className="btn">RESERVE SEU LUGAR</a>
      </div>
    </section>
  );
};

export default Pillars;
