import React, { Component } from 'react'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'

class Resume extends Component {
  render() {
    if (!this.props.data) return null
    const work = this.props.data.work.map(({
        company,
        title,
        years,
        description
      }) => {
      return (
        <div key={company}>
          <h3>{company}</h3>
          <p className='info'>
            {title}
            <span>&bull;</span> <em className='date'>{years}</em>
          </p>
          <p>{description}</p>
        </div>
      )
    })

    const education = this.props.data.education.past.map(({
      school,
      degree,
      graduated,
      description
    }) => {
      return (
        <div key={school}>
          <h3>{school}</h3>
          <p className='info'>
            {degree} <span>&bull;</span>
            <em className='date'>{graduated}</em>
          </p>
          <p>{description}</p>
        </div>
      )
    })

    const current_education = this.props.data.education.current.map(({
      name,
      progress,
      date
    }) => {
      const progressBarStyle = {
        width: `${progress}%`
      }
      return (
        <div key={name}>
        <h3>{name}</h3>
        <div className='progress'>
          <span className='info'>
            {progress}% <span>&bull;</span>
            <em className='date'>{date}</em>
            <div className='progress-bar'>
                <span className='progress-bar-fill' style={progressBarStyle} />
            </div>
          </span>
        </div>
      </div>
      );
    })

    return (
      <section id='resume'>
          <div className='row work'>
            <div className='three columns header-col'>
              <h1>
               <WorkIcon sx={{ fontSize: 50 }}/>
              </h1>
            </div>
            <div className='nine columns main-col'>
              <h1>
                <span>Recent Work</span>
              </h1>
              {work}
            </div>
          </div>

          <div className='row education'>
            <div className='three columns header-col'>
              <h1>
                <SchoolIcon sx={{ fontSize: 50 }}/>
              </h1>
            </div>
            <div className='nine columns main-col'>
              <div className='row item'>
                <div className='twelve columns'>
                  <h1>
                    <span>Education</span>
                  </h1>
                  {education}
                  <h1>
                    <span>Certificates</span>
                  </h1>
                  {current_education}
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default Resume
