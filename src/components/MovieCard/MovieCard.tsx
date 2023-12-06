 import React from 'react'; //  es necesario para usar JSX
import { Movie } from '../../types'; // importa el tipo Movie que se utiliza en la interfaz MovieCardProps.
import './MovieCard.css'; // Importa los estilos específicos para MovieCard

interface MovieCardProps { //  Props: objeto de tipo 'movie' que muestra titulo, F/L e imagen //
  movie: Movie;
}
// con javascript puro: const MovieCard = ({ movie }) => { //
 const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {  //  React.FC deja claro que MovieCard es un componente funcional de React y no solo una función TypeScript ordinaria.//
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieCard; 