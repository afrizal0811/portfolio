import { default as AntdLayout } from 'antd/lib/layout'
import styled from 'styled-components'

const AntdHeader = AntdLayout.Header
export const StyledHeader = styled(AntdHeader)`
  &&& {
    background: #00000000;
    height: unset;
    line-height: unset;
    padding: 0px 100px;
  }
`

export const StyledLogo = styled.img`
  float: left;
  height: 50px;
  padding-top: 2rem;
  
  @media screen and (min-width: 768px) {
    height: 70px;
    margin: 1rem;
  }
`
