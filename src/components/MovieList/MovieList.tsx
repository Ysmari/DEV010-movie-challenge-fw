import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Movie } from '../../types';
import './MovieList.css';
import { fetchMoviesByGenre } from '../../api/movieApi';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const loadMovies = async () => {
      const genreIds = '12,14,16'; // Aventura, Fantasía,Animacion
      const data = await fetchMoviesByGenre(genreIds, currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    loadMovies();
  }, [currentPage]);
  // Funciones para cambiar la página
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>Anterior</button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Siguiente</button>
      </div>
    </div>
  );
};
export default MovieList;