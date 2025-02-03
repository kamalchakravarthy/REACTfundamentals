import React from 'react'

const Product = ({name, price}) => {
  return (
    <section>
        <h1>{name}</h1>
        <p>{price}</p>
    </section>
  )
}

export default Product