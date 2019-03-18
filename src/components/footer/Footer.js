import React from "react"
import './style.css'
import git from '../../images/icons8-github-48.png'
import linkedin from '../../images/icons8-linkedin-48.png'
import pdf from '../../images/icons8-pdf-48.png'

const Third = () => (
  <div className='Footer'>
    <div className='icons'>
      <a href='https://github.com/aech12/'><img alt='github' src={`${git}`}/></a>
      <a href='https://linkedin.com/in/aech12/'><img alt='linkedin' src={`${linkedin}`}/></a>
      <a href='https://drive.google.com/open?id=1g27UYtGpbVP0Z9HZNHtdiHHYlP3Gm78h'><img alt='pdf' src={`${pdf}`}/></a>
    </div>
    <div className='iconsMsg'>
    Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer"s>CC 3.0 BY</a></div>

  </div>
)

export default Third
