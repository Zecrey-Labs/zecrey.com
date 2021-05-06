import React from 'react'
import styled from 'styled-components'
const blue = require('@/public/section1/blue.png')
const pink = require('@/public/section1/pink.png')

const Style = styled.div`
  background-color: black;
  z-index: -10;
  width: 100vw;
  position: fixed;
  img::nth-child(1) {
    position: absolute;
    left: -150px;
    top: 0;
  }
  img:nth-child(2) {
    position: absolute;
    top: -150px;
    left: 0;
  }
`

export const Background = () => {
  return (
    <Style>
      <img src={blue} alt='' />
      <img src={pink} alt='' />
    </Style>
  )
}
