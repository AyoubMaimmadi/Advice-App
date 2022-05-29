import React from 'react'
import axios from 'axios'

import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [advice, setAdvice] = useState('')

  const fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip

        setAdvice(advice)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <h4 style={{ color: 'gray' }}>
          Slow API you might have to click a couple of times :(
        </h4>
        <button type="sbmit" className="button" onClick={() => fetchAdvice()}>
          <span>ADVICE ME!</span>
        </button>
      </div>
    </div>
  )
}

export default App
