import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Wrap = styled.div`
  .outermostlayer {
    width: 128rem;
    height: 50.9rem;
    background: rgba(56, 56, 56, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    backdrop-filter: blur(2.71828rem);
    border-radius: 1rem;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .mobile {
    min-width: 11rem;
    height: 2rem;
    position: absolute;
    left: 6rem;
    top: 5.3rem;
    border: 0.1rem solid #2ad4d8;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 2rem;
    font-family: Adobe Gothic Std;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    color: #2ad4d8;
  }
  .zecreymobile {
    height: 1.4rem;
    position: absolute;
    left: 6rem;
    top: 28.6rem;
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: 0.0144706rem;
    color: #f1f1f1;
  }
  .mobilephone {
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    left: 14.8rem;
    top: 28.3rem;
  }
  .mobilephone-img {
    width: 100%;
  }
  .anywhere {
    width: 26rem;
    height: 6.6rem;
    position: absolute;
    left: 4.69%;
    right: 75%;
    /* top: calc(50% - 66px/2 + 89.5px); */
    top: 31.1rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 800;
    font-size: 2.6rem;
    line-height: 3.2rem;
    letter-spacing: 0.0313529rem;
    color: #2ad4d8;
  }
  .comingsoon {
    width: 12.7rem;
    height: 2.6rem;
    position: absolute;
    left: 4.69%;
    right: 85.39%;
    top: 78.39%;
    bottom: 16.5%;
    border: 0.1rem solid #ffffff;
    border-radius: 1.3rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.6rem;
    letter-spacing: 0.0168824rem;
    color: #f1f1f1;
    text-align: center;
  }
  .iphone {
    width: 55.463rem;
    height: 42.231rem;
    position: absolute;
    left: 59.2rem;
    top: 12.8rem;
    z-index: 10;
  }
  .iphone img {
    width: 100%;
  }
`

function ZecreyMobile() {
  return (
    <>
      <Wrap>
        <div className='outermostlayer'>
          <div className='mobile'>Zecrey Mobile</div>
          <div className='zecreymobile'>Zecrey Mobile</div>
          <div className='mobilephone'>
            <Image
              src='/zecreymobile/mobilephone.png'
              className='mobilephone-img'
              alt='zecrey'
              layout='fill'
            />
          </div>
          <div className='anywhere'>Anywhere,anytime in your pocket.</div>
          <div className='comingsoon'>Coming Soon</div>
          <div className='iphone'>
            <img src='/zecreymobile/cellphone .png' alt='' />
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default ZecreyMobile
