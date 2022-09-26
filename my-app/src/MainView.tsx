import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './Todo';
import "../node_modules/@partnerhero/phds.utilities.typography/dist/fonts/Inter-Web/inter.css";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);