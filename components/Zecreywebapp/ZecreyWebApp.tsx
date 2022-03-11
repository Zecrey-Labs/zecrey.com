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
  .webapp {
    min-width: 12rem;
    height: 2rem;
    position: absolute;
    left: 6rem;
    top: 5.3rem;
    border: 0.1rem solid #2ad4d8;
    border-radius: 0.5rem;
    font-family: Adobe Gothic Std;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 2rem;
    color: #2ad4d8;
    text-align: center;
  }
  .backgroundbox {
    min-width: 81.489rem;
    height: 47.379rem;
    position: absolute;
    top: 12.853rem;
    left: -2.285rem;
  }
  .backgroundimage-img {
    width: 68.489rem;
    height: 47.379rem;
  }
  .application {
    position: absolute;
    height: 1.4rem;
    left: 91.3rem;
    top: 28.6rem;
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: 0.0144706rem;
    color: #f1f1f1;
  }
  .butteryhatch {
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    left: 105.8rem;
    top: 28.3rem;
  }
  .butteryhatch-img {
    width: 100%;
  }
  .crypto {
    width: 25.9rem;
    height: 6.6rem;
    position: absolute;
    left: 71.33%;
    right: 8.44%;
    top: calc(50% - 6.6rem / 2 + 8.95rem);
    font-family: Lexend;
    font-style: normal;
    font-weight: 800;
    font-size: 2.6rem;
    line-height: 3.2rem;
    letter-spacing: 0.0313529rem;
    color: #2ad4d8;
  }
  .launchapp {
    width: 11.6rem;
    height: 2.6rem;
    position: absolute;
    left: 71.33%;
    right: 19.61%;
    top: 78.39%;
    bottom: 16.5%;
    border: 1px solid #ffffff;
    border-radius: 1.3rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.4rem;
    letter-spacing: 0.0168824rem;
    color: #f1f1f1;
    text-align: center;
  }
`

function ZecreyWebApp() {
  return (
    <>
      <Wrap>
        <div className='outermostlayer'>
          <div className='webapp'>Zecrey Web App</div>
          <div className='backgroundbox'>
            <Image
              src='/Zecreywebapp/WebApp.png'
              className='backgroundimage-img'
              alt='zecrey'
              layout='fill'
            />
          </div>
          <div className='application'>Zecrey Web Application</div>
          <div className='butteryhatch'>
            <Image
              src='/Zecreywebapp/butteryhatch.png'
              className='butteryhatch-img'
              alt='zecrey'
              layout='fill'
            />
          </div>
          <div className='crypto'>Crypto Experience Much than more.</div>
          <div className='launchapp'>Launch App</div>
        </div>
      </Wrap>
    </>
  )
}

export default ZecreyWebApp
