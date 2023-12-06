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



/* este archivo se dedica a realizar peticiones HTTP
utilizando la API de películas de The Movie Database
(TMDB). En particular, exporta una función llamada
fetchMoviesByGenre que recibe como parámetro
los IDs de género y devuelve una promesa que se
resuelve en un array de objetos Movie. Esta función
construye la URL de la petición utilizando el API Key
proporcionado por TMDB y realiza una solicitud GET
a la API para obtener las películas correspondientes
al género especificado. Luego, procesa la respuesta y
devuelve los resultados obtenidos. Si ocurre algún
error durante la solicitud o el procesamiento de
datos, se captura y se maneja adecuadamente para
evitar que el programa se detenga.*/