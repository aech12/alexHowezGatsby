import React, {Component} from "react"
import {projectsDescArr} from './projectsDescArr.js'
import Bootstrap from '../../images/imgsProjects/Bootstrap.png'
import Smartbrain from '../../images/imgsProjects/Smartbrain.png'
import Robofriends from '../../images/imgsProjects/Robofriends.png'
import Chatapp from '../../images/imgsProjects/Chatapp.png'
import Tictactoe from '../../images/imgsProjects/Tictactoe.png'
import Guessnum from '../../images/imgsProjects/Guessnum.png'
import Guessflag from '../../images/imgsProjects/Guessflag.png'
import './style.scss'

const Projects = () => (
  <div className='Projects' id='Projects'>
    <a href='https://aech12.github.io/Bootstrap1/'>
      <img src={Bootstrap} title={projectsDescArr[0].title}/>
    </a>
    <a href='https://aech12.github.io/smart-brain/'>
      <img src={Smartbrain}/>
    </a>
    <a href='https://aech12.github.io/Robofriends-reference/'>
      <img src={Robofriends}/>
    </a>
    <a href='https://aech12.github.io/chatRoom/'>
      <img src={Chatapp}/>
    </a>
    <a href='https://aech12.github.io/tictactoe/'>
      <img src={Tictactoe}/>
    </a>
    <a href='https://aech12.github.io/cardGuessGame/'>
      <img src={Guessnum}/>    
    </a>
    <a href='https://aech12.github.io/flagGuessingGame/'>
      <img src={Guessflag}/>    
    </a>
  </div>
)


export default Projects
