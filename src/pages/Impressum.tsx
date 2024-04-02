import React from 'react';

const Impressum: React.FC = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Arial", sans-serif',
    fontSize: '12px',
    lineHeight: '1.5',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#0000EE',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>Impressum</div>
      <p>Zürich Zoo<br />
      Winterthurerstr.3<br />
      8400 Winterthur<br />
      Switzerland</p>

      <p>Telefon: +41 79 723 28 91<br />
      E-Mail-Adresse: <a href="mailto:support@zuerizoo.ch" style={linkStyle}>support@zuerizoo.ch</a></p>

      <p>Mehr infos <a href="https://youtu.be/HIcSWuKMwOw?si=6JSHVBmY456OMUXZ" style={linkStyle}>Hier</a></p>

      <p>Der Zoo Zürich in der Schweiz beherbergt eine vielfältige <br /> Sammlung von Tieren aus aller Welt in modernen Anlagen. <br /> Besucher können Elefanten, Giraffen, Löwen, Tiger, <br /> Pinguine, Gorillas und mehr sehen. Es gibt auch <br /> Bildungsprogramme und Veranstaltungen für alle <br /> Altersgruppen.</p>

    </div>
  );
};

export default Impressum;
