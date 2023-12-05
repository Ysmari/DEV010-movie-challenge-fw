

// Aqui se organizan los componentes principales 

import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import './App.css'; // Importa App.css si tienes estilos globales aquí

function App() {
  return (
    <div>
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
