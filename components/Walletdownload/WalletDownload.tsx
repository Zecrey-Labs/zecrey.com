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
  .extensionwallet{
    width: 9.7rem;
    height: 1.7rem;
    border: 0.1rem solid #2AD4D8;
    border-radius: 0.5rem;
    position: absolute;
    left: 6rem;
    right: 0%;
    top: 4rem;
    bottom: 0%;
    text-align: center;
    line-height: 1.5rem;
    font-family: Adobe Gothic Std;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    color: #2AD4D8;
  }
  .privacy{
    position: absolute;
    height: 1.4rem;
    left: 4.69%;
    right: 83.91%;
    top: calc(50% - 1.4rem/2 + 3.85rem);
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: 0.0144706rem;
    color: #F1F1F1;
  }
  .smallcircle{
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    left: 21.4rem;
    top: 28.3rem;
  }
  .oneclick{
    width: 28.4rem;
    height: 6.6rem;
    position: absolute;
    height: 6.6rem;
    left: 4.69%;
    right: 73.12%;
    top: calc(50% - 6.6rem/2 + 8.95rem);
    font-family: Lexend;
    font-style: normal;
    font-weight: 800;
    font-size: 2.6rem;
    line-height: 3.2rem;
    letter-spacing: 0.0313529rem;
    color: rgba(0, 182, 186, 1);
  }
  .download{
    width: 10.7rem;
    height: 2.6rem;
    position: absolute;
    left: 4.69%;
    right: 86.95%;
    top: 78.39%;
    bottom: 16.5%;
    border: 0.1rem solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 1.3rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.5rem;
    letter-spacing: 0.0168824rem;
    color: #FFFFFF;
    text-align: center;
  }
  .rightpicture{
    width:80rem;
    height: 66.4rem;
    background: #202124;
    position: absolute;
    left: 33.44%;
    right: 4.06%;
    top: 13.16%;
    bottom: -43.61%;
  }
  .colordots{
    width: 4.2rem;
    height: 1rem;
    position: absolute;
    width: 4.2rem;
    height: 1rem;
    left: 1rem;
    top: 1.3rem;
  }
  .colordots div{
    width: 1rem;
    height: 1rem;
  }
  .pink{
    position: absolute;
    left: calc(50% - 1rem/2 - 1.6rem);
    top: calc(50% - 1rem/2);
    background: #FF6058;
    border: 0.05rem solid #E14942;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .yellow{
    position: absolute;
    left: calc(50% - 1rem/2);
    top: calc(50% - 1rem/2);
    background: #FFC130;
    border: 0.05rem solid #E1A325;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .green{
    position: absolute;
    left: calc(50% - 1rem/2 + 1.6rem);
    top: calc(50% - 1rem/2);
    background: #27CA40;
    border: 0.05rem solid #3EAF3F;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .searchbox{
    width: 19.4rem;
    height: 2.75rem;
    position: absolute;
    height: 2.75rem;
    left: 6.2rem;
    right: 2.21rem;
    top: 0.7rem;
    background: #323639;
    border-radius: 0.8rem 0.8rem 0rem 0rem;
  }
  .smallcross{
    width: 0.648rem;
    height: 0.648rem;
    position: absolute;
    left: 17.7rem;
    top: 1.022rem;
  }
  .plussign{
    width: 1.041rem;
    height: 1.041rem;
    position: absolute;
    left: 26.77rem;
    right: -2.06%;
    top: 1.2rem;
    bottom: 25.79%;
  }
  .theheadsearch{
    width: 80rem;
    height: 3rem;
    position: absolute;
    left: 0rem;
    right: 0rem;
    top: 3.4rem;
    background: #323639;
  }
  .frontandback{
    width: 6.2rem;
    height: 1.1rem;
    position: absolute;
    left: 1.2rem;
    top: 1rem;
  }
  .rollback{
    width: 1.041rem;
    height: 1.021rem;
    position: absolute;
    left: 0.053rem;
    top: 0.006rem;
  }
  .advance{
    width: 1.041rem;
    height: 1.021rem;
    position: absolute;
    left: 2.647rem;
    top: 0.006rem;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .refresh{
    width:1rem;
    height: 1rem;
    position: absolute;
    left: calc(50% - 1rem/2 + 2.6rem);
    top: calc(50% - 1rem/2 - 0.05rem);
  }
  .frame{
    width: 65.2rem;
    height: 2.2rem;
    position: absolute;
    left: 8.7rem;
    right: 0rem;
    top: 0.4rem;
    bottom: 0%;
    background: #282C2F;
    border-radius: 0.95rem;
  }
  .star{
    width: 1.405rem;
    height: 1.336rem;
    position: absolute;
    right: 0.795rem;
    top: 0.2rem;
    box-sizing: border-box;
  }
  .skink{
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    left: 93.62%;
    right: 4.38%;
    top: 0.7rem;
    bottom: 91.42%;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.2;
    border-radius: 50%;
  }
  .threepoints{
    width: 0.236rem;
    height: 1.021rem;
    position: absolute;
    right: 1.675rem;
    top: 0.989rem;
  }
  .background{
    width: 79.9rem;
    height: 37.6rem;
    position: absolute;
    left: 0%;
    right: 0.12%;
    top: 3rem;
    bottom: 33.43%;
    background: #000000;
    mix-blend-mode: normal;
  }
  /* .background-img{
    z-index: 100;
  } */
  .awhitefigure{
    width: 19.8rem;
    height: 33rem;
    position: absolute;
    left: 70.88%;
    right: 4.38%;
    top: 3rem;
    bottom: 40.66%;
    background: url(Image.png);
  }
`

function WalletDownload() {
  return (
    <>
       <Wrap>
         <div className='outermostlayer'>
           <div className='extensionwallet'>
             Extension Wallet
           </div>
           <span className='privacy'>
             Privacy Wallet Extension
           </span>
           <div className='smallcircle'>
             <img src="/walletdownload/smallcircle.png" alt="" />
           </div>
           <div className='oneclick'>
             Privacy does matter Just one-click.
           </div>
           <div className='download'>
             Download
           </div>
           <div className='rightpicture'>
             <div className='colordots'>
               <div className='pink'></div>
               <div className='yellow'></div>
               <div className='green'></div>
             </div>
             <div className='searchbox'>
               <div className='smallcross'>
                 <Image 
                   src='/walletdownload/cross.png'
                   className='cross'
                   alt='zecrey'
                   layout='fill'
                 />
               </div>
             </div>
             <div className='plussign'>
               <img src="/walletdownload/plussign.png" alt="" />
             </div>
             <div className='theheadsearch'>
               <div className='frontandback'>
                 <div className='rollback'>
                   <Image 
                     src='/walletdownload/rollback.png'
                     className='rollback-img'
                     alt='zecrey'
                     layout='fill'
                   />
                 </div>
                 <div className='advance'>
                   <Image 
                     src='/walletdownload/advance.png'
                     className='advance-img'
                     alt='zecrey'
                     layout='fill'
                   />
                 </div>
                 <div className='refresh'>
                   <Image 
                     src='/walletdownload/refresh.png'
                     className='refresh-img'
                     alt='zecrey'
                     layout='fill'
                   />
                 </div>
               </div>
               <div className='frame'>
                 <div className='star'>
                   <img src="/walletdownload/star.png" alt="" />
                 </div>
               </div>
               <div className='skink'>
                  <Image 
                     src='/walletdownload/skink.png'
                     className='skink-img'
                     alt='zecrey'
                     layout='fill'
                   />
               </div>
               <div className='threepoints'>
                   <Image 
                     src='/walletdownload/threepoints.png'
                     className='threepoints-img'
                     alt='zecrey'
                     layout='fill'
                   />
               </div>
               <div className='background'>
                   <Image
                     src='/walletdownload/background.png'
                     className='background-img'
                     alt='zecrey'
                     layout='fill'
                   />
               </div>
               <div className='awhitefigure'>
                   <Image 
                     src='/walletdownload/Wallet.svg'
                     className='awhitefigure-img'
                     alt='zecrey'
                     layout='fill'
                   />
               </div>
             </div>
           </div>
         </div>
       </Wrap>
    </>
  )
}

export default WalletDownload