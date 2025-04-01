import React, {useState} from 'react'

function Form() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => {
      return {...prev,
        [name]: value
      }
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('submitted: ',form)
    alert(`Form submitted by ${form.name}`)

    setForm({
      name: '',
      email: '',
      company: ''
    })
  }

 return (
    <>
      <h2>Form</h2>
      <form action="" aria-label="contact-form" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" placeholder='name' value={form.name} onChange={handleChange}  />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" placeholder='email' value={form.email} onChange={handleChange} />
        </label>
        <label htmlFor="company">
          Company:
          <input type="text" id="company" name="company" placeholder='company' value={form.company} onChange={handleChange} />
        </label>
        <button onClick={onSubmit} type="submit" style={{width: "80px", padding: "10px 15px", marginTop: "15px" }}>Submit</button>
      </form>
    </>


  )
}

export default Form
