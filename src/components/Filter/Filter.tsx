import React from 'react';

interface FilterProps {
  onGenreChange: (genre: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onGenreChange }) => {
  return (
    <div>
      <select onChange={(e) => onGenreChange(e.target.value)}>
        <option value="">Filter By Genre</option>
        <option value="12">Aventura</option>
        <option value="14">Fantasía</option>
        <option value="16">Animación</option>
        {/* otros géneros de ser necesario */}
      </select>
    </div>
  );
};

export default Filter;

