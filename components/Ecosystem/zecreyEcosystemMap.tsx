import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

const Wrap = styled.div`
  .ecosystemmap{
    width: 125.6rem;
    height: 76.9rem;
    background: #383838;
    mix-blend-mode: normal;
    opacity: 0.95;
    border: 0.1rem solid rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    position: absolute;
    z-index: 100;
  }
  .map{
    width: 21.6rem;
    height: 2.3rem;
    margin: 0.9rem 0 0 52.2rem;
    font-family: Lexend;
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #2AD4D9;
  }
  .picture{
    width: 121.1rem;
    height: 68.2rem;
    margin: 0 auto;
  }
  .picture img{
    width: 100%;
    margin-top: 1.5rem;
  }
  .button-close{
    width: 12rem;
    height: 3.4rem;
    border: 0.1rem solid #2AD4D9;
    box-sizing: border-box;
    border-radius: 1.8rem;
    margin: 0 auto;
    font-family: Lexend;
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 3.4rem;
    text-align: center;
    color: #2AD4D9;
  }
`
function zecreyEcosystemMap() {
  return (
    <>
     <Wrap>
       {/* <div className='ecosystemmap' hidden={dropdown}> */}
       <div className='ecosystemmap'>
         <div className='map'>
           <p>Zecrey Ecosystem Map</p>
         </div>
         <div className='picture'>
           <img src="/Ecosystem/ecosystemMap.png" alt="" />
         </div>
         <div className='button-close'>
           <p>Close</p>
         </div>
       </div>
     </Wrap>
    </>
  )
}

export default zecreyEcosystemMap