import React from "react"
import './style.scss'

const Contact = () => (
  <div className='Contact' id='Contact'>
    <div className='contactIn'>
      <h4>Contact me</h4>
      <form method="post" action="#" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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

export default Contact
