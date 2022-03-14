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
  .extensionwallet {
    min-width: 12.7rem;
    height: 2rem;
    border: 0.1rem solid #2ad4d8;
    border-radius: 0.5rem;
    position: absolute;
    left: 6rem;
    top: 4rem;
  }
  .extensionwallet p {
    text-align: center;
    line-height: 2rem;
    font-family: Adobe Gothic Std;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    color: #2ad4d8;
  }
  .privacy {
    position: absolute;
    height: 1.4rem;
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
  .smallcircle {
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    left: 21.4rem;
    top: 27.9rem;
  }
  .smallcircle img {
    width: 100%;
  }
  .oneclick {
    width: 28.4rem;
    height: 6.6rem;
    position: absolute;
    height: 6.6rem;
    left: 4.69%;
    right: 73.12%;
    top: calc(50% - 6.6rem / 2 + 8.95rem);
    font-family: Lexend;
    font-style: normal;
    font-weight: 800;
    font-size: 2.6rem;
    line-height: 3.2rem;
    letter-spacing: 0.0313529rem;
    color: rgba(0, 182, 186, 1);
  }
  .download {
    width: 10.7rem;
    height: 2.6rem;
    position: absolute;
    left: 4.69%;
    right: 86.95%;
    top: 78.39%;
    bottom: 16.5%;
    border: 0.1rem solid #ffffff;
    box-sizing: border-box;
    border-radius: 1.3rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.5rem;
    letter-spacing: 0.0168824rem;
    color: #ffffff;
    text-align: center;
    &:hover {
      background: #ffffff;
      box-sizing: border-box;
      color: #2a2a2a;
    }
  }
  .rightpicture {
    width: 80rem;
    height: 44.2rem;
    position: absolute;
    top: 6.7rem;
    left: 42.8rem;
  }
  .cross {
    width: 100%;
    /* height: 44.2rem; */
  }
`

function WalletDownload() {
  return (
    <>
      <Wrap>
        <div className='outermostlayer'>
          <div className='extensionwallet'>
            <p>Extension Wallet</p>
          </div>
          <span className='privacy'>Privacy Wallet Extension</span>
          <div className='smallcircle'>
            <img src='/walletdownload/smallcircle.png' alt='' />
          </div>
          <div className='oneclick'>Privacy does matter Just one-click.</div>
          <div className='download'>Download</div>
          <div className='rightpicture'>
            <Image
              src='/walletdownload/largeIcon.png'
              className='cross'
              alt='zecrey'
              layout='fill'
            />
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default WalletDownload
