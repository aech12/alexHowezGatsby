import React, {Component} from "react"
import "./style.css"
import Card from './introGallery/card.js'
import {CardInfo} from './introGallery/cardInfo.js'

const IntroGallery = () => {
  return (
    <div className='IntroGallery'>
      <div className='Card'>
        <img src={CardInfo[0].img}/>
        <p>{CardInfo[0].info}</p>
      </div>
      <div className='Card'>
        <img src={CardInfo[1].img}/>
        <p>{CardInfo[1].info}</p>
      </div>
      <div className='Card'>
        <img src={CardInfo[2].img}/>
        <p>{CardInfo[2].info}</p>
      </div>
      {/* <Card img={CardInfo[0].img} info={CardInfo[0].info}/>
      <Card img={CardInfo[1].img} info={CardInfo[1].info}/>
      <Card img={CardInfo[2].img} info={CardInfo[2].info}/>
      <Card img={CardInfo[3].img} info={CardInfo[3].info}/> */}
    </div>
  )
}

export default IntroGallery