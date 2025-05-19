import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import About from './components/About';
import Pillars from './components/Pillars';
import Benefits from './components/Benefits';
import Schedule from './components/Schedule';
import Narrative from './components/Narrative';
import Partners from './components/Partners';
import Cta from './components/Cta';
import Footer from './components/Footer';

// Data
import eventInfoData from './data/event-info.json';
import aboutData from './data/about.json';
import pillarsData from './data/pillars.json';
import benefitsData from './data/benefits.json';
import scheduleData from './data/schedule.json';
import partnersData from './data/partners.json';
import ctaData from './data/cta.json';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [eventInfo, setEventInfo] = useState(null);
  const [about, setAbout] = useState(null);
  const [pillars, setPillars] = useState(null);
  const [benefits, setBenefits] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [partners, setPartners] = useState(null);
  const [cta, setCta] = useState(null);

  useEffect(() => {
    // Load all data
    setEventInfo(eventInfoData);
    setAbout(aboutData);
    setPillars(pillarsData);
    setBenefits(benefitsData);
    setSchedule(scheduleData);
    setPartners(partnersData);
    setCta(ctaData);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="App">
      <Header eventInfo={eventInfo} />
      <About about={about} />
      <Pillars pillars={pillars} />
      <Benefits benefits={benefits} />
      <Schedule schedule={schedule} />
      <Narrative about={about} />
      <Partners partners={partners} />
      <Cta cta={cta} eventInfo={eventInfo} />
      <Footer eventInfo={eventInfo} />
    </div>
  );
}

export default App;
