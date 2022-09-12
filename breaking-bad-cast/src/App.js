import './App.css';
import { Header } from './components/ui/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CharactersGrid } from './components/characters/CharactersGrid';
import { Search } from './components/ui/Search';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [query, setQuery] = useState('');



  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://breakingbadapi.com/api/characters?name=${query}`);
      // console.log(result.data);
      setItems(result.data);
      setisLoading(false);
    }
    fetchData();

  }, [query])



  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
