import React, { Component } from 'react'

class Footer extends Component {
  render() {
    if (!this.props.data) return null

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
      <footer>
        <div className='row'>
          <div className='twelve columns'>
            <ul className='social-links'>{networks}</ul>
          </div>
          <div id='go-top'>
            <a className='smoothscroll' title='Back to Top' href='#about'>
              <i className='icon-up-open'></i>
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
