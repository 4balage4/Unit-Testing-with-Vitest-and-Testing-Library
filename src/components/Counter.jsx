import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => setCount((prev)=> prev +1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <p>{count}</p>
    </>
  )
}
