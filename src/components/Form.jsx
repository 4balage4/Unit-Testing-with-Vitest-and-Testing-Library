import React from 'react'

function Form() {

 return (
    <>
      <h2>Form</h2>
      <form action="" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" placeholder='name' />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" placeholder='email' />
        </label>
        <label htmlFor="company">
          Company:
          <input type="text" id="company" name="company" placeholder='company' />
        </label>
        <button type="submit" style={{width: "80px", padding: "10px 15px", marginTop: "15px" }}>Submit</button>
      </form>
    </>


  )
}

export default Form
