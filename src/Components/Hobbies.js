import React, { Component } from 'react'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset'

class Hobbies extends Component {
  render() {
    if (!this.props.data) return null

    const hobbies = this.props.data.map(({
      name,
      description
    }) => {
      return (
        <div key={name}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      )
    })

    return (
      <section id='hobbies'>
          <div className='row hobbies'>
            <div className='three columns header-col'>
              <h1>
                <VideogameAssetIcon sx={{ fontSize: 50 }}/>
              </h1>
            </div>
            <div className='nine columns main-col'>
              <h1>
                <span>Hobbies</span>
              </h1>
              {hobbies}
            </div>
          </div>
      </section>
    )
  }
}

export default Hobbies
