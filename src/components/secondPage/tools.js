import React from "react"
import reactjs from '../../images/react.png'
import nodejs from '../../images/nodejs.png'
import sass from '../../images/sass.png'

const Tools = () => (
  <div className='Tools'>
    <div className='ToolsText'>
      <p>Particularly in love with</p>
      <p className='yellow'> React.js, Sass, Gatsby, Express,</p>
      <p> I also like to work with </p>
      <p className='yellow'>Node.js, Mongodb, Next.js </p>
      <p>and good old Javascript and CSS.
      <br></br>
      I try to keep it simple. Libraries make a project heavier, so they better be worth it.</p>
    </div>
    <div style={{textAlign:'center'}}>
      <img alt='react' src={reactjs} width={`75px`}/>
      <img alt='node.js' src={nodejs} width={`75px`}/>
      <img alt='sass' src={sass} width={`75px`}/>
    </div>
  </div>
)

export default Tools
