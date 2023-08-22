import React, { useState, useEffect } from 'react'

const Card = ({ id, name, pokemonImage, isCaught, togglePokemonById }) => {
    console.log("🎨 Card", id, name);
    const [counter, setCounter] = useState(0);
    console.log({ counter });
    const handleClick = (e) => {
        togglePokemonById(id)
    }

    // useEffect(() => {
    //     setCounter(0);
    // }, [id]);

    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className={`poke__card ${isCaught.includes(id) ? 'poke__card-free' : 'poke__card-catch'}`} >
            <h2 className='poke__name'>{name} #{id}</h2>
            <div className='poke__img'>
                <img src={imgSrc} alt='Pokemon image' onClick={() => setCounter(p => p + 1)} />
            </div>
            {counter}
            <button className='poke__btn' onClick={handleClick}>{isCaught.includes(id) ? 'Отпустить' : 'Поймать'}</button>
        </div>
    )
}

export default Card
