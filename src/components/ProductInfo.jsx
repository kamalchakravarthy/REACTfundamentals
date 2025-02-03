import React from 'react'

const ProductInfo = () => {

    const product = {
        name: "Laptop",
        price: 1200,
        availability: "In stock"
    }

  return (
    <div>
        <h1>ProductName: {product.name}</h1>
        <h1>productPrice: ${product.price}</h1>
        <h1>productAvailability: {product.availability}</h1>
        
    </div>
  )
}

export default ProductInfo