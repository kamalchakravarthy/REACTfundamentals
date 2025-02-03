import React from 'react'

const Person = ({name, age}) => {
  return (
    <section>
        <h1>{name}</h1>
        <p> {age}</p>
    </section>
  )
}

export default Person