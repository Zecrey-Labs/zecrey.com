"use client";
// import { useRouter } from "next/router";
import styled from "styled-components";
import {useState, useEffect, ReactNode} from "react";
// import SubtractSvg from "../../svg/community/Subtract.svg"
import config from "../../config"

const StyleHeader = styled.div`
 position: fixed;
 width: 100%;
 height: .95rem;
 padding-top: .34rem;
 z-index: 3;

 .com {
  display: block;
 }

 .mob {
  display: none;
 }

 .logo {
  width: 2.62rem;
  height: .61254rem;
 }

 .navList {
  max-height: none;

  > a {
   max-height: none;
   font-family: Arial;
   font-style: normal;
   font-weight: 700;
   font-size: .18rem;
   color: var(--white, #FFF);
   margin-left: .94rem;
   cursor: pointer;
   position: relative;
   &:hover{
    color: var(--zecrey-cyan);
   }

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
     background: url("static/bg1.svg");
     background-size: 100% 100%;
     backdrop-filter: blur(.1rem);
     -webkit-backdrop-filter: blur(.1rem);
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

     > div, > a {
      display: block;
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
     background: url("static/bg2.svg");
     background-size: 100% 100%;
     backdrop-filter: blur(.1rem);
     -webkit-backdrop-filter: blur(.1rem);
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

     > a, > div {
      display: block;
      color: var(--white, #FFF);
      margin: 0 0 .07rem 0;
      font-family: Arial;
      font-size: .16rem;
      font-style: normal;
      font-weight: 400;

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
     left: 4.24rem;
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

       svg {
        width: 100%;
        height: 100%;
        display: block;
       }

       &:hover {
        svg {
         path {
          fill: var(--zecrey-cyan);
         }
        }
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

     a {
      max-height: 100%;
      color: var(--white);
      &:hover{
       color: var(--zecrey-cyan);
      }
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
  .com {
   display: none;
  }

  .styleCenter {
   width: 100%;
  }

  .logo {
   width: 1.32rem;
   height: .31rem;
   flex-shrink: 0;
  }

  .navList {
   display: none;
  }

  .mobWrap{
   height: auto;
   max-height: 100%;
   overflow-y: scroll;

  }
  .mob {
   //display: none;
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   //height: 100%;
   //min-height: 6.67rem;
   //max-height: initial;
   //height: auto;
   height: 100%;
   overflow-y: scroll;
   background: #171818;
   z-index: 1;
   padding: 0.8rem 0.24rem 0;

   .logo {
    position: absolute;
    left: .24rem;
    top: .2rem;
   }

   .line {
    width: auto;
    height: 1px;
    background: var(--background-2);
    margin-bottom: .21rem;
   }

   .productMob, .papersMob, .communityMob {
    padding: 0 .31rem;

    .text {
     div, > a {
      display: block;
      color: var(--white);
      font-family: Arial;
      font-size: .16rem;
      font-style: normal;
      font-weight: 400;
      margin-bottom: .21rem;
      padding-top: .03rem;
     }

     .title {
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
     border-radius: .14rem;

     svg {
      width: 100%;
      height: 100%;
      display: block;
     }

     &:hover {
      svg {
       path {
        fill: var(--zecrey-cyan);
       }
      }
     }
    }

   }

   .copyright {
    color: var(--text);
    font-family: Arial;
    font-size: .14rem;
    font-weight: 400;
    //padding-left: .55rem;
    padding-left: .31rem;
    padding-top: .9rem;
    //position: absolute;
    //left: 0;
    //bottom: .1rem;
    width: 100%;

    > div {
     margin-bottom: .08rem;
    }

    a {
     color: var(--white);
    }
   }
  }

  .mobOpen {
   display: block;
   animation: aniMobMenuShow .2s;
   transform-origin: center;
   animation-iteration-count: 1;
   animation-timing-function: linear;
   animation-fill-mode: forwards;
  }

  .mobHide {
   display: block;
   animation: aniMobMenuHide .2s;
   transform-origin: center;
   animation-iteration-count: 1;
   animation-timing-function: linear;
   animation-fill-mode: forwards;
  }

  .mobHeaderBtn {
   position: fixed;
   //transition: all .3s;
   right: .20rem;
   top: .26rem;
   z-index: 11;

   .l1 {
    width: .25rem;
    height: .02rem;
    background: #fff;
    margin-bottom: .05rem;
   }

   .l2 {
    width: .25rem;
    height: .02rem;
    background: #fff;
   }

   &.open {
    right: .23rem;
    top: .26rem;
    animation: aniOpenMobMenu0 .2s;
    transform-origin: center;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    .l1 {
     animation: aniOpenMobMenu1 .2s;
     transform-origin: center;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .l2 {
     animation: aniOpenMobMenu2 .2s;
     transform-origin: center;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }
   }

   &.close {
    right: .20rem;
    top: .26rem;
    animation: aniOpenMobMenu0_1 3s;
    transform-origin: center;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    .l1 {
     animation: aniOpenMobMenu1_1 .2s;
     transform-origin: center;
     animation-iteration-count: 1;
     animation-timing-function: linear;
     animation-fill-mode: forwards;
    }

    .l2 {
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

interface tProductList {
  label: string;
  url: string;
}

interface tCommunityList {
  ele: () => ReactNode;
  href: string;
}

const navList: tNavList[] = [
  {label: "Ecosystem", url: ""},
  {label: "About", url: ""},
  {label: "Join Community", url: "https://discord.com/invite/MdajwkVZE4", type: "btn"},
];

const ecoProductList: tProductList[] = [
  {label: "Kontos Protocol", url: "https://www.kontos.io/"},
  {label: "zkLegend NFT Marketplace", url: ""},
];

const productList: tProductList[] = [
  {label: "White Paper", url: "https://docsend.com/view/ntcsmt7meu84gcqk"},
  {label: "Docs", url: "https://docs.zecrey.com/"},
];

const communityList: tCommunityList[] = [
  {
    ele: () => (
      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14 28.48C21.732 28.48 28 22.212 28 14.48C28 6.74799 21.732 0.47998 14 0.47998C6.26801 0.47998 0 6.74799 0 14.48C0 22.212 6.26801 28.48 14 28.48ZM17.4583 20.01L18.5349 21.3313C22.1913 21.1286 23.5266 18.8518 23.5266 18.8518C23.5266 13.5991 21.1776 9.34145 21.1776 9.34145C18.8286 7.57967 16.5937 7.62861 16.5937 7.62861L16.3654 7.88961C19.1385 8.73787 20.4272 9.96133 20.4272 9.96133C18.7307 9.0315 17.0668 8.57475 15.5171 8.39531C14.3426 8.2648 13.217 8.29743 12.2219 8.42793L11.9446 8.46056C11.3737 8.5095 9.98707 8.72156 8.24161 9.48826L7.27915 9.96133C7.27915 9.96133 8.63311 8.67262 11.5694 7.82436L11.4063 7.62861C11.4063 7.62861 9.17143 7.57967 6.8224 9.34145C6.8224 9.34145 4.47336 13.5991 4.47336 18.8518C4.47336 18.8518 5.84363 21.2171 9.44875 21.3313L10.5417 19.9774C8.46998 19.3575 7.68697 18.0525 7.68697 18.0525L8.14373 18.3298L8.20898 18.3787L8.27423 18.416L8.29054 18.423L8.35579 18.4603C8.76361 18.6886 9.17143 18.8681 9.54662 19.0149C10.2154 19.2759 11.0148 19.5369 11.9446 19.7164C13.1681 19.9447 14.6036 20.0263 16.1696 19.7327C16.9363 19.6022 17.7193 19.3738 18.5349 19.0312C19.1059 18.8191 19.7421 18.5092 20.4109 18.0688C20.4109 18.0688 19.5953 19.4064 17.4583 20.01ZM9.2857 15.5238C9.2857 14.5287 10.0198 13.713 10.9496 13.713C11.8794 13.713 12.6298 14.5287 12.6135 15.5238C12.6135 16.5188 11.8794 17.3345 10.9496 17.3345C10.0361 17.3345 9.2857 16.5188 9.2857 15.5238ZM15.2399 15.5238C15.2399 14.5287 15.9739 13.713 16.9038 13.713C17.8336 13.713 18.5677 14.5287 18.5677 15.5238C18.5677 16.5188 17.8336 17.3345 16.9038 17.3345C15.9902 17.3345 15.2399 16.5188 15.2399 15.5238Z"
              fill="white"/>
      </svg>
    ),
    href: "https://discord.com/invite/MdajwkVZE4"
  },
  // {
  //   ele: () => (
  //     <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <path d="M14 0C6.26967 0 0 6.24844 0 13.9552C0 20.1211 4.011 25.352 9.57483 27.1975C10.2737 27.3266 10.5 26.894 10.5 26.5265V23.9285C6.60567 24.7728 5.79483 22.2818 5.79483 22.2818C5.15783 20.6688 4.23967 20.2397 4.23967 20.2397C2.96917 19.3733 4.3365 19.3919 4.3365 19.3919C5.74233 19.4896 6.482 20.8305 6.482 20.8305C7.73033 22.9633 9.75683 22.3469 10.556 21.9899C10.6808 21.0886 11.0437 20.4723 11.445 20.1246C8.33583 19.7699 5.06683 18.5732 5.06683 13.2272C5.06683 11.7026 5.614 10.4583 6.50883 9.4814C6.36417 9.12903 5.88467 7.70909 6.64533 5.78792C6.64533 5.78792 7.82133 5.41346 10.4965 7.21833C11.613 6.90899 12.81 6.75432 14 6.74851C15.19 6.75432 16.3882 6.90899 17.507 7.21833C20.1798 5.41346 21.3535 5.78792 21.3535 5.78792C22.1153 7.71025 21.6358 9.13019 21.4912 9.4814C22.3895 10.4583 22.932 11.7038 22.932 13.2272C22.932 18.5872 19.6572 19.7675 16.5398 20.1129C17.0415 20.5456 17.5 21.3945 17.5 22.697V26.5265C17.5 26.8975 17.724 27.3336 18.4345 27.1964C23.9937 25.3485 28 20.1188 28 13.9552C28 6.24844 21.7315 0 14 0Z" fill="white"/>
  //     </svg>
  //   ),
  //   href: "https://www.github.com"
  // },
  {
    ele: () => (
      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14 28.48C21.732 28.48 28 22.212 28 14.48C28 6.74799 21.732 0.47998 14 0.47998C6.26801 0.47998 0 6.74799 0 14.48C0 22.212 6.26801 28.48 14 28.48ZM9.59226 20.6935C12.742 20.6935 15.2954 18.0818 15.2954 14.8602C15.2954 11.6386 12.7422 9.0268 9.59226 9.0268C6.44237 9.0268 3.88889 11.6392 3.88889 14.8602C3.88889 18.0813 6.44256 20.6935 9.59226 20.6935ZM21.552 14.8603C21.552 17.8928 20.2753 20.352 18.7003 20.352C17.1254 20.352 15.8486 17.8928 15.8486 14.8603C15.8486 11.8279 17.1252 9.3686 18.7001 9.3686C20.2751 9.3686 21.5518 11.8271 21.5518 14.8603H21.552ZM23.1082 19.78C23.6622 19.78 24.1111 17.5766 24.1111 14.8603C24.1111 12.1431 23.662 9.94054 23.1082 9.94054C22.5544 9.94054 22.1054 12.1433 22.1054 14.8603C22.1054 17.5772 22.5542 19.78 23.1082 19.78Z"
              fill="white"/>
      </svg>
    ),
    href: "https://zecrey.medium.com"
  },
  {
    ele: () => (
      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14 0.47998C6.26967 0.47998 0 6.74731 0 14.48C0 22.2115 6.26967 28.48 14 28.48C21.7315 28.48 28 22.2115 28 14.48C28 6.74731 21.7315 0.47998 14 0.47998ZM17.7613 21.3295C17.9807 21.4846 18.263 21.5231 18.515 21.4286C18.7658 21.333 18.9513 21.1171 19.0073 20.8558C19.5988 18.0768 21.0338 11.0418 21.5717 8.51481C21.6125 8.32348 21.5448 8.12515 21.3955 7.99798C21.245 7.87081 21.0373 7.83465 20.853 7.90231C17.9993 8.95931 9.21083 12.2563 5.61867 13.5851C5.39117 13.6703 5.243 13.8885 5.25 14.13C5.25817 14.3703 5.42033 14.5791 5.65367 14.6491C7.26483 15.131 9.37883 15.8018 9.37883 15.8018C9.37883 15.8018 10.367 18.7861 10.8815 20.3028C10.9468 20.4941 11.0962 20.6435 11.2922 20.6948C11.4893 20.7461 11.6982 20.6925 11.8452 20.5536C12.6723 19.7731 13.951 18.5656 13.951 18.5656C13.951 18.5656 16.3823 20.3471 17.7613 21.3295ZM10.2678 15.4238L11.4112 19.1933L11.6655 16.8063C11.6655 16.8063 16.079 12.8245 18.5967 10.5553C18.6702 10.4888 18.6795 10.3768 18.6188 10.2986C18.5582 10.2205 18.4462 10.2018 18.3633 10.2555C15.4467 12.1175 10.2678 15.4238 10.2678 15.4238Z"
              fill="white"/>
      </svg>
    ),
    href: "https://t.me/ZecreyAnnouncement"
  },
  {
    ele: () => (
      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 0.47998C6.2685 0.47998 0 6.74848 0 14.48C0 22.2115 6.2685 28.48 14 28.48C21.7315 28.48 28 22.2115 28 14.48C28 6.74848 21.7315 0.47998 14 0.47998ZM21.077 11.7325C21.2905 16.4458 17.7753 21.7005 11.5523 21.7005C9.66 21.7005 7.8995 21.1451 6.41667 20.1943C8.19467 20.4043 9.96917 19.9096 11.3773 18.8071C9.912 18.7803 8.67417 17.8108 8.246 16.4796C8.77217 16.58 9.29017 16.5508 9.76033 16.4225C8.14917 16.0981 7.03617 14.6468 7.07233 13.094C7.525 13.3448 8.04067 13.4953 8.59017 13.5128C7.098 12.5153 6.67567 10.5448 7.553 9.03865C9.205 11.0663 11.6748 12.3998 14.4597 12.5398C13.9708 10.4445 15.561 8.42498 17.7252 8.42498C18.6877 8.42498 19.5592 8.83215 20.1705 9.48315C20.9335 9.33381 21.6522 9.05381 22.2985 8.66998C22.0477 9.45281 21.5168 10.1085 20.825 10.5238C21.5028 10.4421 22.1492 10.2625 22.7488 9.99531C22.3008 10.6696 21.7338 11.26 21.077 11.7325Z"
          fill="white"/>
      </svg>
    ),
    href: "https://twitter.com/ZecreyLabs"
  },
]

const SubItem0 = () => {
  return (
    <div className={'sub'}>
      <div className={'bg'} />
      <img className={'logo'} src={"static/logo.png"}/>
      <div className={'text'}>
        <div className={'title'}>Product</div>
        {
          ecoProductList.map((item, index) => (
            <a
              key={index.toString()}
              style={{
                cursor: item.url === '' ? 'not-allowed' : 'pointer'
              }}
              href={item.url === '' ? undefined : item.url}
              target={'_blank'}
            >
              {item.label}
            </a>
          ))
        }
      </div>
    </div>
  )

}

const SubItem1 = () => {
  return (
    <div className={'sub1'}>
      <div className={'bg'} />
      <img className={'logo'} src={"static/logo.png"}/>
      <div className={'text'}>
        <div className={'title'}>Product</div>
        {
          productList.map((item, index) => (
            <a
              key={index.toString()}
              href={item.url}
              target={'_blank'}
            >
              {item.label}
            </a>
          ))
        }
      </div>
      <div className={'community'}>
        <div className={'title'}>Community</div>
        <div className={'community_main'}>
          {
            communityList.map((item, index) => (
              <a key={index.toString()} className={'community_item'} href={item.href} target={'_blank'}>
                {item.ele()}
              </a>
            ))
          }
        </div>
      </div>
      <div className={'copyright'}>
        <div className={'l'}>
          Contact: <a href={'mailto:' + config.mail}>{config.mail}</a>
        </div>
        <div className={'r'}>
          Copyright © 2023 Zecrey. All rights reserved.
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
                className={`${item.type ? item.type + " styleFlexCenter" : ''}`}
                href={item.url === '' ? undefined : item.url}
                target={'_blank'}
              >
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
      {
        init &&
        <div className={`mob ${openMobMenu ? 'mobOpen' : 'mobHide'}`}>
          <img className={'logo'} src={"static/logo.png"}/>
          <div className={'productMob'}>
            <div className={'text'}>
              <div className={'title'}>Product</div>
              {
                ecoProductList.map((item, index) => (
                  <a
                    key={index.toString()}
                    style={{
                      cursor: item.url === '' ? 'not-allowed' : 'pointer'
                    }}
                    href={item.url === '' ? undefined : item.url}
                    target={'_blank'}
                  >
                    {item.label}
                  </a>
                ))
              }
            </div>
            <div className={'line'}/>
          </div>
          <div className={'papersMob'}>
            <div className={'text'}>
              <div className={'title'}>Papers</div>
              {
                productList.map((item, index) => (
                  <a key={index.toString()} href={item.url} target={'_blank'}>
                    {item.label}
                  </a>
                ))
              }
            </div>
            <div className={'line'}/>
          </div>
          <div className={'communityMob'}>
            <div className={'text'}>
              <div className={'title'}>Community</div>
            </div>
            <div className={'communityMobImg'}>
              {
                communityList.map((item, index) => (
                  <a key={index.toString()} className={'communityMobImgItem'} href={item.href} target={'_blank'}>
                    {item.ele()}
                  </a>
                ))
              }
            </div>
          </div>
          <div className={'copyright'}>
            <div>
              Contact: <a href={'mailto:' + config.mail}>{config.mail}</a>
            </div>
            <div>
              Copyright © 2023 Zecrey. All rights reserved.
            </div>
          </div>
        </div>
      }
      <div className={`mobHeaderBtn ${openMobMenu ? 'open' : (init ? 'close' : '')}`} onClick={() => {
        setInit(true)
        setOpenMobMenu(!openMobMenu)
      }}>
        <div className={'l1'}></div>
        <div className={'l2'}></div>
      </div>
    </StyleHeader>
  );
};

