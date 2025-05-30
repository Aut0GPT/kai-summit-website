import React from 'react';
import '../styles/About.css';

const About = ({ about }) => {
  return (
    <section className="about">
      <div className="container">
        <h2>O Que é o Kai Summit</h2>
        <div className="kanji">会</div>
        <p className="main-concept">{about.concept.main}</p>
        <p>{about.concept.origin}</p>
        <p>{about.concept.purpose}</p>
        <p>{about.concept.audience}</p>
        <a href="#pillars" className="btn">CONHEÇA NOSSOS PILARES</a>
      </div>
    </section>
  );
};

export default About;
