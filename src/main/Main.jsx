import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Main = () => {
  const list = ['about', 'projects', 'contact']

  const linkComponent = (text) => (
    <Link
      to={`/${text}`}
      className='arrow'
    >
      <img
        height='30px'
        src='logo-yellow.png'
        className='sign'
        alt='cursor'
      />
      {text}
    </Link>
  )

  return (
    <div className='wrapper'>
      <div className='title'>
        <div>
          <h2>Afrizal</h2>
          <h1>Maulana</h1>
        </div>
        <p>Web Developer</p>
      </div>
      <ol className='menu-list'>
        {list.map((data, index) => (
          <li key={index}>{linkComponent(data)}</li>
        ))}
      </ol>
    </div>
  )
}

export default Main
