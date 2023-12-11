import { render, screen } from '@testing-library/react';
import MovieCard from '../../src/components/MovieCard/MovieCard';
import '@testing-library/jest-dom';




describe('MovieCard', () => {
  it('renders correctly', () => {
    // Suponiendo que MovieCard espera una prop "movie"
    const mockMovie = {
      id: 1,
      title: 'Inception',
      poster_path: '/path/to/image',
      release_date: '2010-07-16'
    };

    render(<MovieCard movie={mockMovie} />);
    
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    // y otros expects que consideres necesarios...
  });
});
