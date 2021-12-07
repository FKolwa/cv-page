import React, { Component } from 'react'
import TextTransition, { presets } from "react-text-transition";

class Header extends Component {
  state = {
    index: 0,
    intervalId: {},
  }

  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.setState(prevState => {
          return {
            index: prevState.index + 1,
          }
        })
      }, 1000)
    })
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }

  render() {
    if (!this.props.data) return null
    const {
      name,
      description,
      descriptions,
    } = this.props.data

    return (
      <header id='home'>
            <nav id='nav-wrap' className="opaque">
              <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
              {'Show navigation'}
              </a>
              <a className='mobile-btn' href='#home' title='Hide navigation'>
              {'Hide navigation'}
              </a>

              <ul id='nav' className='nav'>
                <li className='current'>
                  <a className='smoothscroll' href='#home'>
                    {'Home'}
                  </a>
                </li>

                <li>
                  <a className='smoothscroll' href='#about'>
                    {'About'}
                  </a>
                </li>

                <li>
                  <a className='smoothscroll' href='#resume'>
                    {'Resume'}
                  </a>
                </li>

                <li>
                  <a className='smoothscroll' href='#skills'>
                    {'Skills'}
                  </a>
                </li>

                <li>
                  <a className='smoothscroll' href='#hobbies'>
                    {'Interests & Hobbies'}
                  </a>
                </li>
              </ul>
            </nav>

            <div className='row banner'>
              <div className='banner-text'>
                <h1 className='responsive-headline'>Hi, I'm {name}!</h1>
                <hr />
                <h3>{description}<br></br><TextTransition
                    inline={true}
                    text={ descriptions[this.state.index % descriptions.length] }
                    springConfig={ presets.wobbly }
                    />
                </h3>

              </div>
            </div>
        </header>
    )
  }
}

export default Header
