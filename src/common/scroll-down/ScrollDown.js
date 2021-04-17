import React, { Component } from 'react'

const style = {
  position: 'absolute',
  bottom: '40px',
  left: '50%',
}

class ScrollDown extends Component {
  constructor() {
    super()

    this.delayInMs = '10'
    this.scrollStepInPx = 20

    this.state = {
      intervalId: 0,
      showScoller: true,
    }

    this.scrollStep = this.scrollStep.bind(this)
  }

  scrollStep() {
    const targetPosition = document.getElementById("home_content").offsetTop;
    // const targetPosition = document.documentElement.clientHeight;
    if (window.pageYOffset >= targetPosition ) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset + this.scrollStepInPx)
  }

  scrollToTop(e) {
    e.preventDefault()

    let intervalId = setInterval(this.scrollStep, this.delayInMs)
    this.setState({ intervalId: intervalId })
  }

  render() {
    if (this.state.showScoller) {
      return (<a href="#" title='Back to top'
                 style={style}
                 onClick={(e) => { this.scrollToTop(e) }}>
                 <img src="/static/img/scroll_down.png"/>
      </a>)
    }
    return null
  }
}

export default ScrollDown
