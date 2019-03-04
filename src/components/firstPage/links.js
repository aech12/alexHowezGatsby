import React from "react"
import "./style.css"
import pdf from '../../images/icons8-pdf-48.png'
import linkedin from '../../images/icons8-linkedin-48.png'

const Links = () => (
  <div className='Links'>
    <div className='linksTop'>
      <a href='https://www.github.com/aech12'
      target='_blank'><p>GitHub</p></a>
      <a href='#'><p>Portfolio</p></a>
      <a href='mailto:aech-12@hotmail.com' 
      target='_blank'><p>Contact</p></a>
    </div>
    <div className='linksBottom'>
      <a href='https://www.linkedin.com/in/aech12/'><img src={`${linkedin}`}/></a>
      <a href='linkedin.com'><img src={`${pdf}`} /></a>
    </div>
  </div>
)

export default Links