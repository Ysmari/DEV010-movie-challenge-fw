import React from 'react';
import './Header.css'; // Asegúrate de importar tu archivo CSS

const Header: React.FC = () => {
  return (
    <header>
      <h1>
        <span className="movie-part">Movie</span>
        <span className="zone-part">Zone</span>
      </h1>
    </header>
  );
};

export default Header;
