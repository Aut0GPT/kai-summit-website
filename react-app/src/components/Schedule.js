import React from 'react';
import '../styles/Schedule.css';

const Schedule = ({ schedule }) => {
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
    <section className="schedule" id="schedule">
      <div className="container">
        <h2>Programação</h2>
        <p>{cleanText(schedule.introduction)}</p>
        
        <div className="timeline">
          {schedule.timeline.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-content">
                <h3>{cleanText(item.title)}</h3>
                <p>{cleanText(item.description)}</p>
                {item.speaker && <p className="speaker">Palestrante: {cleanText(item.speaker)}</p>}
                {item.bio && <p className="speaker-bio">{cleanText(item.bio)}</p>}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <a href="#inscricao" className="btn">FAÇA PARTE DESTE ENCONTRO</a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
