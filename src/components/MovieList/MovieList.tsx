import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Movie } from '../../types';
import './MovieList.css';
import { fetchMoviesByGenre } from '../../api/movieApi';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]); /* Se  Utiliza el hook useState para almacenar la lista de películas */

  useEffect(() => {  /*  useEffect para cargar las películas al montar el componente */
    const loadMovies = async () => { // loadMovie hace la solicitud a la Api para obtener las peliculas por genero //
      const genreIds = '12,14,16'; // Aventura, Fantasía,Animacion
      const moviesFetched = await fetchMoviesByGenre(genreIds);
      setMovies(moviesFetched);
    };

    loadMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  );
};

export default MovieList; 