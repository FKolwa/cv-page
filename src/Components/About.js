import React, { Component } from 'react'
import ShortTimeline from './ShortTimeline'

class About extends Component {
  render() {
    if (!this.props.data) return null

    const {
      name,
      image,
      bio,
      short
     } = this.props.data

    const networks = this.props.data.social.map(({
      name,
      url,
      className
    }) => {
      return (
        <li key={name}>
          <a href={url}>
            <i className={className}></i>
          </a>
        </li>
      )
    })

    return (
      <section id='about'>
          <div className='row'>
            <div className='three columns header-col'>
              <img
                className='profile-pic'
                src={'images/' + image}
                alt={name}
              />
            </div>
            <div className='six columns main-col'>
              <h3>That's me</h3>
              <p>{bio}</p>
              <p className='address'>
                Best, {name}
              </p>
              <h3>Let's get in Touch</h3>
              <h3 className='social-links'>{networks}</h3>
            </div>
            <div className='three columns main-col'>
              <h3>CV in a nutshell</h3>
              <ShortTimeline data={short}/>
            </div>
          </div>
      </section>
    )
  }
}

export default About
