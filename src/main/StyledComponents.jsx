import styled from 'styled-components'
import Main from './Main.jsx'

export const StyledMain = styled(Main)`
  .wrapper,{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Press Start 2P';
    font-size: 40px;
    font-weight: 700;
    line-height: 2;
    height: 100vh;
    background-color: #221;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: #fff090;
  }

  li {
    color: #4faf44;
  }

  .arrow .sign {
    display: none;
  }

  .arrow {
    position: relative;
    display: block;
    color: #f6eb14;
  }

  .arrow:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .arrow:hover .sign {
    display: block;
    position: absolute;
    top: 0.2em;
    left: -2em;
  }
  li {
    list-style-type: none;
  }
`
export const StyledArrow = styled.img`
  height: 65px;
`
