"use client";
// import { useRouter } from "next/router";
import styled from "styled-components";
import {useState, useEffect} from "react";

const StyleHeader = styled.div`
 position: fixed;
 width: 100%;
 height: .95rem;
 padding-top: .34rem;
 z-index: 3;
 
 .com{
  display: block;
 }
 .mob{
  display: none;
 }

 .logo {
  width: 2.62rem;
  height: .61254rem;
 }

 .navList {
  max-height: none;

  a {
   max-height: none;
   font-family: Arial;
   font-style: normal;
   font-weight: 700;
   font-size: .18rem;
   color: var(--white, #FFF);
   margin-left: .94rem;
   cursor: pointer;
   position: relative;

   .sub {
    display: none;
    position: absolute;
    width: 5.84rem;
    height: 2.25rem;
    max-height: none;
    right: -.4rem;
    top: 0;
    padding-top: .35rem;
    cursor: default;

    .bg {
     position: absolute;
     width: 100%;
     height: 1.9rem;
     left: 0;
     bottom: 0;
    }

    .logo {
     width: 1.44rem;
     height: .34rem;
     position: absolute;
     left: .37rem;
     top: .75rem;
    }

    .text {
     position: absolute;
     left: 3.1rem;
     top: .7rem;
     font-family: Arial;
     font-size: .16rem;
     font-style: normal;
     font-weight: 400;
     line-height: 2.2;

     > div {
      cursor: pointer;
      color: var(--white, #FFF);
      margin-bottom: .1rem;

      &:hover {
       color: var(--zecrey-cyan);
      }
     }

     .title {
      cursor: default;
      color: var(--text, #8898A0);
      font-weight: 700;

      &:hover {
       color: var(--text, #8898A0);
      }
     }
    }
   }

   .sub1 {
    display: none;
    cursor: default;
    position: absolute;
    width: 5.84rem;
    height: 2.5rem;
    max-height: none;
    right: -.66rem;
    top: 0.2rem;
    padding-top: .15rem;

    .bg {
     position: absolute;
     width: 100%;
     height: 2.35rem;
     left: 0;
     bottom: 0;
    }

    .logo {
     width: 1.44rem;
     height: .34rem;
     position: absolute;
     left: .37rem;
     top: .55rem;
    }

    .text {
     position: absolute;
     left: 2.8rem;
     top: .52rem;
     font-family: Arial;
     font-size: .16rem;
     font-style: normal;
     font-weight: 400;
     line-height: 2.2;

     > div {
      cursor: pointer;
      color: var(--white, #FFF);
      margin-bottom: .07rem;

      &:hover {
       color: var(--zecrey-cyan);
      }
     }

     .title {
      cursor: default;
      color: var(--text);
      font-weight: 700;

      &:hover {
       color: var(--text);
      }
     }
    }

    .community {
     position: absolute;
     left: 4.36rem;
     top: .52rem;
     color: var(--white, #FFF);
     font-family: Arial;
     font-size: .16rem;
     font-style: normal;
     font-weight: 400;
     line-height: 2.2;

     .title {
      margin-bottom: .1rem;
     }

     .community_main {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 1.45rem;
      transform: translateX(-.1rem);

      .community_item {
       display: block;
       width: .28rem;
       height: .28rem;
       margin: 0 .1rem .17rem;

       > img {
        width: 100%;
        height: 100%;
       }
      }
     }

    }

    .copyright {
     max-height: 100%;
     color: var(--text, #8898A0);
     font-family: Arial;
     font-size: .14rem;
     font-style: normal;
     font-weight: 400;
     display: flex;
     justify-content: space-between;
     position: absolute;
     left: 0;
     bottom: .17rem;
     width: 100%;

     > div {
      max-height: 100%;
     }

     .l {
      padding-left: .35rem;
      width: 2.4rem;
     }

     .r {
      width: 3.05rem;
     }

     span {
      max-height: 100%;
      color: var(--white, #FFF);
     }
    }
   }
  }

  a.btn {
   width: 1.98rem;
   height: .47rem;
   border-radius: .08rem;
   background: var(--zecrey-cyan, #73E2F2);
   color: var(--background-1, #171818);
   font-family: Arial;
   font-size: .18rem;
   font-style: normal;
   font-weight: 700;
   line-height: .47rem;
  }

  a:hover {
   .sub, .sub1 {
    display: block;
   }
  }
 }

 @media (max-width: 1080px) {
  padding: .2rem .24rem 0;
  .com{
   display: none;
  }
  .styleCenter{
   width: 100%;
  }
  .logo {
   width: 1.32rem;
   height: .31rem;
   flex-shrink: 0;
  }
  .navList{
   display: none;
  }
  .mob{
   //display: none;
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   background: #171818;
   z-index: 1;
   padding: 0.8rem 0.24rem 0;
   .logo {
    position: absolute;
    left: .24rem;
    top: .2rem;
   }
   .line{
    width: auto;
    height: 1px;
    background: var(--background-2);
    margin-bottom: .21rem;
   }
   .productMob, .papersMob, .communityMob{
    padding: 0 .31rem;
    .text{
     div{
      color: var(--white);
      font-family: Arial;
      font-size: .16rem;
      font-style: normal;
      font-weight: 400;
      margin-bottom: .21rem;
      padding-top: .03rem;
     }
     .title{
      color: var(--text);
     }
    }
   }
   .communityMobImg {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 1.55rem;

    .communityMobImgItem {
     display: block;
     width: .28rem;
     height: .28rem;
     margin-right: .2rem;
     margin-bottom: .16rem;

     > img {
      width: 100%;
      height: 100%;
      display: block;
     }
    }
   }
   
   .copyright{
    color: var(--text);
    font-family: Arial;
    font-size: .14rem;
    font-weight: 400;
    padding-left: .55rem;
    position: absolute;
    left: 0;
    bottom: .1rem;
    width: 100%;
    >div{
     margin-bottom: .08rem;
    }
    span{
     color: var(--white);
    }
   }
  }
  .mobOpen{
   display: block;
   animation: aniMobMenuShow .2s;
   transform-origin: center;
   animation-iteration-count: 1;
   animation-timing-function: linear;
   animation-fill-mode: forwards;
  }
  .mobHide{
   display: block;
   animation: aniMobMenuHide .2s;
   transform-origin: center;
   animation-iteration-count: 1;
   animation-timing-function: linear;
   animation-fill-mode: forwards;
  }
  
  .mobHeaderBtn{
   position: fixed;
   //transition: all .3s;
   right: .20rem;
   top: .26rem;
   z-index: 11;
   .l1{
     width: .25rem;
    height: .02rem;
    background: #fff;
    margin-bottom: .05rem;
   }
   .l2{
     width: .25rem;
    height: .02rem;
    background: #fff;
   }
   &.open{
    right: .23rem;
    top: .26rem;
    animation: aniOpenMobMenu0 .2s;
    transform-origin: center;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    .l1{
     animation: aniOpenMobMenu1 .2s;
     transform-origin: center;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }
    .l2{
     animation: aniOpenMobMenu2 .2s;
     transform-origin: center;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }
   }
   &.close{
    right: .20rem;
    top: .26rem;
    animation: aniOpenMobMenu0_1 3s;
    transform-origin: center;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    .l1{
     animation: aniOpenMobMenu1_1 .2s;
     transform-origin: center;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }
    .l2{
     animation: aniOpenMobMenu2_1 .2s;
     transform-origin: center;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }
   }
  }
 }
 @keyframes aniOpenMobMenu0 {
  0% {
   transform: scaleX(1);
  }
  40% {
   transform: scaleX(.4);
  }
  50% {
   transform: scaleX(.5);
  }
  60% {
   transform: scaleX(.4);
  }
  100% {
   transform: scaleX(1);
  }
 }
 @keyframes aniOpenMobMenu0_1 {
  0% {
   //transform: scaleX(-1);
   transform: scaleX(1);
  }
  //40% {
  // transform: scaleX(.5);
  //}
  //60% {
  // transform: scaleX(-.5);
  //}
  100% {
   transform: scaleX(1);
  }
 }
 @keyframes aniOpenMobMenu1 {
  0% {
   transform: rotate(0deg) translateY(0rem);
  }
  50% {
   transform: rotate(-30deg) translateY(.04rem);
  }
  100% {
   transform: rotate(-45deg) translateY(.05rem);
  }
 }
 @keyframes aniOpenMobMenu1_1 {
  0% {
   transform: rotate(-45deg) translateY(.05rem);
  }
  50% {
   transform: rotate(-.22deg) translateY(.025rem);
  }
  100% {
   transform: rotate(0deg) translateY(0rem);
  }
 }
 @keyframes aniOpenMobMenu2 {
  0% {
   transform: rotate(0deg) translateY(0rem);
  }
  50% {
   transform: rotate(30deg) translateY(-.04rem);
  }
  100% {
   transform: rotate(45deg) translateY(-.05rem);
  }
 }
 @keyframes aniOpenMobMenu2_1 {
  0% {
   transform: rotate(45deg) translateY(-.05rem);
  }
  50% {
   transform: rotate(22deg) translateY(-.025rem);
  }
  100% {
   transform: rotate(0deg) translateY(0rem);
  }
 }
 
 @keyframes aniMobMenuShow {
  0% {
   display: block;
   opacity: 0;
   z-index: 10;
   left: 0%;
  }
  100% {
   display: block;
   opacity: 1;
   z-index: 10;
   left: 0%;
  }
 }
 @keyframes aniMobMenuHide {
  0% {
   display: block;
   opacity: 1;
   z-index: 10;
   left: 0%;
  }
  99% {
   display: block;
   opacity: 0;
   z-index: 10;
   left: 0%;
  }
  100% {
   left: -100%;
   display: none;
   opacity: 0;
   z-index: -1;
  }
 }
`;

interface tNavList {
  label: string;
  url: string;
  type?: string;
}

interface tCommunityList {
  src: string;
  href: string;
}

const navList: tNavList[] = [
  {label: "Ecosystem", url: "/"},
  {label: "About", url: "/"},
  {label: "Join Community", url: "/", type: "btn"},
];

const communityList: tCommunityList[] = [
  {
    src: "static/community/Subtract.svg",
    href: "https://www.google.com"
  },
  {
    src: "static/community/Vector-1.svg",
    href: "https://www.google.com"
  },
  {
    src: "static/community/Subtract-1.svg",
    href: "https://www.google.com"
  },
  {
    src: "static/community/telegram-4.svg",
    href: "https://www.google.com"
  },
  {
    src: "static/community/Vector.svg",
    href: "https://www.google.com"
  },
]

const SubItem0 = () => {
  return (
    <div className={'sub'}>
      <img className={'bg'} src={"static/bg1.svg"}/>
      <img className={'logo'} src={"static/logo.png"}/>
      <div className={'text'}>
        <div className={'title'}>Product</div>
        <div>Kontos Protocol</div>
        <div>zkLegend NFT Marketplace</div>
      </div>
    </div>
  )

}

const SubItem1 = () => {
  return (
    <div className={'sub1'}>
      <img className={'bg'} src={"static/bg2.svg"}/>
      <img className={'logo'} src={"static/logo.png"}/>
      <div className={'text'}>
        <div className={'title'}>Product</div>
        <div>White Paper</div>
        <div>Docs</div>
      </div>
      <div className={'community'}>
        <div className={'title'}>Community</div>
        <div className={'community_main'}>
          {
            communityList.map((item, index) => (
              <a key={index.toString()} className={'community_item'} href={item.href} target={'_blank'}>
                <img src={item.src}/>
              </a>
            ))
          }
        </div>
      </div>
      <div className={'copyright'}>
        <div className={'l'}>
          Contact: <span>bd@zecrey.com</span>
        </div>
        <div className={'r'}>
          Copyright @ 2022 Zecrey. All rights reserved.
        </div>
      </div>
    </div>
  )

}

export const Header = () => {
  const [openMobMenu, setOpenMobMenu] = useState(false)
  const [init, setInit] = useState(false)

  return (
    <StyleHeader>
      <div className={"styleCenter styleFlexCenterBetween"}>
        <img className={'logo'} src={"static/logo.png"}/>
        <div className={'navList styleFlexCenter'}>

          {
            navList.map((item: tNavList, index) => (
              <a
                key={index.toString()}
                className={`${item.type ? item.type + " styleFlexCenter" : ''}`}>
                {item.label}
                {
                  item.label === "Ecosystem" &&
                  <SubItem0/>
                }
                {
                  item.label === "About" &&
                  <SubItem1/>
                }
              </a>
            ))
          }
        </div>
      </div>
      <div className={`mob ${openMobMenu ? 'mobOpen' : 'mobHide'}`}>
        <img className={'logo'} src={"static/logo.png"}/>
        <div className={'productMob'}>
          <div className={'text'}>
            <div className={'title'}>Product</div>
            <div>Kontos Protocol</div>
            <div>zkLegend NFT Marketplace</div>
          </div>
          <div className={'line'} />
        </div>
        <div className={'papersMob'}>
          <div className={'text'}>
            <div className={'title'}>Papers</div>
            <div>White Paper</div>
            <div>Docs</div>
          </div>
          <div className={'line'} />
        </div>
        <div className={'communityMob'}>
          <div className={'text'}>
            <div className={'title'}>Community</div>
          </div>
          <div className={'communityMobImg'}>
            {
              communityList.map((item, index) => (
                <a key={index.toString()} className={'communityMobImgItem'} href={item.href} target={'_blank'}>
                  <img src={item.src}/>
                </a>
              ))
            }
          </div>
        </div>
        <div className={'copyright'}>
          <div>
            Contact: <span>bd@zecrey.com</span>
          </div>
          <div>
            Copyright @ 2022 Zecrey. All rights reserved.
          </div>
        </div>
      </div>
      <div className={`mobHeaderBtn ${openMobMenu ? 'open' : (init ?  'close' : '')}`} onClick={() => {
        setInit(true)
        setOpenMobMenu(!openMobMenu)
      }}>
        <div className={'l1'}></div>
        <div className={'l2'}></div>
      </div>
    </StyleHeader>
  );
};

