import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const About = () => {
  const list = ['home', 'about', 'projects', 'contact']

  const linkComponent = (text) => (
    <Link
      to={text === 'home' ? '/' : `/${text}`}
      className='arrow'
    >
      <img
        height='65px'
        src='logo-yellow.png'
        className='sign'
        alt='cursor'
      />
      {text}
    </Link>
  )

  return (
    <div>
      <div className='wrapper'>
        <h1>About</h1>
        <ol>
          {list.map((data, index) => (
            <li key={index}>{linkComponent(data)}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default About
