import React from "react"
import './style.scss'

const Contact = () => (
  <div className='Contact' id='Contact'>
    <div className='contactIn'>
      <h4>Contact me</h4>
      
      <form method="post" action="#" name="contactMe" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
    <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
    </div>
    <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
    </div>
    <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6"></textarea>
    </div>
    <ul className="actions">
        <li><input type="submit" value="Send Message" className="special" /></li>
        <li><input type="reset" value="Clear" /></li>
    </ul>
</form>

      <p style={{textAlign: `center`}}>(or email me at aech-12@hotmail.com)</p>
    </div>
  </div>
)
/* eslint-disable */
export default Contact

{/* <form className='form'
  method='post' name='contactAHGats' 
  data-netlify='true' data-netlify-honeypot='bot-field'
  data-netlify-recaptcha="true">
    <div data-netlify-recaptcha="true"></div>
    <div className='subject'>
      <p>Your name</p>
      <input name='subject' type='text'/>
    </div>
    <div className='from'>
      <p>Your email</p>
      <input name='email' type='email'
      placeholder='mail@mail.com'/>
    </div>
    <div className='yourMessage'>
      <p>Your message</p>
      <textarea 
        name='message' type='text'
        placeholder={`Want to work with me or ask about something?`}
      />
    </div>
    <button type='submit'>SEND</button>
  </form> */}

{/* <form method="post" action="#" name="contactMe" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
    <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
    </div>
    <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
    </div>
    <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6"></textarea>
    </div>
    <ul className="actions">
        <li><input type="submit" value="Send Message" className="special" /></li>
        <li><input type="reset" value="Clear" /></li>
    </ul>
</form> */}
