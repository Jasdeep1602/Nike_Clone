import React from 'react'
import { Hero } from './components'
import { heroapi } from './data/data.js'

const App = () => {
  return (
    <>
      <main>
        <Hero heroapi={heroapi} />
      </main>
    </>
  )
}

export default App
