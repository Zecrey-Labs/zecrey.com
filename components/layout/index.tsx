import { vw } from '@/styles/global'
import { ReactNode } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

const Background = dynamic(() => import('./Background'), { ssr: false })
const Header = dynamic(() => import('./Header'), { ssr: false })

const Wrap = styled.div<{ dark: boolean }>`
  min-width: 128rem;
  min-height: 100vh;
  background: ${props => (props.dark ? '#2b2b2b' : '#F2F2F2')};
  /* position: relative; */
  /* z-index: 10; */
  .content {
    padding-top: 11.8rem;
  }
  @media (max-width: 780px) {
    min-width: 100vw;
    overflow-x: hidden;
    .content {
      padding-top: ${vw(50)};
    }
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
