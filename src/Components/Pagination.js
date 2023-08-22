import React from 'react'
import { useState } from 'react'

export const Pagination = ({ setAmountOnPage, amountOnPage, setCurrentPokemons }) => {
    const [pageNum, setPageNum] = useState(1)

    const handleChange = (e) => {
        setAmountOnPage(e.target.value)
    }

    const handleClickNext = (e) => {
        setCurrentPokemons(prev => prev + Number(amountOnPage))
        setPageNum(prev => prev + 1)
    }

    const handleClickPrev = (e) => {
        setCurrentPokemons(prev => prev - Number(amountOnPage))
        setPageNum(prev => prev - 1)
    }

    return (
        <div className='poke__pages'>
            <div className='pokemon__buttons'>
                <button className='pokemons__btn' onClick={handleClickPrev}>Назад</button>
                <p className='poke__page'>{`Страница ${pageNum}`}</p>
                <button className='pokemons__btn' onClick={handleClickNext}>Вперёд</button>
            </div>
            <div className='poke__select'>
                <p poke__select-text>Покемонов на странице</p>
                <select onChange={handleChange}>
                    <option>12</option>
                    <option>24</option>
                    <option>36</option>
                </select>
            </div>
        </div>
    )
}
