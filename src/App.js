import React from 'react'
import Card from './Components/Card'
import { useState } from 'react'
import axios from 'axios'


const App = () => {
  const [isCaught, setIsCaught] = useState([])
  const [pokemonsArr, setPokemonsArr] = useState([])

  const togglePokemonById = (pokemonId) => {
    if (isCaught.includes(pokemonId)) {
      setIsCaught(isCaught.filter((id) => {
        return id !== pokemonId
      }))
    } else {
      return setIsCaught([...isCaught, pokemonId])
    }
  }

  const getPokemon = async () => {
    for (let i = 1; i <= 20; i++) {
      let { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`)
      setPokemonsArr(prev => {
        return [...prev, data]
      })
    }
  }
  console.log(pokemonsArr);

  const handleClick = (e) => {
    getPokemon();
  }

  return (
    <div className='poke'>
      <div className='container'>
        <h1 className='poke__title'>Поймано покемонов</h1>
        <p className='poke__score'>{isCaught.length} / {pokemonsArr.length}</p>
        <button className='pokemons__btn' onClick={handleClick}>Показать всех покемонов</button>
        <div className='poke__wrapper'>
          {pokemonsArr.map((pokemon) => (
            <Card name={pokemon.name} id={pokemon.id} pokemonImage={pokemon.sprites['front_default']} togglePokemonById={togglePokemonById} isCaught={isCaught} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
