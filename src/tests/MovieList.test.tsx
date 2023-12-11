import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';

describe('MovieList component', () => {
    test('renders movie data correctly', () => {
      const movies = [
        { id: 1, title: 'Movie 1', releaseYear: 2022 },
        { id: 2, title: 'Movie 2', releaseYear: 2023 },
      ];
  
      render(<MovieList movies={movies} />);
  
      // Assert that movie data is rendered
      expect(screen.getByText('Movie 1')).toBeInTheDocument();
      expect(screen.getByText('Movie 2')).toBeInTheDocument();
      expect(screen.getByText('2022')).toBeInTheDocument();
      expect(screen.getByText('2023')).toBeInTheDocument();
    });
  });