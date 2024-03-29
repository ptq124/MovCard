import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import ResultNav from './navui/ResultNav'
import SelectNav from './navui/SelectNav'
import StartNav from './navui/StartNav'

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <Header>
      {pathname === '/' && <StartNav />}
      {pathname === '/select' && <SelectNav />}
      {pathname.split('/')[1] === 'result' && <ResultNav />}
    </Header>
  )
}

const Header = styled.header`
  width: 80%;
  display: flex;
  @media screen and (max-width: 540px) {
    height: 7%;
  }
  margin: 0 auto;
`
