import React from 'react';
import '../styles/About.css';

const About = ({ about }) => {
  return (
    <section className="about">
      <div className="container">
        <h2>O Que u00e9 o Kai Summit</h2>
        <div className="kanji">u4f1a</div>
        <p className="main-concept">{about.concept.main}</p>
        <p>{about.concept.origin}</p>
        <p>{about.concept.purpose}</p>
        <p>{about.concept.audience}</p>
        <a href="#pillars" className="btn">CONHEu00c7A NOSSOS PILARES</a>
      </div>
    </section>
  );
};

export default About;
