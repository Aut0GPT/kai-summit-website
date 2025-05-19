import React from 'react';
import '../styles/Narrative.css';

const Narrative = ({ about }) => {
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
      .replace(/u00c9/g, 'É') // É
      .replace(/u300c/g, '「') // 「
      .replace(/u300d/g, '」') // 」
      .replace(/u2014/g, '—') // —
      .replace(/u2013/g, '–'); // –
  };
  
  return (
    <section className="emotional">
      <div className="container">
        <h2>{cleanText(about.narrative.title)}</h2>
        <p>{cleanText(about.narrative.content)}</p>
        <p><strong>{cleanText(about.closingMessage)}</strong></p>
      </div>
    </section>
  );
};

export default Narrative;
