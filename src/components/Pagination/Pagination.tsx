// Pagination.tsx
import React from 'react';
import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div className="pagination-controls">
      <button onClick={onPrevPage} disabled={currentPage === 1}>Anterior</button>
      <span>Página {currentPage} de {totalPages}</span>
      <button onClick={onNextPage} disabled={currentPage === totalPages}>Siguiente</button>
    </div>
  );
};

export default Pagination;
