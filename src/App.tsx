/* Este es el componente  raíz de la aplicación React
Aquí es donde se organiza la estructura principal de la aplicación.
se importa y usa otros componentes, como Header y MovieList. */

/* import React, { useEffect, useState } from 'react';
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

  return (
    <div>
      <Header />
      <MovieList movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={() => setCurrentPage(currentPage + 1)}
        onPrevPage={() => setCurrentPage(currentPage - 1)}
      />
    </div>
  );
};

export default App; */

import React, { useEffect, useState } from 'react';
  import Header from './components/Header/Header';
  import MovieList from './components/MovieList/MovieList';
  import Pagination from './components/Pagination/Pagination';
  import Filter from './components/Filter/Filter';
  import Sort from './components/Sort/Sort';
  import Search from './components/Search/Search';
  import { fetchMoviesByGenre, searchMoviesByName } from './api/movieApi';
  import { Movie } from './types';
  import './App.css';
  
  const App: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [genre, setGenre] = useState<string>('');
    const [sort, setSort] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
  
    useEffect(() => {
      const loadMovies = async () => {
        let data;
        if (searchTerm) {
          data = await searchMoviesByName(searchTerm, currentPage);
        } else {
          data = await fetchMoviesByGenre(genre, sort, currentPage);
        }
        setMovies(data.results);
        setTotalPages(data.total_pages);
      };
      loadMovies();
    }, [genre, sort, searchTerm, currentPage]);
  
    const handleGenreChange = (newGenre: string) => {
      setGenre(newGenre);
      setCurrentPage(1);
    };
  
    const handleSortChange = (newSort: string) => {
      setSort(newSort);
      setCurrentPage(1);
    };
  
    const handleSearchChange = (newSearchTerm: string) => {
      setSearchTerm(newSearchTerm);
      setCurrentPage(1);
    };
  
    return (
      <div>
        <Header />
        <Filter onGenreChange={handleGenreChange} />
        <Sort onSortChange={handleSortChange} />
        <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <MovieList movies={movies} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={() => setCurrentPage(currentPage + 1)}
          onPrevPage={() => setCurrentPage(currentPage - 1)}
        />
      </div>
    );
  };
  
  export default App;
  

  