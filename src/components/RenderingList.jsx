import React from 'react'

const RenderingList = () => {
// Example-1
//     const numbers = [1, 2, 3, 4, 5];
//   return (
//     <main>
//         {numbers.map(number => (
//             <ul key={number}>
//                 <li>{number}</li>
//             </ul>
//         ))}
//     </main>
//   )

// Example -2

   const usersInfo = [
        {
          username: "HuXn",
          email: "test@gmail.com",
          location: "USA",
        },
        {
          username: "John",
          email: "jd@gmail.com",
          location: "Arab",
        },
        {
          username: "Alex",
          email: "alexmersion@gmail.com",
          location: "India",
        },
      ];

      return (
        <main> 
            {usersInfo.map(({name, email, location}) => (
                <ul key={Math.random()}>
                    <li>UserName: {name}</li>
                    <li>Email: {email}</li>
                    <li>Location: {location}</li>
                </ul>
            ))}
        </main>
      );

}

export default RenderingList