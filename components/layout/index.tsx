import { ReactNode } from 'react'
import styled from 'styled-components'
import Background from './Background'
import Header from './Header'

const Wrap = styled.div<{ dark: boolean }>`
  min-width: 144rem;
  min-height: 100vh;
  background: ${props => (props.dark ? '#2b2b2b' : '#F2F2F2')};
  z-index: 10;
  .content {
    padding: 4rem 0;
  }
`

const Layout = (props: { children: ReactNode | undefined }) => {
  return (
    <Wrap dark>
      <Header />
      <Background />
      <div className='content'>{props.children}</div>
    </Wrap>
  )
}

export default Layout
