import React from 'react';

interface SortProps {
  onSortChange: (sort: string) => void;
}

const Sort: React.FC<SortProps> = ({ onSortChange }) => {
  return (
    <div>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Order By</option>
        <option value="popularity.desc">Más populares</option>
        <option value="release_date.desc">Más recientes</option>
        {/* otras opciones de ordenamiento */}
      </select>
    </div>
  );
};

export default Sort;

