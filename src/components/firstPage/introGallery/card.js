import React from "react"
import '../style.css'

const Card = ({img, info}) => (
  <div className='Card'>
    <img src={img}/>
    <p>{info}</p>
  </div>
)

export default Card
