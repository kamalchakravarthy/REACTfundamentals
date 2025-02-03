import React from 'react'
/* Calling Card Component:

      <Card>
        <h1> My Card 1</h1>
        <p>Content of card 1</p>
        <h1> My Card 2</h1>
        <p>Content of card 2</p>
        <h1> My Card 3</h1>
        <p>Content of card 3</p>
      </Card>

*/

const Card = (props) => {

    console.log(props);
    console.log(props.children);
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Card