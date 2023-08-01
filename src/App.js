import React from 'react'
import Card from './Components/Card'
import { useState } from 'react'

const App = () => {
  let pokeArr = [
    {
      name: "bulbasaur",
      id: "1"
    },
    {
      name: "ivysaur",
      id: "2"
    },
    {
      name: "venusaur",
      id: "3"
    },
    {
      name: "charmander",
      id: "4"
    },
    {
      name: "charmeleon",
      id: "5"
    },
    {
      name: "charizard",
      id: "6"
    },
    {
      name: "squirtle",
      id: "7"
    },
    {
      name: "wartortle",
      id: "8"
    },
    {
      name: "blastoise",
      id: "9"
    },
    {
      name: "caterpie",
      id: "10"
    },
    {
      name: "metapod",
      id: "11"
    },
    {
      name: "butterfree",
      id: "12"
    },
    {
      name: "weedle",
      id: "13"
    },
    {
      name: "kakuna",
      id: "14"
    },
    {
      name: "beedrill",
      id: "15"
    },
    {
      name: "pidgey",
      id: "16"
    },
    {
      name: "pidgeotto",
      id: "17"
    },
    {
      name: "pidgeot",
      id: "18"
    },
    {
      name: "rattata",
      id: "19"
    },
    {
      name: "raticate",
      id: "20"
    }
  ]

  return (
    <>
      <div className='poke'>
        <div className='container'>
          <h1 className='poke__title'>Поймано покемонов</h1>
          <p className='poke__score'>5/20</p>
          <div className='poke__wrapper'>
            {pokeArr.map((pokemon) => (
              <Card id={pokemon.id} name={pokemon.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
