import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../Context/useSearchData';
import {FaSearch} from 'react-icons/lib/fa'

const SearchBar = () => {

    const {searchRecipes} = useContext(GlobalContext)

    const initialState = ""

    const [inputValue, setInputValue] = useState(initialState)

    const [state, setState] = useState(initialState)

    function search (e) {
        e.preventDefault()
        setState(inputValue)
        setInputValue(initialState)
    }

    const ChangeInputValue = e =>{
        const newValue = e.target.value
        setInputValue(newValue)
    }

    const APP_KEY = "5b25db68c7dcdfc73cace0eca35ebed8"
    const APP_ID = "7cb32f83"

        useEffect(() =>{
            if(state === "") {
                console.log("no props")}
            else{fetch(`https://api.edamam.com/search?q=${state}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(res => res.json())
        .then(response => searchRecipes(response.hits))}
        }, [state])

    return (
            <form onSubmit={search} className="search">
                <label htmlFor="search">Search for a recipe</label>
                <input type="text" name="search" value={inputValue} onChange={ChangeInputValue} />
                <button type="submit"><FaSearch/></button>
            </form>
    )
}

export default SearchBar
