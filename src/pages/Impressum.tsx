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
      <p>Wix.com Ltd.<br />
      Nemal St. 40<br />
      6350671 Tel Aviv<br />
      Israel</p>

      <p>Telefon: +972 (3) 545-4900<br />
      Fax: +972 (3) 546 4407<br />
      E-Mail-Adresse: <a href="mailto:support@wix.com" style={linkStyle}>support@wix.com</a></p>

      <p>Vertreten durch den Aufsichtsrat: <a href="https://investors.wix.com/board-of-directors" style={linkStyle}>https://investors.wix.com/board-of-directors</a></p>

      <p>Wix.com Ltd. ist ein in Israel eingetragenes Unternehmen.<br />
      Handelsregisternummer des Staates Israel: 513881177<br />
      Mehrwertsteuer-Identifikationsnummer: 513881177</p>

      <p>Wix ist eine Plattform zur Erstellung von Websites.</p>
    </div>
  );
};

export default Impressum;
