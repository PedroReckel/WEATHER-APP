import React, { useState } from 'react';
import Card from './Componentes/Card';
import fetchData from './Services/api';

function App() {
  const [city, setCity] = useState('');
  // const [data, setData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // O preventDefault vai parar o comportamento padrão do evento que seria de recarregar a pagina
    
    fetchData(city).then((response) => {
      console.log(response);
    })
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Cidade" 
          className="p-3 rounded-lg outline-none"
          value={city}
          onChange={({target: { value } }) => setCity(value) }
          />
        <button 
          type="submit" 
          className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
          >
            Pesquisar
        </button>
      </form>
      {city}
      <Card />
    </div>
  );
}

export default App;
