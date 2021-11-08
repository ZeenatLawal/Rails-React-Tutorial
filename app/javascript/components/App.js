import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import HelloWorld from './HelloWorld'

const store = configureStore();
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={("Home!")} />
            <Route path="/hello" element={<HelloWorld greeting="Friend" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
