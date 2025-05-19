import React from 'react';
import '../styles/Benefits.css';

const Benefits = ({ benefits }) => {
  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <h2>O Que Vocu00ea Vai Vivenciar</h2>
        <p className="intro">{benefits.introduction}</p>
        
        <div className="benefits-container">
          {benefits.categories.map((category, index) => (
            <div className="benefit-category" key={index}>
              <h3>{category.title}</h3>
              <ul className="benefit-list">
                {category.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <a href="#schedule" className="btn">VER PROGRAMAu00c7u00c3O</a>
      </div>
    </section>
  );
};

export default Benefits;
