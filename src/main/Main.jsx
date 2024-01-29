import React from 'react'
import { Link } from 'react-router-dom'
import { StyledArrow } from './StyledComponents'

const Main = ({ className }) => {
  const list = (text) => (
    <Link
      to={`/${text}`}
      className='arrow'
    >
      <StyledArrow
        src='logo-yellow.png'
        className='sign'
      />
      {text}
    </Link>
  )
  return (
    <div className={className}>
      <div className='wrapper'>
        <ol>
          {/* <li>{list('home')}</li> */}
          <li>{list('about')}</li>
          <li>{list('projects')}</li>
          <li>{list('contact')}</li>
        </ol>
      </div>
    </div>
  )
}

export default Main
