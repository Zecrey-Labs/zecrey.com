import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import {
  Header,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Background,
  Footer
} from '@/components'
import { useStore } from '@/store'

const Style = styled.div``

const Home = observer(function Home() {
  const store = useStore()

  React.useEffect(() => {
    if (store.anchor1Appear === true && store.anchor2Appear === false) {
      store.setTheme('light')
    } else {
      store.setTheme('dark')
    }
  }, [store.anchor1Appear, store.anchor2Appear])

  return (
    <Style>
      <Background />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </Style>
  )
})
export default Home
