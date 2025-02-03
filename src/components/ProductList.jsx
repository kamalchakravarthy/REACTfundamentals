import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
      ];

  return (
    <main>
        {products.map(({id, name, price}) => (
            <div  key={id}>
                
                    <h1>Name: {name}</h1>
                    <h1>Price: {price}</h1>
                
            </div>
        ))}

    </main>

  )
}

export default ProductList