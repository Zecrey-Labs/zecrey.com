import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

const Wrap = styled.div`
  .outermostlayer{
    width: 128rem;
    height: 50.9rem;
    background: rgba(56, 56, 56, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    backdrop-filter: blur(2.71828rem);
    border-radius: 1rem;
    overflow: hidden;
  }
  .webapp{
    width: 9.5rem;
    height: 1.7rem;
    position: absolute;
    left: 4.69%;
    right: 87.89%;
    top: 10.41%;
    bottom: 86.25%;
    border: 0.1rem solid #2AD4D8;
    border-radius: 0.5rem;
    font-family: Adobe Gothic Std;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 2.2rem;
    color: #2AD4D8;
    text-align: center;
    line-height: 1.4rem;
  }
  .backgroundbox{
    width: 68.489rem;
    height: 47.379rem;
    position: absolute;
    left: 4.46%;
    right: 42.03%;
    top: 21.32%;
    bottom: -14.4%;
    background: #000000;
    border: 0.070462rem solid #000000;
    box-sizing: border-box;
    box-shadow: inset 0rem 0rem 0.3rem #B5B5B5;
    border-radius: 2.11386rem;
  }
  .backgroundimage{
    width: 65.046rem;
    height: 37.157rem;
    position: absolute;
    left: 1.691rem;
    right: 43.4%;
    top: 2.8rem;
    bottom: -17.96%;
    background: url(Image.png);
  }
  .application{
    position: absolute;
    height: 14px;
    left: 91.3rem;
    right: 17.81%;
    /* top: calc(50% - 14px/2 + 38.5px); */
    top: 28.6rem;
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.144706px;
    color: #F1F1F1;
  }
  .butteryhatch{
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    left: 100.8rem;
    top: 28rem;
  }
  .crypto{
    width: 25.9rem;
    height: 6.6rem;
    position: absolute;
    left: 71.33%;
    right: 8.44%;
    top: calc(50% - 6.6rem/2 + 8.95rem);
    font-family: Lexend;
    font-style: normal;
    font-weight: 800;
    font-size: 2.6rem;
    line-height: 3.2rem;
    letter-spacing: 0.0313529rem;
    color: #2AD4D8;
  }
  .launchapp{
    width: 11.6rem;
    height: 2.6rem;
    position: absolute;
    left: 71.33%;
    right: 19.61%;
    top: 78.39%;
    bottom: 16.5%;
    border: 1px solid #FFFFFF;
    border-radius: 1.3rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.4rem;
    letter-spacing: 0.0168824rem;
    color: #F1F1F1;
    text-align: center;
  }
`

function ZecreyWebApp() {
  return (
    <>
      <Wrap>
         <div className='outermostlayer'>
            <div className='webapp'>
              Zecrey Web App
            </div>
            <div className='backgroundbox'>
              <div className='backgroundimage'>
                <Image
                  src='/Zecreywebapp/backgroundimage.png'
                  className='backgroundimage-img'
                  alt='zecrey'
                  layout='fill'
                />
              </div>
            </div>
            <div className='application'>
              Zecrey Web Application
            </div>
            <div className='butteryhatch'>
              <Image 
                src='/Zecreywebapp/butteryhatch.png'
                className='butteryhatch-img'
                alt='zecrey'
                layout='fill'
              />
            </div>
            <div className='crypto'>
              Crypto Experience Much than more.
            </div>
            <div className='launchapp'>
              Launch App
            </div>
         </div>
      </Wrap> 
    </>
  )
}

export default ZecreyWebApp