"use client";
// import { useRouter } from "next/router";
import styled from "styled-components";
import {useState, useEffect} from "react";

const amplitude = 2

const StyleContent = styled.div`
 width: 100%;
 height: 100%;
 position: fixed;
 left: 0;
 top: 0;
 z-index: 2;

 .l, .r {
 }

 .l {
  height: 6.97rem;
  flex-shrink: 0;
  position: relative;
  z-index: 2;

  .title {
   position: relative;
   margin-bottom: .35rem;

   p {
    color: var(--zecrey-cyan);
    font-family: DINCond-Bold;
    font-size: .86rem;
    font-style: normal;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.15;
   }

   .icoStar {
    position: absolute;
    right: 0.72rem;
    top: -0.15rem;
    width: .46rem;
    height: 1.11rem;
   }
  }

  .description {
   width: 6.5rem;
   height: 1rem;
   overflow-y: hidden;
   position: relative;
   padding-left: .23rem;
   transform: translateX(-.06rem);
   margin-bottom: 1.3rem;

   .navigation {
    width: .06rem;
    height: .41rem;
    position: absolute;
    background: #393B3C;
    left: 0;
    top: .1rem;
    border-radius: .03rem;

    .btn {
     width: .06rem;
     height: .11rem;
     position: absolute;
     left: 0;
     top: 0;
     transition: all .25s;
     background: var(--zecrey-cyan);
     border-radius: 3px;
    }
   }

   .text {
    color: var(--text);
    font-family: Arial;
    font-size: .18rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    transform: translateY(0);
    transition: all .4s;

    > div {
     height: 1rem;
     margin-bottom: .1rem;
    }
   }
  }

  .brandList {
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;

   .item {
    width: 2.53rem;
    height: .89rem;
    margin-right: .36rem;
    cursor: pointer;
    transition: all .5s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .13rem;
    background: url("/static/Rectangle321.svg") #38393A left top;
    background-size: 100% 100%;

    img {
     background: transparent;
    }

    .img0 {
     width: 1.16rem;
     height: .5rem;
    }

    .img1 {
     width: 1.65rem;
     height: .31rem;
    }
   }

   .item:hover {
    transform: scale(1.075);
    background: url("/static/Rectangle322.svg") #535557 left top;
    background-size: 100% 100%;
   }
  }
 }

 .r {
  z-index: 1;
  height: 9.43rem;

  .bg {
   position: fixed;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;

   > img {
    width: 100%;
    height: 100%;
   }
  }

  .door {
   position: relative;
   width: 9.58rem;
   height: 9.43rem;

   .doorBg {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
   }

   .icos {
    .ico {
     position: absolute;

     div {
      width: 100%;
      height: 100%;
     }

     img {
      width: 100%;
      height: 100%;
      display: block;
     }
    }

   }

   .imgLoadedS {
    opacity: 0;
   }

   .imgLoaded {
    opacity: 1;
    // init
    .ico:nth-of-type(1) {
     animation: blast1 .3s;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .ico:nth-of-type(2) {
     animation: blast2 .3s;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .ico:nth-of-type(3) {
     animation: blast3 .3s;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .ico:nth-of-type(4) {
     animation: blast4 .3s;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .ico:nth-of-type(5) {
     animation: blast5 .3s;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .ico:nth-of-type(6) {
     animation: blast6 .3s;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .ico:nth-of-type(7) {
     animation: blast7 .3s;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .ico:nth-of-type(8) {
     animation: blast8 .3s;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .ico:nth-of-type(9) {
     animation: blast9 .3s;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .ico:nth-of-type(10) {
     animation: blast10 .3s;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .ico:nth-of-type(11) {
     animation: blast11 .3s;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    // hover
    .hoverDoor {
     .left {
      animation: aniLeftOut .3s;
      animation-iteration-count: 1;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
     }

     .right {
      animation: aniRightOut .3s;
      animation-iteration-count: 1;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
     }

     .ico:nth-of-type(1) {
      img {
       animation: swing1 7s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-direction: alternate;
      }
     }

     .ico:nth-of-type(2) {
      img {
       animation: swing2 5s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-direction: alternate;
      }
     }

     .ico:nth-of-type(3) {
      img {
       animation: swing3 4s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-direction: alternate;
      }
     }

     .ico:nth-of-type(4) {
      img {
       animation: swing4 9s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-direction: alternate;
      }
     }

     .ico:nth-of-type(5) {
      img {
       animation: swing5 7s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-direction: alternate;
      }
     }

     .ico:nth-of-type(6) {
      img {
       animation: swing6 10s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-direction: alternate;
      }
     }

     .ico:nth-of-type(7) {
      img {
       animation: swing7 12s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-direction: alternate;
      }
     }

     .ico:nth-of-type(8) {
      img {
       animation: swing8 8s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-direction: alternate;
      }
     }

     .ico:nth-of-type(9) {
      img {
       animation: swing9 9s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-direction: alternate;
      }
     }

     .ico:nth-of-type(10) {
      img {
       animation: swing10 6s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-direction: alternate;
      }
     }

     .ico:nth-of-type(11) {
      img {
       animation: swing11 11s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-direction: alternate;
      }
     }
    }

    .hoverOutDoor {
     .left {
      animation: aniLeftIn .3s;
      animation-iteration-count: 1;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
     }

     .right {
      animation: aniRightIn .3s;
      animation-iteration-count: 1;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
     }
    }
   }

   .cover {
    position: absolute;
    width: 2rem;
    height: 5.6rem;
    left: 3.8rem;
    top: 1.5rem;
   }
  }

 }

 @keyframes aniRightOut {
  0% {
   transform: translateX(0rem) translateY(0rem);
  }
  80% {
   transform: translateX(.9rem) translateY(-.8rem);
  }
  100% {
   transform: translateX(.7rem) translateY(-.6rem);
  }
 }
 @keyframes aniLeftOut {
  0% {
   transform: translateX(0rem) translateY(0rem);
  }
  80% {
   transform: translateX(-.9rem) translateY(-.8rem);
  }
  100% {
   transform: translateX(-.7rem) translateY(-.6rem);
  }
 }
 @keyframes aniLeftIn {
  0% {
   transform: translateX(-.7rem) translateY(-.6rem);
  }
  80% {
   transform: translateX(.1rem) translateY(.088rem);
  }
  100% {
   transform: translateX(0rem) translateY(0rem);
  }
 }
 @keyframes aniRightIn {
  0% {
   transform: translateX(.7rem) translateY(-.6rem);
  }
  80% {
   transform: translateX(-.1rem) translateY(.088rem);
  }
  100% {
   transform: translateX(0rem) translateY(0rem);
  }
 }
 @keyframes swing1 {
  0% {
   transform: translateX(0) translateY(0);
  }
  100% {
   transform: translateX(-${.2 * amplitude}rem) translateY(${.1 * amplitude}rem);
  }
 }
 @keyframes swing2 {
  0% {
   transform: translateX(0) translateY(0);
  }
  100% {
   transform: translateX(${-.05 * amplitude}rem) translateY(${-.3 * amplitude}rem);
  }
 }
 @keyframes swing3 {
  0% {
   transform: translateX(0) translateY(0);
  }
  100% {
   transform: translateX(${-.25 * amplitude}rem) translateY(${-.1 * amplitude}rem);
  }
 }
 @keyframes swing4 {
  0% {
   transform: translateX(0) translateY(0);
  }
  100% {
   transform: translateX(${-.2 * amplitude}rem) translateY(${0 * amplitude}rem);
  }
 }
 @keyframes swing5 {
  0% {
   transform: translateX(0) translateY(0);
  }
  100% {
   transform: translateX(${-.3 * amplitude}rem) translateY(${-.3 * amplitude}rem);
  }
 }
 @keyframes swing6 {
  0% {
   transform: translateX(0) translateY(0);
  }
  100% {
   transform: translateX(${-.28 * amplitude}rem) translateY(${0 * amplitude}rem);
  }
 }
 @keyframes swing7 {
  0% {
   transform: translateX(0) translateY(0);
  }
  100% {
   transform: translateX(${.15 * amplitude}rem) translateY(${-0.04 * amplitude}rem);
  }
 }
 @keyframes swing8 {
  0% {
   transform: translateX(0) translateY(0);
  }
  100% {
   transform: translateX(${.3 * amplitude}rem) translateY(${-0.2 * amplitude}rem);
  }
 }
 @keyframes swing9 {
  0% {
   transform: translateX(0) translateY(0);
  }
  100% {
   transform: translateX(${.2 * amplitude}rem) translateY(${-0.1 * amplitude}rem);
  }
 }
 @keyframes swing10 {
  0% {
   transform: translateX(0) translateY(0);
  }
  100% {
   transform: translateX(${.2 * amplitude}rem) translateY(${0.1 * amplitude}rem);
  }
 }
 @keyframes swing11 {
  0% {
   transform: translateX(0) translateY(0);
  }
  100% {
   transform: translateX(${.25 * amplitude}rem) translateY(${0.05 * amplitude}rem);
  }
 }
 @keyframes blast1 {
  0% {
   left: 4.65rem;
   top: 3.4rem;
   transform: translateX(0) translateY(0);
  }
  80% {
   left: 2.95rem;
   top: 1.4rem;
   transform: translateX(-.1rem) translateY(-.1rem);
  }
  100% {
   left: 2.95rem;
   top: 1.4rem;
   transform: translateX(0) translateY(0);
  }
 }
 @keyframes blast2 {
  0% {
   left: 4.65rem;
   top: 3.4rem;
   transform: translateX(0) translateY(0);
  }
  80% {
   left: 2rem;
   top: 2.24rem;
   transform: translateX(-.1rem) translateY(-.1rem);
  }
  100% {
   left: 2rem;
   top: 2.24rem;
   transform: translateX(0) translateY(0);
  }
 }
 @keyframes blast3 {
  0% {
   left: 4.65rem;
   top: 3.4rem;
   transform: translateX(0) translateY(0);
  }
  80% {
   left: 2.99rem;
   top: 2.72rem;
   transform: translateX(-.1rem) translateY(-.1rem);
  }
  100% {
   left: 2.99rem;
   top: 2.72rem;
   transform: translateX(0) translateY(0);
  }
 }
 @keyframes blast4 {
  0% {
   left: 4.65rem;
   top: 3.4rem;
   transform: translateX(0) translateY(0);
  }
  80% {
   left: 2.26rem;
   top: 3.96rem;
   transform: translateX(-.1rem) translateY(.1rem);
  }
  100% {
   left: 2.26rem;
   top: 3.96rem;
   transform: translateX(0) translateY(0);
  }
 }
 @keyframes blast5 {
  0% {
   left: 4.65rem;
   top: 3.4rem;
   transform: translateX(0) translateY(0);
  }
  80% {
   left: 3.65rem;
   top: 4.62rem;
   transform: translateX(-.1rem) translateY(.1rem);
  }
  100% {
   left: 3.65rem;
   top: 4.62rem;
   transform: translateX(0) translateY(0);
  }
 }
 @keyframes blast6 {
  0% {
   left: 4.65rem;
   top: 3.4rem;
   transform: translateX(0) translateY(0);
  }
  80% {
   left: 3rem;
   top: 5.27rem;
   transform: translateX(-.1rem) translateY(.1rem);
  }
  100% {
   left: 3rem;
   top: 5.27rem;
   transform: translateX(0) translateY(0);
  }
 }
 @keyframes blast7 {
  0% {
   left: 4.65rem;
   top: 3.4rem;
   transform: translateX(0) translateY(0);
  }
  80% {
   left: 5.37rem;
   top: 1.17rem;
   transform: translateX(.1rem) translateY(-.1rem);
  }
  100% {
   left: 5.37rem;
   top: 1.17rem;
   transform: translateX(0) translateY(0);
  }
 }
 @keyframes blast8 {
  0% {
   left: 4.65rem;
   top: 3.4rem;
   transform: translateX(0) translateY(0);
  }
  80% {
   left: 7rem;
   top: 1.68rem;
   transform: translateX(.1rem) translateY(-.1rem);
  }
  100% {
   left: 7rem;
   top: 1.68rem;
   transform: translateX(0) translateY(0);
  }
 }
 @keyframes blast9 {
  0% {
   left: 4.65rem;
   top: 3.4rem;
   transform: translateX(0) translateY(0);
  }
  80% {
   left: 6.17rem;
   top: 2.46rem;
   transform: translateX(.1rem) translateY(-.1rem);
  }
  100% {
   left: 6.17rem;
   top: 2.46rem;
   transform: translateX(0) translateY(0);
  }
 }
 @keyframes blast10 {
  0% {
   left: 4.65rem;
   top: 3.4rem;
   transform: translateX(0) translateY(0);
  }
  80% {
   left: 6.78rem;
   top: 3.56rem;
   transform: translateX(.1rem) translateY(.1rem);
  }
  100% {
   left: 6.78rem;
   top: 3.56rem;
   transform: translateX(0) translateY(0);
  }
 }
 @keyframes blast11 {
  0% {
   left: 4.65rem;
   top: 3.4rem;
   transform: translateX(0) translateY(0);
  }
  80% {
   left: 5.44rem;
   top: 4.4rem;
   transform: translateX(.1rem) translateY(.1rem);
  }
  100% {
   left: 5.44rem;
   top: 4.4rem;
   transform: translateX(0) translateY(0);
  }
 }

 @media (max-width: 1080px){
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  //min-height: 6.67rem;
  //max-height: 6.67rem;
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  .contentMain{
   padding: .8rem .24rem 0;
   display: block;
   .l{
    margin: 0 -.1rem;
    height: auto;
    .title{
     margin-bottom: .1rem;
     p{
      color: var(--zecrey-cyan);
      text-align: center;
      font-family: DINCond-Bold;
      font-size: .36rem;
      font-weight: 500;
      line-height: 110%;
      text-transform: uppercase;
     }
     .icoStar{
      display: none;
     }
    }
    .description_wrap{
     height: .75rem;
     overflow: hidden;
     margin-bottom: .07rem;
    }
    .description{
     color: var(--text);
     font-size: .12rem;
     padding: 0 .15rem 0;
     line-height: 130%;
     width: 100%;
     margin-bottom: -.25rem;
     max-height: none;
     .navigation{
      display: none;
     }
     .text{
      text-align: center;
      font-size: .12rem;
      line-height: 130%;
      width: 100%;
      height: 1rem;
     }
    }
    .brandList{
     justify-content: center;
     align-items: center;
     .item{
      width: 1.08rem;
      height: .38rem;
      margin: 0 .08rem;
      border-radius: .07rem;
      .img0{
       width: .495rem;
       height: auto;
      }
      .img1{
       width: .704rem;
       height: auto;
      }
     }
    }
   }
   .r{
    height: auto;
    max-height: 4rem;
    margin:0 -.24rem;
   }
  }
 }
 @media (max-width: 1080px){
  .r{
   .door{
    transform: scale(.45);
    position: relative;
    transform-origin: left top;
    left: -.24rem;
    bottom: 0;
   }
  }  
 }
`;

export interface iTokenPic {
  url: string;
  left?: string;
  top?: string;
  width: string;
  height: string;
  horizontal: string;
}


const tokenArr: iTokenPic[] = [
  {
    url: 'static/tokens/Group1449.png',
    width: '.35rem',
    height: '.35rem',
    horizontal: 'left',
  },
  {
    url: 'static/tokens/Group1444.png',
    width: '.55rem',
    height: '.55rem',
    horizontal: 'left',
  },
  {
    url: 'static/tokens/Group1443.png',
    width: '1.01rem',
    height: '1.01rem',
    horizontal: 'left',
  },
  {
    url: 'static/tokens/Group1436.png',
    width: '.53rem',
    height: '.53rem',
    horizontal: 'left',
  },
  {
    url: 'static/tokens/Group1437.png',
    width: '.35rem',
    height: '.35rem',
    horizontal: 'left',
  },
  {
    url: 'static/tokens/Group1438.png',
    width: '1.11rem',
    height: '1.11rem',
    horizontal: 'left',
  },
  {
    url: 'static/tokens/Group1442.png',
    width: '.8rem',
    height: '.8rem',
    horizontal: 'right',
  },
  {
    url: 'static/tokens/Group1450.png',
    width: '.35rem',
    height: '.35rem',
    horizontal: 'right',
  },
  {
    url: 'static/tokens/Group1440.png',
    width: '.61rem',
    height: '.61rem',
    horizontal: 'right',
  },
  {
    url: 'static/tokens/Group1447.png',
    width: '.51rem',
    height: '.51rem',
    horizontal: 'right',
  },
  {
    url: 'static/tokens/Group1439.png',
    width: '1.34rem',
    height: '1.34rem',
    horizontal: 'right',
  },
]

export const Content = () => {
  const [textDescriptionStep, setTextDescriptionStep] = useState(0)
  const [hoverDoor, setHoverDoor] = useState(false)
  const [hoverOutDoor, seetHoverOutDoor] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    // img
    const arrImg1 = document.querySelectorAll('img[data-src]')
    arrImg1.forEach((item: any) => {
      item.setAttribute('src', item.getAttribute('data-src'));
      item.onload = function () {
        item.removeAttribute('data-src');
      };
    })
  }, []);

  return (
    <StyleContent className={'styleFlexCenter content'}>
      <div className={"styleCenter styleFlexCenterBetween contentMain"}>
        <div className={'l'}>
          <div className={'title'}>
            <p>
              Your Pathway to
            </p>
            <p>
              Blockchain Adoption
            </p>
            <img className={'icoStar'} src={"static/icoStar.png"}/>
          </div>
          <div className={'description_wrap'}>
            <div className={'description'}>
              <div className={'navigation'}>
                <div className={'btn'} style={{top: `${textDescriptionStep * .15}rem`}}/>
              </div>
              <div className={'text'} style={{
                transform: `transLateY(-${textDescriptionStep * 1.1}rem)`
              }}>
                <div>Zecrey Labs is at the forefront of driving the future of blockchain technology. As a cutting-edge
                  entity, we are dedicated to creating innovative solutions that make blockchain accessible and
                  user-friendly for all.
                </div>
                <div>With a focus on revolutionizing decentralized ecosystems, our flagship products, Kontos and zkLegend,
                  exemplify our commitment to simplifying complex interactions, enhancing security, and enabling seamless
                  cross-chain experiences.
                </div>
                <div>With a vision to bring mass adoption to blockchain, Zecrey Labs aims to empower the next billion
                  users, opening the door to a new era of decentralized possibilities.
                </div>
              </div>
            </div>
          </div>
          <div className={'brandList'}>
            <div
              className={'item'}
              onMouseOver={() => {
                setTextDescriptionStep(1)
              }}
              onMouseOut={() => {
                setTextDescriptionStep(0)
              }}
              onClick={() => {
                setTextDescriptionStep(1)
              }}
            >
              <img className={'img0'} src={'static/brandlight3.png'}/>
            </div>
            <div
              className={'item'}
              onMouseOver={() => {
                setTextDescriptionStep(2)
              }}
              onMouseOut={() => {
                setTextDescriptionStep(0)
              }}
              onClick={() => {
                setTextDescriptionStep(2)
              }}
            >
              <img className={'img1'} src={'static/Horizontalwhite1.png'}/>
            </div>
          </div>
        </div>
        <div
          className={'r'}
        >
          <div className={'bg'}>
            <img data-src={'static/bg.png'}/>
          </div>
          <div className={'door'}>
            <img className={'doorBg'} onLoad={() => {
              setTimeout(() => {
                setImgLoaded(true)
              }, 500)
            }} data-src={'static/202308152144448422.png'}/>
            <div className={`imgLoadedS ${imgLoaded ? 'imgLoaded' : ''}`}>
              <div
                className={`icos ${hoverDoor ? 'hoverDoor' : ''} ${hoverOutDoor ? 'hoverOutDoor' : ''}`}
              >
                {
                  tokenArr.map((item, index) => (
                    <div
                      key={index.toString()}
                      style={{
                        width: item.width,
                        height: item.height,
                      }}
                      className={`ico`}
                    >
                      <div
                        className={`${item.horizontal}`}
                      >
                        <img
                          src={item.url}
                        />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div
              className={'cover'}
              onMouseOver={() => {
                if (!setImgLoaded) return
                setHoverDoor(true)
                seetHoverOutDoor(false)
              }}
              onMouseOut={() => {
                if (!setImgLoaded) return
                setHoverDoor(false)
                seetHoverOutDoor(true)
              }}
              onClick={() => {
                if (!setImgLoaded) return
                setHoverDoor(true)
                seetHoverOutDoor(false)
              }}
            />
          </div>
        </div>
      </div>
    </StyleContent>
  );
};

