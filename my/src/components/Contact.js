import React from 'react'
import "../CSS/Contact.css"

function Contact() {
  return (
    <div className='Contact'>
      <div className="Name">
        <label>Name</label>
        <input type="Name" class="form-control" placeholder="Ex. john-doe"></input>
      </div>
      <br />
      <div className="Name">
        <label>Email</label>
        <input type="Email" class="form-control" placeholder="johndoe@example.com"></input>
      </div>
      <br />
      <div className="Name">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" placeholder='Please type message here' rows="6"></textarea>
      </div>
      <div className='submit'>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Contact