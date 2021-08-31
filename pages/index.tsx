/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import {
  Header,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section7,
  Background,
  Footer
} from '@/components'
import { Section0 } from '@/components/section0'
import { Section6 } from '@/components/Section6'

const Style = styled.div``

const Home = function Home() {
  return (
    <Style>
      <Background />
      <Header />
      <Section1 />
      <Section0 />
      <Section2 />
      <Section3 />
      <Section6 />
      <Section4 />
      <Section5 />
      <Section7 />
      <Footer />
    </Style>
  )
}
export default Home
