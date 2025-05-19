import React from 'react';
import '../styles/Narrative.css';

const Narrative = ({ about }) => {
  return (
    <section className="emotional">
      <div className="container">
        <h2>{about.narrative.title}</h2>
        <p>{about.narrative.content}</p>
        <p><strong>{about.closingMessage}</strong></p>
      </div>
    </section>
  );
};

export default Narrative;
