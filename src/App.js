import React from 'react'
import RouteComp from './handson7/RouteComp'
import './App.css'
import { Provider } from 'react-redux'
import Store from './handson7/Store'

const App = () => {
  return (
    <div>
      <Provider store={Store}>
      <RouteComp/>
      </Provider>
    </div>
  )
}

export default App