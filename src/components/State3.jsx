import React from 'react'
import { useState } from 'react'

// Updating objects

const State3 = () => {

    const [movie, setMovie] = useState({
        title: 'Bahubali 2',
        rating: 9
    })

    const modifyRating = () => { setMovie({...movie, rating:8})

        // const copyMovie = {
        //     ...movie,
        //     rating: 9.5
        // }

        // setMovie(copyMovie);
    }

  return (
    <div>
        <h1>Title: {movie.title} </h1>
        <p>Rating: {movie.rating}</p>

        <button onClick={modifyRating}>Change rating</button>
    </div>
  )
}

export default State3