import React, { useContext, useState} from 'react'
import { GlobalContext } from '../Context/useSearchData';
import { FaAngleRight } from 'react-icons/lib/fa'
import Modal from "react-modal"

Modal.setAppElement("#root")
const Body = () => {

    const {results} = useContext(GlobalContext)

    const [modalisOpen, setModalIsOpen] = useState("")

    const modalPopUp = target => {
        setModalIsOpen(target.target.value)
    }

    return ( results !== [] ?
        <div className="recipes">
            <h1 className="text">Recipes</h1>

            <div className="recipesDisplay">
                {results ?
                    results.map(result => {
                        

                        return (<div key={result.ingredients}>
                            <div className="recipesContainer">
                                <h1 key={result.image}>{result.label}</h1>
                                <img src={result.image} alt="Error on Loading"/>
                                <button key={result.label} value={result.label} onClick={modalPopUp}>View recipe</button>
                            </div>

                            <Modal isOpen={result.label === modalisOpen ? true : false } className="modal" onRequestClose={() =>{setModalIsOpen("")}} style={{overlay:{backgroundColor: "rgba(0, 0, 0, 0.51)"}}} >
                                    <h1 key={result.label}>{result.label}</h1>
                                    <div className="modal-screen">
                                        <div className="screen-left">
                                            <img src={result.image} alt="Error on Loading"/>
                                            <button onClick={modalPopUp}>Back</button>
                                        </div>

                                        <div className="screen-right">
                                            <h2>Ingredients:</h2>
                                            <ul>
                                                {result.ingredients.map( ingredient => (
                                                    <li key={ingredient}><span><FaAngleRight size={30}/></span> {ingredient}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>  
                            </Modal>
                        </div>)
                        
                    })
                : ""}
            </div>
            
        </div>
    : <div className="beforeSearch">

    </div>)
}

export default Body
