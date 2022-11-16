import React,{useState} from 'react'

function Color() {
    const[colors, setColor]=useState(["Red","Blue","Yellow"]);
    const handleClick=()=>{setColor([...colors,"Green", Math.random()])};
  return (
    <div>
        <h2>State(Array)-Color and Random Number(0-1)</h2>
        {colors.map((color,i)=>(
            <div key={i}>{color}</div>
        ))}
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Color