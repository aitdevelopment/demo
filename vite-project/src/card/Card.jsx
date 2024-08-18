import React, { useState } from 'react'
import Heading from './Heading';

const Card = ({n,color, h, w, title}) => {
    const [newTitle, setNewTitle] = useState(false);
    const handleClick=()=>{
        setNewTitle(true);
    }
    
  return (
    <div className='cardContainer' style={{background:color, height:`${h}px`, width:`${w}px`}}>
        <span>Name of This Owner</span>
        {
           newTitle ? <Heading title={title}/> : <h1>this is static Title</h1>
        }
        
        <cite> Node js Expart</cite>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit debitis possimus numquam esse vel illum!</p>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Card;