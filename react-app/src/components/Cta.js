import React from 'react';
import '../styles/Cta.css';

const Cta = ({ cta, eventInfo }) => {
  return (
    <section className="cta-final" id="inscription">
      <div className="container">
        <h2>{cta.sections.bottom.subtext}</h2>
        <p>{cta.benefit}</p>
        <a 
          href={eventInfo.registerUrl} 
          className="btn btn-large" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {cta.main.text}
        </a>
        <p><small>{cta.support.inclusions}</small></p>
        <p><small>{cta.support.cancellation}</small></p>
      </div>
    </section>
  );
};

export default Cta;
