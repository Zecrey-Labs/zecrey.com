import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { Header, Section1, Section2, Background } from '@/components'
import { useStore } from '@/store'

const Style = styled.div`
  div.anchor {
    position: absolute;
    width: 1px;
    height: 1px;
    left: 0;
    &.anchor1 {
      top: 800px;
    }
    &.anchor2 {
      top: 1500px;
    }
  }
`

const Home = observer(function Home() {
  const store = useStore()
  const anchor1 = React.useRef(null)
  const anchor2 = React.useRef(null)
  React.useEffect(() => {
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      let observer1 = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < window.innerHeight) {
          store.setTheme('light')
          console.log('trigger')
        } else {
          console.log('trigger')
          store.setTheme('dark')
        }
      })
      observer1.observe(anchor1.current)

      let observer2 = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < window.innerHeight) {
          store.setTheme('dark')
        } else {
          store.setTheme('light')
        }
      })
      observer2.observe(anchor2.current)
    }
  }, [])

  return (
    <Style>
      <Background />
      <Header />
      <Section1 />
      <Section2 />
      <div ref={anchor1} className='anchor anchor1' />
      <div ref={anchor2} className='anchor anchor2' />
    </Style>
  )
})
export default Home
