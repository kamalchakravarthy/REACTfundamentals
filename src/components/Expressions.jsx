import React from 'react'

const Expressions = () => {
    const myName = "Kamal Chakravarthy";

    const multiply = (a,b) => a*b; 
  
    const specialClass = "anytime_I_can_change_class_name";
  
    return (
      <div>
          <h1>My name is : {myName}</h1>
  
          <p> 2 + 2 = { 2+2 }</p>
  
          <p>My Friends list: {["Yahiya Khan", "Anagesh", "Vivek" , "Charan", "Phani"]}</p>
  
          <p> 2 * 2 = {multiply(2,2)}</p>
  
          <p className={specialClass}> This is a paragraph</p>
          
      </div> 
      );
}

export default Expressions