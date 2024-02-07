import React from 'react'
import MenuList from '../components/menu-list/MenuList'
import './style.css'
const About = () => {
  return (
    <div>
      <div className='wrapper'>
        <h1>About</h1>
        <ol>
          <MenuList />
        </ol>
      </div>
    </div>
  )
}

export default About
