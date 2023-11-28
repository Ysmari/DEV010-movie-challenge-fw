import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Movie } from '../../types';
import './MovieList.css'; // Si tienes estilos específicos para MovieList

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const genreIds = '12,14'; // Aventura y Fantasía
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=${genreIds}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  );
};

export default MovieList;
