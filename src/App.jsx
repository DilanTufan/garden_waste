import { useState } from 'react'
import viteLogo from '/vite.svg'
import { locations } from './data'
import './App.css'
import './css/Card.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className='header'>
        <h2 className='app-title '>Choose Your Skip Size</h2>
        <p className='text-gray '>Select the skip size that best suits your needs</p>
      </div>

      <div className='main'>
        {
          locations?.map((location) => (
            <Card key={location.id} location={location} />
          ))
        }
      </div>
    </>
  )
}

export default App
