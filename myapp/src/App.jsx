import React, { useState } from 'react';
import Card from './Componentes/Card';
import fetchData from './Services/api';
import initialData from './halpers/initialData';
import Footer from './Componentes/Footer';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    if(city !== '') {
      event.preventDefault(); // O preventDefault vai parar o comportamento padrão do evento que seria de recarregar a pagina
    
      fetchData(city).then((response) => {
        setData(response);
      })
    }
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
      <Card data={data} />
      <Footer />
    </div>
  );
}

export default App;
