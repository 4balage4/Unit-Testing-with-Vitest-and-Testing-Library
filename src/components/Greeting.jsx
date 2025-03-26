import React from 'react'

function Greeting({ name}) {
  return (
    <h1>Welcome
      <span style={{backgroundColor: "orange", padding: "5px 10px"}}>
      {name || "Guest"}
      </span>
      to check out the Vitest and Testing Library project
      </h1>
  )
}

export default Greeting
