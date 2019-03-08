import React from "react"
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
      <img alt='bootstrap' src={Bootstrap}/>
      <div className='p-over'><p className='p-in'>{projectsDescArr[0].title}</p></div>
    </a>
    <a href='https://aech12.github.io/smart-brain/'>
      <img alt='smartbrain' src={Smartbrain}/>
      <div className='p-over'><p className='p-in'>{projectsDescArr[1].title}</p></div>
    </a>
    <a href='https://aech12.github.io/Robofriends-reference/'>
      <img alt='robofriends' src={Robofriends}/>
      <div className='p-over'><p className='p-in'>{projectsDescArr[2].title}</p></div>
    </a>
    <a href='https://aech12.github.io/chatRoom/'>
      <img alt='chatapp' src={Chatapp}/>
      <div className='p-over'><p className='p-in'>{projectsDescArr[3].title}</p></div>
    </a>
    <a href='https://aech12.github.io/tictactoe/'>
      <img alt='tictactoe' src={Tictactoe}/>
      <div className='p-over'><p className='p-in'>{projectsDescArr[4].title}</p></div>
    </a>
    <a href='https://aech12.github.io/cardGuessGame/'>
      <img alt='guessnum' src={Guessnum}/>
      <div className='p-over'><p className='p-in'>{projectsDescArr[5].title}</p></div>
    </a>
    <a href='https://aech12.github.io/flagGuessingGame/'>
      <img alt='guessflag' src={Guessflag}/>
      <div className='p-over'><p className='p-in'>{projectsDescArr[6].title}</p></div>
    </a>
  </div>
)


export default Projects
