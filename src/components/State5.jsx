import React, { useState } from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

// Sharing state from parent component to child component

const State5 = () => {

    const [count, setCount] = useState(0);

  return (
    <div>

        <ComponentOne count={count} onClickHandler={() => setCount(count + 1)}/>
        <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)}/>
    </div>
  )
}

export default State5