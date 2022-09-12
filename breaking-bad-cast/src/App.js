import './App.css';
import { Header } from './components/ui/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CharactersGrid } from './components/characters/CharactersGrid';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://breakingbadapi.com/api/characters`);
      console.log(result.data);
      setItems(result.data);
      setisLoading(false);
    }
    fetchData();

  }, [])



  return (
    <div className='container'>
      <Header />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
