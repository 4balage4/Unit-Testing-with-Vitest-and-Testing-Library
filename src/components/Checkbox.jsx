import {useState} from 'react'

// should have if checked, not checked
// and if checked setTimeOut and shows a message with javascript
// have if unchecked, then hides the message
// this would be a nice awaitFor test.


// user interactions for terms and conditions for example


import React from 'react'

function Checkbox() {

  const [checkbox, setCheckbox] = useState(false)

  return (

    <div>
      <h2>Terms And Conditions</h2>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolorum ab iusto vel fugiat tenetur esse, repellat quibusdam sapiente debitis nam magni nobis delectus ea assumenda, velit maxime sit. Blanditiis?</p>
      <label htmlFor="agree">
        By ticking this box I agree
        <input type="checkbox" id='agree' checked={checkbox} onChange={() => {setCheckbox(prev => !prev)}}/>

      </label>
      <button disabled={!checkbox} style={{marginLeft: '25px'}}>NEXT</button>
    </div>
  )
}

export default Checkbox
