import React, { Component } from 'react' // eslint-disable-line import/no-unresolved
// import PropTypes from 'prop-types'
import './style.css'

class Headroom extends Component {
  static defaultsProps = {
    disableInlineStyles: true
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
      // <div>
      //   <a href='#Intro'><p>Home</p></a>
      //   <a href='#Projects'><p>Portfolio</p></a>
      //   <a href='#Contact'><p>Contact</p></a>
      // </div>
    )
  }
}

export default Headroom
