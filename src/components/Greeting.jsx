import React from 'react'

const Greeting = () => {

    const greetingMessage = "Hello, welcome to the REACT Monster course";
    const currentDate = new Date();
  return (
    <div>
       <h1>{greetingMessage}</h1>

       <p>Date: {currentDate.getDate()}</p>
    </div>
  )
}

export default Greeting