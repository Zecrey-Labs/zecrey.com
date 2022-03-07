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
    left: 74.5rem;
    top: 16.8rem;
  }
  .wire{
    width: 96.6rem;
    height: 25.6rem;
    position: absolute;
    left: 32.6rem;
    top: 34.5rem;
    mix-blend-mode: normal;
    opacity: 0.5;
    overflow: hidden;
  }
  .wire img{
    width: 100%;
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
    left: 48.1rem;
    top: 37.4rem;
  }
  .two-dot{
    position: absolute;
    left: 57.4rem;
    top: 35.7rem;
  }
  .three-dot{
    position: absolute;
    left: 66.9rem;
    top: 34.8rem;
  }
  .four-dot{
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    left: 80.3rem;
    top: 33.9rem;
    background: #2AD4D8;
    border: 0.3rem solid rgba(42, 212, 216, 0.4605);
  }
  .five-dot{
    position: absolute;
    left: 94.3rem;
    top: 34.8rem;
  }
  .six-dot{
    position: absolute;
    left: 103.8rem;
    top: 35.8rem;
  }
  .seven-dot{
    position: absolute;
    left: 113.1rem;
    top: 37.6rem;
  }
  .ellipsis{
    width: 0.4rem;
    height: 6.1rem;
  }
  .ellipsis-1{
    position: absolute;
    left: 67rem;
    top: 27.8rem;
  }
  .ellipsis-2{
    position: absolute;
    left: 94.4rem;
    top: 27.8rem;
  }
  .ellipsis-3{
    position: absolute;
    left: 57.5rem;
    top: 28.9rem;
  }
  .ellipsis-4{
    position: absolute;
    left: 103.9rem;
    top: 28.9rem;
  }
  .ellipsis-5{
    position: absolute;
    left: 48.2rem;
    top: 30.6rem;
  }
  .ellipsis-6{
    position: absolute;
    left: 113.2rem;
    top: 30.6rem;
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
    left: 43rem;
    top: 28.3rem;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: 0.0168824rem;
  }
  .zecreyapp{
    width: 10.1rem;
    height: 1.7rem;
    position: absolute;
    left: 53.7rem;
    top: 26.2rem;
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
    left: 63.5rem;
    top: 25.4rem;
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
    left: 90.7rem;
    top: 25.3rem;
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
    left: 101.3rem;
    top: 26.4rem;
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
    left: 108.9rem;
    top: 28.3rem;
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
    top: 26.2rem;
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
    top: 25.6rem;
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
      </Wrap>
    </>
  )
}

export default Ecosystem