import React, { Component } from 'react'
import $ from 'jquery'
import './App.css'
import Header from './Components/Header'
import Hobbies from './Components/Hobbies'
import Footer from './Components/Footer'
import About from './Components/About'
import Resume from './Components/Resume'
import Skills from './Components/Skills'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resume: {}
    }
  }

  getJsonData() {
    $.ajax({
      url: './resume.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ resume: data })
      }.bind(this),
      error: (xhr, status, err) => {
        alert(err)
      }
    })
  }

  componentDidMount() {
    this.getJsonData()
  }

  render() {
    return (
      <div className='App'>
        <Header data={this.state.resume.header} />
        <About data={this.state.resume.header} />
        <Resume data={this.state.resume.table} />
        <Skills data={this.state.resume.skills} />
        <Hobbies data={this.state.resume.hobbies} />
        <Footer data={this.state.resume.header} />
      </div>
    )
  }
}

export default App
