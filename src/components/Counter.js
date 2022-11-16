import React, { useState } from 'react'

function Counter() {
  const [count, setCount]=useState(0);  
  const [amount, setAmount]=useState(1);
  return (
    <div>
        <h2>State(useState Object) - Counter</h2>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+amount)}>+</button>
        <button onClick={()=>setCount(count-amount)}>-</button>       
        <div>Increase: {amount}</div>
        <button onClick={() => setAmount(1)}>+1</button>
        <button onClick={() => setAmount(5)}>+5</button>
        <button onClick={() => setAmount(20)}>+20</button>
        <hr/>
      
    </div>
  )
}

export default Counter