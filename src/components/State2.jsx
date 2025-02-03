import React from 'react'
import { useState } from 'react'

// Updating Arrays

const State2 = () => {

    const [friends, setFriends] = useState(['Alex', 'Bob',]);

    const addOneFriend = () => setFriends([...friends, "Kamal"]);
    const removeFriend = () => setFriends(friends.filter(f => f !== "Bob"));
    const updateOneFriend = () => setFriends(friends.map(f => f === "Kamal" ? "Kamal Chakravarthy" : f));

  return (
    <section>

        {friends.map(f => (
            <li key={Math.random()}> {f}</li>
        ))}

        <button onClick={addOneFriend}> Add one Friend </button>
        <button onClick={removeFriend}> Remove Friend </button>
        <button onClick={updateOneFriend}> Update Friend </button>

    </section>
  )
}

export default State2