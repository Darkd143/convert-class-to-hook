import React, { Component } from 'react'
import { Container } from 'reactstrap'
import FunctionBasedForm from './components/FunctionBasedForm'
// import ClassBasedForm from './components/ClassBasedForm'
import Logo from './assets/alligator-logo2.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={ Logo } alt="alligator.io logo" width="200" />
        <Container>
          <FunctionBasedForm />
        </Container>
      </div>
    )
  }
}

export default App
