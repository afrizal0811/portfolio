import styled from 'styled-components'
import Menu from './Menu.jsx'

export const StyledMenu = styled(Menu)`
  .hamburger-container {
    float: right;
    margin: 1rem;
    padding-top: 2rem;
    z-index: 1;
    background-color: blue;
  }

  .hamburger-wrapper {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-out;
  }

  .hamburger-wrapper.open {
    transform: rotate(-45deg);
  }

  .line-menu {
    background-color: #000;
    border-radius: 5px;
    width: 100%;
    height: 6px;
  }

  .line-menu.half {
    width: 50%;
  }

  .line-menu.start {
    transition: transform 200ms linear;
    transform-origin: right;
  }

  .open .line-menu.start {
    transform: rotate(-90deg) translateX(3px);
  }

  .line-menu.end {
    align-self: flex-end;
    transition: transform 200ms linear;
    transform-origin: left;
  }

  .open .line-menu.end {
    transform: rotate(-90deg) translateX(-3px);
  }

  //========list======

  .menu-wrapper {
    float: right;
    margin: 1rem;
    padding-top: 2rem;
    padding-right: 2rem;
    z-index: 1;
    background-color: tomato;
    width: 20%;
    height: 400px;
    text-transform: uppercase;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    display: none;
  }

  .list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .list:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .list:hover .arrow {
    display: block;
    position: absolute;
    left: 71%;
  }

  a {
    text-decoration: none;
    color: #fff090;
    padding: 20px 0;
    font-size: 24px;
    font-weight: 700;
    padding: 1rem;
  }

  li {
    list-style-type: none;
  }
`
