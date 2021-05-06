import React from 'react'
import styled from 'styled-components'
const logo1 = require('@/public/logo1.svg')

const InputEmailStyle = styled.div`
  display: block;
  margin-top: 69px;
`

const InputEmail = () => {
  return (
    <InputEmailStyle>
      <input />
    </InputEmailStyle>
  )
}

const Style = styled.div`
  width: 100vw;
  min-height: calc(100vh - 110px);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  div.bee {
    margin-top: 128px;
    padding: 12px 69px 6px 51px;
    background: #2ad4d9 0% 0% no-repeat padding-box;
    border-radius: 5px;
    text-align: left;
    font: normal normal bold 32px/38px Lexend;
    letter-spacing: 0px;
    color: #222222;
  }
  div.banner {
    margin-top: 25px;
    text-align: center;
    font: normal normal bold 100px/120px Lexend;
    letter-spacing: 0px;
    color: #e4e4e4;
    text-shadow: 0px 3px 12px #00000040;
    text-transform: uppercase;
  }
  > img {
    height: 52px;
    margin-top: 141px;
  }
`

export const Section1 = () => {
  return (
    <Style>
      <div className='bee'>New Bee Product</div>
      <div className='banner'>
        Brings privacy
        <br />
        value for assets.
      </div>
      <InputEmail />
      <img src={logo1} alt='logo' />
    </Style>
  )
}
