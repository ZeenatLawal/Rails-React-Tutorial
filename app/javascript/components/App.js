import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HelloWorld from './HelloWorld'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" render={() => ("Home!")} />
          <Route path="/hello" render={() => <HelloWorld greeting="Friend" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
