import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
  .Whitelizard{
    width: 6.471rem;
    height: 7.094rem;
    position: absolute;
    top: -3rem;
    left: 114.482rem;
    z-index: -1;
  }
  .Whitelizard img{
    width: 100%;
  }
  .privacy{
    width: 128rem;
    height: 50.9rem;
    background: rgba(56, 56, 56, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    backdrop-filter: blur(2.71828rem);
    border-radius: 1rem;
    margin: 0 auto;
    margin-bottom: 4rem;
    position: relative;
  }
  .Pri{
    width: 54.9rem;
    height: 12.7rem;
    position: absolute;
    top: 10.799rem;
    left: 5.8rem;
  }
  .Pri img{
    width: 100%;
  }
  .text{
    width: 55rem;
    height: 9.5rem;
    position: absolute;
    top: 26.5rem;
    left: 6rem;
  }
  .text p{
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 0.0144706rem;
    color: #FFFFFF;
  }
  .whitepaper{
    width: 9.3rem;
    height: 1.8rem;
    position: absolute;
    top: 37.9rem;
    left: 6rem;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2AD4D8;
  }
  .join{
    width: 12rem;
    height: 1.8rem;
    position: absolute;
    top: 37.9rem;
    left: 19.2rem;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2AD4D8;
  }
  .player{
    width: 55rem;
    height: 30.9rem;
    position: absolute;
    left: 67rem;
    top: 10rem;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
    border: 0.103125rem solid rgba(255, 255, 255, 0.3);
    border-radius: 1rem;
  }
  .meet{
    min-width: 27.6rem;
    height: 1.8rem;
    position: absolute;
    top: 42.1rem;
    left: 80.7rem;
  }
  .meet p{
    font-family: Lexend;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2AD4D8;
  }
`

function Privacy() {
  return (
    <>
      <Wrap>
        {/* <div className='Whitelizard'>
          <img src="/privacy/WhiteLizard.png" alt="" />
        </div> */}
        <div className='privacy'>
        <div className='Whitelizard'>
          <img src="/privacy/WhiteLizard.png" alt="" />
        </div>
         <div className='Pri'>
           <img src="/privacy/privacy.png" alt="" />
         </div>
         <div className='text'>
           <p>Zecrey is an ayer 2 privacy protocol based on zk-rollup, which can bring cross-chain privacy to the multi-public chain ecology, and can solve the two major problems of privacy and isolation in the blockchain today. </p>
           <p>Zecrey privacy cross-chain solution has two core functionalities: privacy cross-chain bridge and privacy cross-chain asset swap.</p>
         </div>
         <span className='whitepaper'>White Paper {">"}</span>
         <span className='join'>Join Community {">"}</span>
         <div className='player'>
           <video
             src="/video/WalletLntroduction.webm" 
             style={{width:'55rem', height: '30.9rem'}}
             controls // control panel
           >
           </video>
         </div>
         <div className='meet'>
           <p>Meet Zecrey:Wallet Introduction(2021)</p>
         </div>
        </div>
      </Wrap>
    </>
  )
}

export default Privacy