import { CaretRightFilled } from '@ant-design/icons'
import React, { useEffect } from 'react'
const Menu = ({ className }) => {
  useEffect(() => {
    let hamburgerMenu = document.querySelector('.hamburger-wrapper')
    const handleClick = () => {
      hamburgerMenu.classList.toggle('open')
    }

    hamburgerMenu.addEventListener('click', handleClick)

    return () => {
      hamburgerMenu.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className={className}>
      <div className='hamburger-container'>
        <div class='hamburger-wrapper'>
          <div class='line-menu half start'></div>
          <div class='line-menu'></div>
          <div class='line-menu half end'></div>
        </div>
      </div>
      <div className='menu-wrapper'>
        <div className='menu-list'>
          <ol>
            <li>
              <a
                href='#link'
                className='list'
              >
                <CaretRightFilled className='arrow' />
                Home
              </a>
            </li>
            <li>
              <a
                href='#link'
                className='list'
              >
                <CaretRightFilled className='arrow' />
                Work
              </a>
            </li>
            <li>
              <a
                href='#link'
                className='list'
              >
                <CaretRightFilled className='arrow' />
                Links
              </a>
            </li>
            <li>
              <a
                href='#link'
                className='list'
              >
                <CaretRightFilled className='arrow' />
                Contact
              </a>
            </li>
            <li>
              <a
                href='#link'
                className='list'
              >
                <CaretRightFilled className='arrow' />
                About
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Menu
