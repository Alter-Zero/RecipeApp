import React, {createContext, useReducer } from 'react'

const initialState = {
    food: "Seafood",
    results: [],
}

//For practical purposes only I put 'action' but it's not being used, you can use it if you want with a switch or if else
const reducer = (state, action) => {
    console.log(action)

    const foodInfo = action.map( result => {
        return {
            label: result.recipe.label,
            image: result.recipe.image,
            source: result.recipe.source,
            ingredients: result.recipe.ingredientLines
        }
    })


    console.log(foodInfo)

    return {
        ...state,
        results: foodInfo
    }
}


//Create context
export const GlobalContext = createContext()

//Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //Action
    function searchRecipes(food){
        dispatch(food)
    }
    
    return (
        <GlobalContext.Provider value={{ food: state.food, results: state.results, searchRecipes}}>
            {children}
        </GlobalContext.Provider>
    )
}