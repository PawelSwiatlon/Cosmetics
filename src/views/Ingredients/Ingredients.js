import React, { useState, useReducer } from 'react';
import style from './Ingredients.module.scss';

const Ingredients = () => {
    //create input context
    const [ inputsContent, setInputContent ] = useReducer( 
        (state, newState) => ({...state, ...newState}),
        {
          nameInputContent: '',
          iconInputContent: '',
          descriptionInputContent: ''  
        }
    );
    //Ingredients list
    const [ingredients, setIngredients] = useState([
        {
            id:"1",
            name:"Test Name",
            icon:"Test Icon",
            description: 'Test Description'
        },
    ]);
    //Handle input change - update input context state
    const handleInputChange = e => {
        setInputContent({
            [e.target.name]: e.target.value,
        });
    } 
    //Add item method
    const addItem = () => {
        const newItem = {
            id: ingredients.length+1,
            name: inputsContent.nameInputContent,
            icon: inputsContent.iconInputContent,
            description: inputsContent.descriptionInputContent
        };
        setIngredients([...ingredients, newItem]);
        setInputContent({
            nameInputContent: '',
            iconInputContent: '',
            descriptionInputContent: ''  
        })
    }
    //Delete item method
    const deleteItem = id => {
        const newIngridientsList = ingredients.filter( item => item.id !== id);
        setIngredients([...newIngridientsList]);
    }
    return(
        <div className={style.wrapper}>
            <div>
                {ingredients.map( item => (
                    <p key={item.id}>
                        Id:{item.id}<br/>
                        Name:{item.name}<br/>
                        Icon:{item.icon}<br/>
                        Description:{item.description}<br/>
                        <button onClick={() => {deleteItem(item.id)}}>Delete</button>
                        <br/><br/><br/>
                    </p>
                ))}
            </div>
            <div className={style.items}>
                <input 
                    type="text"
                    name="nameInputContent" 
                    placeholder="name" 
                    onChange={handleInputChange}
                    value={inputsContent.nameInputContent}/>
                <input 
                    type="text" 
                    name="iconInputContent" 
                    placeholder="icon" 
                    onChange={handleInputChange}
                    value={inputsContent.iconInputContent}/>
                <input 
                    type="text" 
                    name="descriptionInputContent" 
                    placeholder="description" 
                    onChange={handleInputChange}
                    value={inputsContent.descriptionInputContent}/>

                <button onClick={addItem}>Add item</button>
            </div>
        </div>  
    );
}

export default Ingredients;