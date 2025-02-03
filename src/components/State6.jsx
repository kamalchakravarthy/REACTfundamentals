import React from 'react'
import { useState } from 'react'

// Passing function as a value

const State6 = () => {

    const [count, setCount] = useState(() => {
        const initialCount = 10;
        return initialCount;
    })

    const increment = () => {
        setCount(pc => pc+1);
    }

    const [randomNumber, setRandomNumber] = useState(() => 
        Math.floor(Math.random() * 100)
    );

    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 200);
        setRandomNumber(newRandomNumber);
    }

  return (
    <div>

    <h1>Count: {count}</h1>
    <button onClick={increment}>Increment</button>

    <h1>Random Number: {randomNumber}</h1>
    <button onClick={generateRandomNumber}>Generate another Random Number</button>

    </div>
  )
}

export default State6