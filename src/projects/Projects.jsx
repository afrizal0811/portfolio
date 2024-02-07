import React from 'react'
import MenuList from '../components/menu-list/MenuList'
import './style.css'
const Projects = () => {
  return (
    <div>
      <div className='wrapper'>
        <h1 style={{ zIndex: '999' }}>Projects</h1>
        <ol>
          <MenuList />
        </ol>
      </div>
    </div>
  )
}

export default Projects
