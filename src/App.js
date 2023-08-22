import React from 'react'
import Card from './Components/Card'
import { Pagination } from './Components/Pagination'
import { useState, useEffect } from 'react'
import { fetchPokemons } from './API/fetchPokemons'


// 1. хранить в стйте в компоненте номер страницы (по умолчанию 1)
// 2. добавить новый стейт для выбора размерa страницы (по умолчантю 12)
// 3. вынести блок с переключением страниц в отдельный компонент

const App = () => {
  const [isCaught, setIsCaught] = useState([])
  const [pokemonsArr, setPokemonsArr] = useState([])
  const [currentPokemons, setCurrentPokemons] = useState(0)
  const [amountOnPage, setAmountOnPage] = useState(12)

  const togglePokemonById = (pokemonId) => {
    if (isCaught.includes(pokemonId)) {
      setIsCaught(isCaught.filter((id) => {
        return id !== pokemonId
      }))
    } else {
      return setIsCaught([...isCaught, pokemonId])
    }
  }

  const handleClick = () => {
    fetchPokemons(currentPokemons, amountOnPage).then(result => setPokemonsArr(result))
  };

  useEffect(() => {
    handleClick()
  }, [currentPokemons, amountOnPage]);

  return (
    <div className='poke'>
      <div className='container'>
        <h1 className='poke__title'>Поймано покемонов</h1>
        <h2 style={{ background: "yellow" }}>offset: {currentPokemons}</h2>
        <p className='poke__score'>{isCaught.length} / {pokemonsArr.length}</p>

        <Pagination setAmountOnPage={setAmountOnPage} amountOnPage={amountOnPage} setCurrentPokemons={setCurrentPokemons} />

        <div className='poke__wrapper'>
          {pokemonsArr.map((pokemon) => (
            <Card key={pokemon.id} name={pokemon.name} id={pokemon.id} togglePokemonById={togglePokemonById} isCaught={isCaught} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
