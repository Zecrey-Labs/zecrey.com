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
  .mobile{
    width: 8.3rem;
    height: 1.7rem;
    position: absolute;
    left: 4.69%;
    right: 88.83%;
    top: 10.41%;
    bottom: 86.25%;
    border: 0.1rem solid #2AD4D8;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 1.5rem;
    font-family: Adobe Gothic Std;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    color: #2AD4D8;
  }
  .zecreymobile{
    position: absolute;
    height: 14px;
    left: 4.69%;
    right: 88.91%;
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
  .mobilephone{
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    left: 11.8rem;
    top: 28rem;
  }
  .anywhere{
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
    color: #2AD4D8;
  }
  .comingsoon{
    width: 12.7rem;
    height: 2.6rem;
    position: absolute;
    left: 4.69%;
    right: 85.39%;
    top: 78.39%;
    bottom: 16.5%; 
    border: 0.1rem solid #FFFFFF;
    border-radius: 1.3rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.6rem;
    letter-spacing: 0.0168824rem;
    color: #F1F1F1;
    text-align: center;
  }
  .iphone{
    width: 49.063rem;
    height: 42.231rem;
    position: absolute;
    left: 78.769rem;
    top: 8.669rem;
    right: 0.46%;
    bottom: 0.23%;
    z-index: 10;
    /* background: rgba(0, 0, 0, 0.0001);
    box-shadow: inset 0px 0px 3px 1px rgba(255, 255, 255, 0.25);
    border-radius: 6.6rem; */
  }
  .boxframe{
    width: 41.2rem;
    height: 32.8rem;
    position: absolute;
    left: 53.36%;
    right: 14.45%;
    top: 44.2%;
    bottom: -8.64%;
    border: 0.1rem solid rgba(255, 255, 255, 0.3);
    /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.0001) 100%); */
    border-radius: 1.5rem;
  }
  .boxframe-two{
    width: 41.2rem;
    height: 32.8rem;
    position: absolute;
    left: 46.25%;
    right: 21.56%;
    top: 63.46%;
    bottom: -27.9%;
    border: 0.1rem solid rgba(255, 255, 255, 0.3);
    /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.0001) 100%); */
    border-radius: 15px;
  }
`

function ZecreyMobile() {
  return (
    <>
      <Wrap>
         <div className='outermostlayer'>
           <div className='mobile'>
             Zecrey Mobile
           </div>
           <div className='zecreymobile'>
             Zecrey Mobile
           </div>
           <div className='mobilephone'>
            <Image 
                src='/zecreymobile/mobilephone.png'
                className='mobilephone-img'
                alt='zecrey'
                layout='fill'
            />
           </div>
           <div className='anywhere'>
             Anywhere,anytime in your pocket.
           </div>
           <div className='comingsoon'>
             Coming Soon
           </div>
           <div className='iphone'>
             <Image 
                src='/zecreymobile/iPhone.png'
                className='iphone-img'
                alt='zecrey'
                layout='fill'
              />
           </div>
           <div className='boxframe'></div>
           <div className='boxframe-two'></div>
         </div>
      </Wrap>   
    </>
  )
}

export default ZecreyMobile