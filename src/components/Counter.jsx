import React from 'react'
import { useState } from 'react';

/* UseState Assignment


     <Counter />
     <ToDoList />
     <Profile />
     <ShoppingList />

*/

const Counter = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <h1>Counter Value: {count}</h1>
        <button onClick={incrementCount}> Increment counter</button>
        <button onClick={() => setCount(count - 1)}> Decrement Counter</button>
    </div>
  )
}

export default Counter