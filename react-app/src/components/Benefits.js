import React from 'react';
import '../styles/Benefits.css';

const Benefits = ({ benefits }) => {
  // Function to clean encoding issues in text
  const cleanText = (text) => {
    if (!text) return '';
    return text
      .replace(/u00e1/g, 'á') // á
      .replace(/u00e2/g, 'â') // â
      .replace(/u00e3/g, 'ã') // ã
      .replace(/u00e7/g, 'ç') // ç
      .replace(/u00e9/g, 'é') // é
      .replace(/u00ea/g, 'ê') // ê
      .replace(/u00ed/g, 'í') // í
      .replace(/u00f3/g, 'ó') // ó
      .replace(/u00f5/g, 'õ') // õ
      .replace(/u00fa/g, 'ú') // ú
      .replace(/u00e0/g, 'à') // à
      .replace(/u00f4/g, 'ô') // ô
      .replace(/u00c7/g, 'Ç') // Ç
      .replace(/u00c1/g, 'Á') // Á
      .replace(/u00c9/g, 'É'); // É
  };
  
  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <h2>O Que Você Vai Vivenciar</h2>
        <p className="intro">{cleanText(benefits.introduction)}</p>
        
        <div className="benefits-container">
          {benefits.categories.map((category, index) => (
            <div className="benefit-category" key={index}>
              <h3>{cleanText(category.title)}</h3>
              <ul className="benefit-list">
                {category.benefits.map((benefit, i) => (
                  <li key={i}>{cleanText(benefit)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <a href="#schedule" className="btn">VER PROGRAMAÇÃO</a>
      </div>
    </section>
  );
};

export default Benefits;
