import React from 'react'
import { useState } from 'react';

const ShoppingList = () => {

    const [list, setList] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e) => {

        e.preventDefault();

        if(!name || !quantity) return;

            const newItem = {
                name,
                quantity: parseInt(quantity),
            };
           
            setList((previtems) => [...previtems, newItem])
            setName('')
            setQuantity('')
        

    };
    
  return (
    <div>
        <h1>Shopping List: </h1> 

        <form onSubmit={handleSubmit}>

            <input 
              type="text"
              onChange = {(e) => setName(e.target.value)}
              placeholder="Name"
              value={name}
            />

            <input 
              type='number'
              onChange = {(e) => setQuantity(e.target.value)}
              placeholder='Quantity'
              value={quantity}
            />

            <button type='submit'> ADD </button>


        </form>

        <ul>
            {list.map((l, index) => (
                <li key={index}>
                    {l.name} - Quantity: {l.quantity}    
                </li>
            ))}
        </ul>

    </div>
  )
}

export default ShoppingList