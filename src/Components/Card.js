import React from 'react'
import { useState } from 'react'

const Card = ({ id, name, setStatus }) => {
    const [isFree, setIsFree] = useState(true)

    const handleClick = (e) => {
        setIsFree(!isFree)
    }

    return (
        <>
            <div className={`${isFree ? 'poke__card poke__card-catch' : 'poke__card poke__card-free'}`} >
                <h2 className='poke__name'>{name}</h2>
                <div className='poke__img'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt='Pokemon image' />
                </div>
                <button className='poke__btn' onClick={handleClick}>{`${isFree ? 'Поймать' : 'Отпустить'}`}</button>
            </div>
        </>
    )
}

export default Card
