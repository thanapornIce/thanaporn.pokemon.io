import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonDetail.css';

function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
  
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => setPokemon(response.data));
    }, [name]);
  
    if (!pokemon) return <div>Loading...</div>;
  
    return (
      <div className="pokemon-detail">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Height: {pokemon.height / 10} m</p>
        <p>Weight: {pokemon.weight / 10} kg</p>
        <div className="pokemon-types">
          {pokemon.types.map((type, index) => (
            <div key={index} className="pokemon-type">
              {type.type.name}
            </div>
          ))}
        </div>
        <div className="pokemon-abilities">
          {pokemon.abilities.map((ability, index) => (
            <div key={index} className="pokemon-ability">
              {ability.ability.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default PokemonDetail;
  