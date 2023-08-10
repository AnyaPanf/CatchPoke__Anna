import React from 'react'

const Card = ({ id, name, pokemonImage, isCaught, togglePokemonById }) => {

    const handleClick = (e) => {
        togglePokemonById(id)
    }

    return (
        <div className={`poke__card ${isCaught.includes(id) ? 'poke__card-free' : 'poke__card-catch'}`} >
            <h2 className='poke__name'>{name}</h2>
            <div className='poke__img'>
                <img src={pokemonImage} alt='Pokemon image' />
            </div>
            <button className='poke__btn' onClick={handleClick}>{isCaught.includes(id) ? 'Отпустить' : 'Поймать'}</button>
        </div>
    )
}

export default Card
