import React from 'react'
import { useState } from 'react';

export const fetchPokemons = (currentPokemons, amountOnPage) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${currentPokemons}&limit=${amountOnPage}`)
    .then(response => {
      // response.status === 200
      // response.status === 404
      // response.status === 500

      return response.json();
    })
    .then((data) => data.results.map(({ name, url, }) => ({
      name,
      id: url.slice(34, -1),
    })));
}

// fetchPokemons(123).then(x => {
//   // x === [ {}, {}, {}, ... ]
//   // typeof x === A
//   // x instanceof B
// })

// export default fetchPokemons


// https://pokeapi.co/api/v2/pokemon?offset=23&limit=5

// offset=23&limit=5 → 24, 25, 26, 27, 28
// ← Назад  Вперед →
// 1 страница = 12 покемонов