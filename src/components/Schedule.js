import React from 'react';
import '../styles/Schedule.css';

const Schedule = ({ schedule }) => {
  return (
    <section className="schedule" id="schedule">
      <div className="container">
        <h2>Programação</h2>
        <p>{schedule.introduction}</p>
        
        <div className="timeline">
          {schedule.timeline.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.speaker && <p className="speaker">Palestrante: {item.speaker}</p>}
                {item.bio && <p className="speaker-bio">{item.bio}</p>}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <a href="#inscription" className="btn">FAÇA PARTE DESTE ENCONTRO</a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
