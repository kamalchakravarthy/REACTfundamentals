import React from 'react'
import { useState } from 'react';
const Switcher = () => {

  const [sw, setSw] = useState(false);

  return (
    <div>
      {sw ? (
        <span className="bg-black text-white p-5 rounded m-2"> Light </span>
      ) : (
        <span className="bg-black text-white p-5 rounded m-2"> Dark </span>

      )}
      <br /> 

      <input key={sw ? 'Light' : 'Dark'} />
      <button onClick={() => setSw(!sw)}>Switch</button>
    </div>
  )
}

export default Switcher