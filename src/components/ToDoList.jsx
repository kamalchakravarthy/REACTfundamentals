import React from 'react'
import { useState } from 'react';

const ToDoList = () => {

    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim()){
            setList([...list, inputValue]);
            setInputValue("");
        }
    }

    const handleChange = (e) => {
    //   console.log(e);
    //   console.log(e.target);
    //   console.log(e.target.value);

      setInputValue(e.target.value);
    }

  return (
    <div>
        <h1> TODO LIST :</h1>

        <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Add ToDo Item: '
              value={inputValue}
              onChange={handleChange}
            />

            <button type="submit"> ADD </button>
            
        </form>

        <ul> 
        {list.map((l, index) => (
            <li key={index}> {l} </li>
        ))}
        </ul>
    </div>
  )
}

export default ToDoList