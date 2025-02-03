import React from 'react'

const Button = () => {

    const handleClick = () => console.log(Math.round(Math.random() * 10));


    return <button onClick={handleClick}> Click Me to see random number </button>;
}

const Copy = () => {

    const copyHandler = () => console.log("Stop stealing my content!");

    return <p onCopy={copyHandler}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio animi amet, minus temporibus nesciunt eligendi quas aperiam autem ipsum dolore velit earum accusamus dolores fugit, esse vero corrupti hic sunt?</p>
}

const Move =  () => {

    function moveHandler(){
        console.log("Move move event fired!");
        alert("Move move event fired!");
    }

    return (
        <p onMouseMove={moveHandler}> 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo minus, quo nesciunt sequi minima explicabo voluptas maxime esse animi? Perferendis harum ducimus ab cupiditate delectus hic mollitia illum reiciendis recusandae!</p>
    );
}

const EventHandler = () => {

  return (
    <div>
        <Button />
        <Copy />
        <Move />
    </div>
  )
}

export default EventHandler