import React, { Component } from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineElement from './TimelineElement'


class ShortTimeline extends Component {
  render() {
    const resumeTimeline = this.props.data.map(event => {
      const { what } = event
      return <TimelineElement key={what}>{event}</TimelineElement>
    })

    return (
        <section className='timeline'>
          <Timeline align='alternate'>
            {resumeTimeline}
          </Timeline>
        </section>
    )
  }
}

export default ShortTimeline
