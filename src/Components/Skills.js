import React, { Component } from 'react'
import LightbulbIcon from '@mui/icons-material/Lightbulb'

class Skills extends Component {

  render() {
    if (!this.props.data) return null
    const {
      flavor,
      soft,
      hard
    } = this.props.data

    return (
      <section id='skills'>
          <div className='row skill'>
            <div className='three columns header-col'>
              <h1>
                <LightbulbIcon sx={{ fontSize: 50 }}/>
              </h1>
            </div>

            <div className='nine columns main-col'>
              <h1>
                <span>Skills</span>
              </h1>
              <div className='row item'>
                <div className='twelve columns'>
                  <p>{flavor}</p>
                  <h1>
                    <span>Hard</span>
                  </h1>
                  <ul>{hard.map(txt => <li key={txt}>{txt}</li>)}</ul>
                  <h1>
                    <span>{'Soft & More'}</span>
                  </h1>
                  <ul>{soft.map(txt => <li key={txt}>{txt}</li>)}</ul>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }
}

export default Skills
