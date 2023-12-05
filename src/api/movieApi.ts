 import { Movie } from '../types'; // se esta utilizando el tipo Movie del archivo types

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 

export const fetchMoviesByGenre = async (genreIds: string): Promise<Movie[]> => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreIds}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
