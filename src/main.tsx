/* Es el punto de entrada para la aplicacion RREACT. Se realiza el montaje inicial de la aplicacion en el DOM. */
import React from 'react' /* Importa React, que es necesario para usar JSX */
import ReactDOM from 'react-dom/client' /*   Se Importa ReactDOM, específicamente la API para clientes, que se usa para interactuar con el DOM. */
import App from './App'; /*  Importa el componente raíz App de la aplicación. */
import './index.css' /* : Importa estilos CSS globales que se aplicarán a toda la aplicación. */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 
