import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

const Wrap = styled.div`
  .multilayer{
    width: 128rem;
    height: 41rem;
    background: rgba(56, 56, 56, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    backdrop-filter: blur(2.71828rem);
    border-radius: 1rem;
    position: relative;
  }
  .lizard{
    width: 13.6rem;
    height: 15.5rem;
    position: absolute;
    left: 58.2%;
    right: 31.17%;
    top: 40.98%;
    bottom: 21.22%;
  }
  .wire{
    width: 96.6rem;
    height: 25.6rem;
    position: absolute;
    left: 19.6rem;
    right: -0.94%;
    top: 34.5rem;
    bottom: -46.59%;
    mix-blend-mode: normal;
    opacity: 0.5;
    overflow: hidden;
  }
  .dot{
    width: 0.6rem;
    height: 0.6rem;
    background: #FFFFFF;
    border: 0.3rem solid rgba(255, 255, 255, 0.4605);
    border-radius: 50%;
  }

  .one-dot{
    position: absolute;
    left: 37.58%;
    right: 61.95%;
    top: 89.22%;
    bottom: 7.32%;
  }
  .two-dot{
    position: absolute;
    left: 44.84%;
    right: 54.69%;
    top: 86.07%;
    bottom: 11.46%;
  }
  .three-dot{
    position: absolute;
    left: 52.27%;
    right: 47.27%;
    top: 83.88%;
    bottom: 13.66%;
  }
  .four-dot{
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    left: 62.73%;
    right: 36.33%;
    top: 82.50%;
    bottom: 14.39%;
    background: #2AD4D8;
    border: 0.3rem solid rgba(42, 212, 216, 0.4605);
  }
  .five-dot{
    position: absolute;
    left: 73.67%;
    right: 25.86%;
    top: 84.60%;
    bottom: 13.66%;
  }
  .six-dot{
    position: absolute;
    left: 81.09%;
    right: 18.44%;
    top: 86.50%;
    bottom: 11.22%;
  }
  .seven-dot{
    position: absolute;
    left: 88.36%;
    right: 11.17%;
    top: 89.71%;
    bottom: 6.83%;
  }
  .ellipsis{
    width: 0.4rem;
    height: 6.1rem;
  }
  .ellipsis-1{
    position: absolute;
    left: 52.55%;
    right: 47.34%;
    top: 67.8%;
    bottom: 17.32%;
  }
  .ellipsis-2{
    position: absolute;
    left: 74%;
    right: 25.94%;
    top: 67.8%;
    bottom: 17.32%;
  }
  .ellipsis-3{
    position: absolute;
    left: 45.15%;
    right: 54.77%;
    top: 70.49%;
    bottom: 14.63%;
  }
  .ellipsis-4{
    position: absolute;
    left: 81.40%;
    right: 18.52%;
    top: 70.49%;
    bottom: 14.63%;
  }
  .ellipsis-5{
    position: absolute;
    left: 37.90%;
    right: 62.03%;
    top: 73.50%;
    bottom: 10.49%;
  }
  .ellipsis-6{
    position: absolute;
    left: 88.68%;
    right: 11.25%;
    top: 74.63%;
    bottom: 10.49%;
  }
  .headline{
    font-family: Zing Rust Demo;
    font-style: italic;
    font-weight: normal;
    color: #E3E3E3;
  }
  .headline:hover{
    color: #2AD4D8;
  }
  .headline:hover .dot{
    background: #2AD4D8;
    color: #2AD4D8;
  }
  .multl{
    width: 12.9rem;
    height: 2rem;
    position: absolute;
    left: 32.59%;
    right: 57.97%;
    top: calc(50% - 3rem/2 + 8.8rem);
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: 0.0168824rem;
  }
  .zecreyapp{
    width: 10.1rem;
    height: 1.7rem;
    position: absolute;
    left: 41.30%;
    right: 51.72%;
    top: calc(50% - 2rem/2 + 6.55rem);
    font-size: 1.2rem;
    line-height: 1.7rem;
    letter-spacing: 0.0144706rem;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
  .cexlotc{
    width: 9.3rem;
    height: 1.7rem;
    position: absolute;
    left: 49.61%;
    right: 44.69%;
    top: calc(50% - 1.7rem/2 + 5.75rem);
    font-size: 1.2rem;
    line-height: 1.7rem;
    letter-spacing: 0.0144706rem;
    mix-blend-mode: normal;
    opacity: 0.4;
  }
  .prlvate{
    width: 9.7rem;
    height: 1.7rem;
    position: absolute;
    left: 70.86%;
    right: 23.12%;
    top: calc(50% - 1.7rem/2 + 5.65rem);
    font-size: 1.2rem;
    line-height: 1.7rem;
    letter-spacing: 0.0144706rem;
    mix-blend-mode: normal;
    opacity: 0.4;
  }
  .nft{
    width: 7.5rem;
    height: 1.7rem;
    position: absolute;
    left: 79.14%;
    right: 16.56%;
    top: calc(50% - 1.7rem/2 + 6.75rem);
    font-size: 1.2rem;
    line-height: 1%.7rem;
    letter-spacing: 0.0144706rem;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
  .prlvacy{
    width: 10.9rem;
    height: 2rem;
    position: absolute;
    height: 2rem;
    left: 85.08%;
    right: 7.97%;
    top: calc(50% - 2rem/2 + 8.8rem);
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: 0.0168824rem;
  }
  .icon-1 img,  
  .icon-2 img,
  .icon-3 img,
  .icon-4 img,
  .icon-5 img,
  .icon-6 img{
    /* width: 100%; */
    height: 100%;
  }
  .icon-1{
    width: 1.8rem;
    height: 1.5rem;
    position: absolute;
    left: 47.6rem;
    top: 25.8rem;
  }
  .icon-2{
    width: 1.7rem;
    height: 1.7rem;
    position: absolute;
    left: 56.9rem;
    top: 23.9rem;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
  .icon-3{
    width: 1.8rem;
    height: 1.4rem;
    position: absolute;
    left: 66.3rem;
    top: 23.4rem;
    mix-blend-mode: normal;
    opacity: 0.4;
  }
  .icon-4{
    width: 1.8rem;
    height: 1.4rem;
    position: absolute;
    left: 93.7rem;
    top: 23.3rem;
    mix-blend-mode: normal;
    opacity: 0.4;
  }
  .icon-5{
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    left: 103.2rem;
    top: 24.2rem;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
  .icon-6{
    width: 1.9rem;
    height: 2rem;
    position: absolute;
    left: 112.4rem;
    top: 26rem;
  }
  .module1:hover .dot{
    background: #2AD4D8;
  }
  .module2:hover .dot{
    background: #2AD4D8;
  }
  .module3:hover .dot{
    background: #2AD4D8;
  }
  .module4:hover .dot{
    background: #2AD4D8;
  }
  .module5:hover .dot{
    background: #2AD4D8;
  }
  .module6:hover .dot{
    background: #2AD4D8;
  }
`

function Ecosystem() {
  return (
    <>
      <Wrap>
         <div className='multilayer'>
           <div className='lizard'>
              <Image 
                src='/Ecosystem/lizard.png'
                className='lizard-img'
                alt='zecrey'
                layout='fill'
              />
           </div>
           <div className='wire'>
              <img src="/Ecosystem/wire.png" alt="" />
           </div>
           {/* 小模块 */}
           <div className='module1'>
              {/* 小点 */}
             <div className='one-dot dot'></div>
             {/* 竖 省略号 */}
             <div className='ellipsis-1 ellipsis'>
               <Image 
                 src='/Ecosystem/ellipsis.svg'
                 className=''
                 alt='zecrey'
                 layout='fill'
               />
             </div>
             {/* 文字 */}
             <div className='multl headline'>
               <span>Multi-chain Wallet</span>
             </div>
             {/* 小图标 */}
             <div className='icon-1'>
               <img src="/Ecosystem/icon1.svg" alt="" />
             </div>
           </div>
           <div className='module2'>
             <div className='two-dot dot'></div>
             <div className='ellipsis-2 ellipsis'>
               <Image 
                 src='/Ecosystem/ellipsis.svg'
                 className=''
                 alt='zecrey'
                 layout='fill'
               />
             </div>   
             <div className='zecreyapp headline'>
               <span>Zecrey app chain</span>
             </div>
             <div className='icon-2'>
               <img src="/Ecosystem/icon2.svg" alt="" />
             </div>
           </div>
           <div className='module3'>
             <div className='three-dot dot'></div>
             <div className='ellipsis-3 ellipsis'>
               <Image 
                 src='/Ecosystem/ellipsis2.svg'
                 className=''
                 alt='zecrey'
                 layout='fill'
               />
             </div>
             <div className='cexlotc headline'>
               <span>CEX/otc service</span>
             </div>
             <div className='icon-3'>
               <img src="/Ecosystem/icon3.svg" alt="" />
             </div>
           </div>
           <div className='module4'>
             <div className='five-dot dot'></div>
             <div className='ellipsis-4 ellipsis'>
               <Image 
                 src='/Ecosystem/ellipsis2.svg'
                 className=''
                 alt='zecrey'
                 layout='fill'
               />
             </div> 
             <div className='prlvate headline'>
               <span>private payment</span>
             </div>
             <div className='icon-4'>
               <img src="/Ecosystem/icon4.svg" alt="" />
             </div>
           </div>
           <div className='module5'>
             <div className='six-dot dot'></div>
             <div className='ellipsis-5 ellipsis'>
               <Image 
                 src='/Ecosystem/ellipsis3.svg'
                 className=''
                 alt='zecrey'
                 layout='fill'
               />
             </div>
             <div className='nft headline'>
               <span>Nft Manage</span>
             </div>
             <div className='icon-5'>
               <img src="/Ecosystem/icon5.svg" alt="" />
             </div>
           </div>
           <div className='module6'>
             <div className='seven-dot dot'></div>
             <div className='ellipsis-6 ellipsis'>
               <Image 
                 src='/Ecosystem/ellipsis3.svg'
                 className=''
                 alt='zecrey'
                 layout='fill'
               />
             </div>
             <div className='prlvacy headline'>
               <span>Privacy protect</span>
             </div>
             <div className='icon-6'>
               <img src="/Ecosystem/icon6.svg" alt="" />
             </div>
           </div>

           <div className='four-dot dot'></div>
         </div>
      </Wrap>
    </>
  )
}

export default Ecosystem