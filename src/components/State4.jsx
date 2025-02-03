import React from 'react'
import { useState } from 'react';

// Updating arry of objects

const State4 = () => {

    const [movies, setMovies] = useState([
        { id: 1, title: "Spider man", ratings: 3 },
        { id: 2, title: "Superman", ratings: 6 },
      ]);

      const changeTitle = () => {
        setMovies(
            movies.map(m => m.id == 1 ? {...movies, title: "John Wick"} : m)
        )
      }

  return (
    <div>
        {movies.map(m => (
            <li key={Math.random()}>{m.title}</li>
        ))}

        <button onClick={changeTitle}> Change Title</button>
    </div>
  )
}

export default State4