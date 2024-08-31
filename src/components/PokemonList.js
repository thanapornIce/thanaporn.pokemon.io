import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => setPokemons(response.data.results));
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {pokemons.map((pokemon, index) => (
          <li key={index} style={{ margin: '5px 0' }}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;

