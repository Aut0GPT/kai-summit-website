import React from 'react';
import '../styles/Partners.css';

const Partners = ({ partners }) => {
  return (
    <section className="supporters">
      <div className="container">
        <h2>Com Apoio Institucional</h2>
        <p>{partners.introduction}</p>
        
        <div className="supporters-grid">
          {partners.partners.map((partner, index) => (
            <div className="supporter-logo" key={index}>
              {partner.name}
            </div>
          ))}
        </div>
        
        <div className="contact-partners">
          <h3>Contatos para Patrocinadores e Parceiros</h3>
          <div className="contact-list">
            {partners.contacts.map((contact, index) => (
              <p key={index}>
                {contact.name} - {contact.phone} ({contact.role})
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
