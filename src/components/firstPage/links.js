import React from "react"
import "./style.css"
import pdf from '../../images/icons8-pdf-48.png'
import linkedin from '../../images/icons8-linkedin-48.png'

const Links = () => (
  <div className='Links'>
    <div className='linksTop'>
      <a href='https://www.github.com/aech12'
      target='_blank' rel='noopener noreferrer'><p>GitHub</p></a>
      <a href='#Projects'><p>Portfolio</p></a>
      <a href='#Contact'><p>Contact</p></a>
    </div>
    <div className='linksBottom'>
      <a href='https://www.linkedin.com/in/aech12/'><img src={`${linkedin}`} alt='linkedin'/></a>
      <a href='https://drive.google.com/open?id=1g27UYtGpbVP0Z9HZNHtdiHHYlP3Gm78h'><img src={`${pdf}`} alt='pdf'/></a>
    </div>
  </div>
)

export default Links