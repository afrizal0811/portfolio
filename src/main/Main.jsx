import React from 'react'
import { StyledArrow } from './StyledComponents'
const Main = ({ className }) => {
  return (
    <div className={className}>
      <div className='wrapper'>
        <ol>
          <li>
            <a
              className='arrow'
              href='#as'
            >
              <StyledArrow
                src='logo-yellow.png'
                className='sign'
              />
              Tetris
            </a>
          </li>
          <li>
            <a
              className='arrow'
              href='#as'
            >
              <StyledArrow
                src='logo-yellow.png'
                className='sign'
              />
              Crazy Taxi
            </a>
          </li>
          <li>
            <a
              className='arrow'
              href='#as'
            >
              <StyledArrow
                src='logo-yellow.png'
                className='sign'
              />
              Super Mario
            </a>
          </li>
          <li>
            <a
              className='arrow'
              href='#as'
            >
              <StyledArrow
                src='logo-yellow.png'
                className='sign'
              />
              Mortal Combat
            </a>
          </li>
          <li>
            <a
              className='arrow'
              href='#as'
            >
              <StyledArrow
                src='logo-yellow.png'
                className='sign'
              />
              Street Fighter
            </a>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Main
