import React from 'react'
import { useState } from 'react';


const Profile = () => {

    const [person, setPerson] = useState({
        name: "",
        age: ""
    })

    const handleChange = (e) => {
        console.log(e)
        const {name, value} = e.target;
        setPerson((prevPerson) => ({
            ...prevPerson,
            [name] : value,
        }));

    };

  return (
    <div> 
        <h1> User Profile: </h1>

        <div>
            <label>
                Name:
                
            </label>
            <input 
                  type="text"
                  name="name"
                  value={person.name}
                  onChange={handleChange}
                />

        </div>

        <div>

        <label>
                Age:
                <input 
                  type='number'
                  name='age'
                  value={person.age}
                  onChange={handleChange}
                />
            </label>

        </div>

        <h3> Profile Information: </h3>
        
        <p> Name : {person.name}</p>
        <p> Age: {person.age}</p>
    </div>
  )
}

export default Profile