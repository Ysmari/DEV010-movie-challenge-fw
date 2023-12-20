import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieList from '../components/MovieList/MovieList';
import { fetchMoviesByGenre as mockFetchMoviesByGenre } from '../api/movieApi';

import App from '../App';

jest.mock('../../api/movieApi');

describe('MovieList component', () => {

  test.only('prueba', ()=> {
  render(<App/>);
  });
  test('renders movie data correctly', async () => {
    (mockFetchMoviesByGenre as jest.Mock).mockResolvedValue({
      results: [
        { id: 1, title: 'Movie 1', release_date: '2022-01-01' },
        { id: 2, title: 'Movie 2', release_date: '2023-01-01' },
      ],
      total_pages: 10,
      
    });
    render(<MovieList movies={[
      { id: 1, title: 'Movie 1', release_date: '2022-01-01', poster_path: '/path-to-poster-1.jpg' },
      { id: 2, title: 'Movie 2', release_date: '2023-01-01', poster_path: '/path-to-poster-2.jpg' },
    ]} />);

    // Espera a que los elementos de la película se muestren
    await waitFor(() => {
      expect(screen.getByText('Movie 1')).toBeInTheDocument();
      expect(screen.getByText('Movie 2')).toBeInTheDocument();
    });

    // Otras pruebas pueden incluir la comprobación de la paginación
  });

  // Aquí puedes añadir más tests relacionados con la paginación o interacción del usuario
});