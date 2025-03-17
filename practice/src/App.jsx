import React from 'react'
import ProfileCard from './components/ProfileCard'

const App = () => {
  return (
    <div className='app'>
    <h1>Profile Cards</h1>
    <ProfileCard name= "Vikas Thakur" age= {24} city= "Noida" />
    <ProfileCard name= "AITAM" age= {26} city= "Hyderabad" />

    </div>
  )
}

export default App