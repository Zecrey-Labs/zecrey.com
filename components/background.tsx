import React from 'react'
import styled from 'styled-components'
const blue = require('@/public/section1/blue.png')
const pink = require('@/public/section1/pink.png')

const Style = styled.div`
  @keyframes an-bg-1 {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translateY(5px);
    }
    to {
      transform: translate(0);
    }
  }

  background-color: black;
  z-index: -10;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  img {
    position: absolute;
    animation: an-bg-1 3s linear infinite;
  }
  img::nth-child(1) {
    left: -150px;
    top: 0;
  }
  img:nth-child(2) {
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
