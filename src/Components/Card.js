import React from 'react'
import { useState } from 'react'

const Card = ({ id, name, togglePokemonById }) => {
    const [isFree, setIsFree] = useState(true)

    const handleClick = (e) => {
        setIsFree(!isFree)
        togglePokemonById(id)
    }

    let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <div className={`poke__card ${isFree ? '' : 'poke__card-free'}`} >
            <h2 className='poke__name'>{name}</h2>
            <div className='poke__img'>
                <img src={pokeImg} alt='Pokemon image' />
            </div>
            <button className='poke__btn' onClick={handleClick}>{isFree ? 'Поймать' : 'Отпустить'}</button>
        </div>
    )
}

export default Card
