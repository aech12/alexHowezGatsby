import React from "react"
import './style.scss'

const Contact = () => (
  <div className='Contact' id='Contact'>
    <div className='contactIn'>
      <h4>Contact me</h4>
      <form className='form'
      method='post' name='contact' 
      data-netlify='true' data-netlify-honeypot='bot-field'>
        <div className='subject'>
          <p>Your name</p>
          <input name='subject'/>
        </div>
        <div className='from'>
          <p>Your email</p>
          <input name='email' placeholder='mail@mail.com'/>
        </div>
        <div className='yourMessage'>
          <p>Your message</p>
          <textarea 
            name='message'
            placeholder={`If you want to work with me or ask about something, feel free to email me`}
          />
        </div>
        <button type='submit'>SEND</button>
      </form>
      <p style={{textAlign: `center`}}>(or email me at aech-12@hotmail.com)</p>
    </div>
  </div>
)

export default Contact
