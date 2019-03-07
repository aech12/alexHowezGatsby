import React from "react"
import './style.scss'

const About = () => (
  <div className='About'>
    <h4>About me</h4>
    <p className='firstText'>Hey! My name is Alejandro. I'm a Computer Science student at the University of Buenos Aires, an institution I am priviledged to attend to!</p>
    <p className='secondText'>Why programming?</p>
    {/* <p style={{marginTop: `10px`, fontWeight:`500`}}>It all started with CS50 (Harvard course). Later on I took it further, in 2017 I was learning Java and attending the Univ. of Buenos Aires already and in 2018 I was learning Javascript to become a Full Stack web developer.</p> */}
    <p className='thirdText'>In 2015 I enrolled in the CS50 Harvard course and started coding in C. Later on, in 2017, I was learning Java. In 2018 I was learning Javascript with the goal of becoming a Full Stack developer.</p>
  </div>
)

export default About
