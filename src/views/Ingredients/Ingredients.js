import React, { useState } from 'react';
import style from './Ingredients.module.scss';

const Ingredients = () => {
    const [ingredients, setIngredients] = useState([
        {
            id:"1",
            name:"item1",
            icon:"item1",
            description: 'test'
        },
        {
            id:"2",
            name:"item2",
            icon:"item2",
            description: 'test'
        },
        {
            id:"3",
            name:"item3",
            icon:"item3",
            description: 'test'
        },
    ]);
    const [ inputName, setInputName ] = useState();
    const [ inputIcon, setInputIcon ] = useState();
    const [ inputDescription, setInputDescription ] = useState();
    const handleInputName = (e) => {
        setInputName(e.target.value);   
    }
    const handleInputIcon = (e) => {
        setInputIcon(e.target.value);   
    }
    const handleInputDescription = (e) => {
        setInputDescription(e.target.value);   
    }
    const addItem = () => {
        const newItem = {
            id: ingredients.length+1,
            name: inputName,
            icon: inputIcon,
            description: inputDescription
        };
        setIngredients([...ingredients, newItem])
        clearInput('');
    }
    const clearInput = () => {
        setInputName('');
        setInputIcon('');
        setInputDescription('');
    }
    return(
        <div className={style.wrapper}>
            <div>
                {ingredients.map( item => (
                    <p key={item.id}>
                        Id:{item.id}<br/>
                        Name:{item.name}<br/>
                        Icon:{item.icon}<br/>
                        Description:{item.description}
                        <br/><br/><br/>
                    </p>
                ))}
            </div>
            <div className={style.items}>
                <input 
                    type="text"
                    name="name" 
                    placeholder="name" 
                    onChange={handleInputName}
                    value={inputName}/>
                <input 
                    type="text" 
                    name="icon" 
                    placeholder="icon" 
                    onChange={handleInputIcon}
                    value={inputIcon}/>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="description" 
                    onChange={handleInputDescription}
                    value={inputDescription}/>
                <button onClick={addItem}>Add item</button>
            </div>
        </div>  
    );
}

export default Ingredients;