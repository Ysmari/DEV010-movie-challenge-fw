/* Este es el componente  raíz de la aplicación React
Aquí es donde se organiza la estructura principal de la aplicación.
se importa y usa otros componentes, como Header y MovieList. */

import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Pagination from './components/Pagination/Pagination';
import { fetchMoviesByGenre } from './api/movieApi';
import { Movie } from './types';
import './App.css';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadMovies = async () => {
      const genreIds = '12,14,16'; // Aventura, Fantasía, Animación
      const data = await fetchMoviesByGenre(genreIds, currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    loadMovies();
  }, [currentPage]);

  const goToNextPage = () => setCurrentPage(currentPage + 1);
  const goToPrevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      <Header />
      <MovieList movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={goToNextPage}
        onPrevPage={goToPrevPage}
      />
    </div>
  );
};

export default App;

