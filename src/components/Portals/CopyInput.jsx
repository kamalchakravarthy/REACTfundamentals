import React from 'react'
import { useState } from 'react';
import PopupContent from './PopupContent';

const CopyInput = () => {

    const [inputValue, setInputValue] = useState('');
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        console.log(inputValue);
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(()=> setCopied(false), 5000);
        })
    }

  return (
    <div style={{ position: "relative", marginTop: "6rem" }}>
        <input 
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='border-2 '
        />

        <button onClick={handleCopy}> Copied </button>
        <PopupContent  copied={copied}/>
    </div>
  )
}

export default CopyInput