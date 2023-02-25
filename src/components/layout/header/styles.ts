import styled, {keyframes} from "styled-components";

const arrowRun = keyframes`
 0% {
  transform: rotate(0deg);
 }
 100% {
  transform: rotate(180deg);
 }
`
const arrowHide = keyframes`
 0% {
  transform: rotate(180deg);
  display: inline-block;
 }
 100% {
  transform: rotate(0deg);
  display: none;
 }
`

export const HeaderWrap = styled.div`
 position: fixed;
 left: 0;
 top: 0;
 width: 100%;
 z-index: 99;
 background: rgba(255, 255, 255, 0);
 border: 1px solid rgba(0, 0, 0, 0);
 backdrop-filter: blur(0px);

 .headerContainer {
  padding: 0 20px;
 }
 
 &.headerWrapMobile{
  background: rgba(255, 255, 255, 0.8)!important;
  mix-blend-mode: normal!important;
  border: 1px solid rgba(0, 0, 0, 0.05)!important;
  backdrop-filter: blur(25px)!important;
 }
`
export const HeaderContent = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 122px;

 > img {
  transition: all .4s;
 }

 @media (max-width: 960px) {
  height: 50px;
  > img {
   width: 66px;
   height: 23px;
   margin: 2px 0 2px;
  }
 }
`
export const HeaderLink = styled.div`
 .item {
  display: inline-block;
  position: relative;
  overflow: visible;

  > a {
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   letter-spacing: -0.274286px;
   color: #000;
   cursor: pointer;
   margin: 10px 5px;
   padding: 5px 15px;
   display: inline-block;
   border-radius: 10px;
   transition: all .4s;
   text-decoration: none;
  }

  > span {
   width: 20px;
   height: 4px;
   position: absolute;
   left: 20px;
   bottom: 8px;
   background: #01ABB2;
   display: none;
  }

  .arrow {
   display: inline-block;
   width: 7px;
   height: 11px;
   margin-left: 10px;
   transition: all .3s;
  }

  .arrowDefault {
   display: none;
  }

  .arrowHover {
   display: inline-block;
   transform: rotate(0deg);
  }

  .subMenuWrap {
   //transition: all .4s;
   display: none;
  }

 }

 @media (max-width: 960px) {
  height: 100%;
  text-align: right;
  .item {
   > a {
    font-size: 14px;
    margin: 6px 3px;
    padding: 3px 10px;
   }
  }
 }

 .itemSub {
  > a {
   cursor: pointer !important;
  }
 }

 .item.active {
  > a {
   color: #01ABB2;
  }

  > span {
   display: inline-block;
  }
 }

 .item:hover {
  > a {
   background: rgba(0, 0, 0, 0.03);
  }

  .subMenuWrap {
   display: block;
  }

  .arrowHover {
   transform: rotate(180deg);
  }
 }
`

export const HeaderSubMenu = styled.div`
 padding: 6px;
 background: #fff;
 position: absolute;
 background: rgba(255, 255, 255, 0.75);
 border: 1px solid rgba(0, 0, 0, 0.05);
 backdrop-filter: blur(40px);
 border-radius: 15px;
 height: auto;
 max-height: unset;

 a {
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  width: 168px;
  height: 38px;
  line-height: 38px;
  letter-spacing: -0.274286px;
  color: #303030;
  padding: 0 8px;
  display: block;
  border-radius: 10px;
  transition: all .2s;
 }

 a:hover {
  color: #01ABB2;
  background: rgba(0, 0, 0, 0.03);
 }
`

export const HeaderLinkMob = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 8px 5px;
 border-radius: 5px;
 transition: all .6s;

 .subIco {
  width: 18px;
  height: 12px;
  box-sizing: content-box;
 }

 &.open {
  background: rgba(0, 0, 0, 0.05);
  .subIco {
   mix-blend-mode: normal;
  }
 }

`

export const MobMenuContent = styled.div`
 position: fixed;
 left: 0;
 top: 50px;
 z-index: 99;
 width: 100%;
 height: auto;
 background: rgba(255, 255, 255, 0.8);
 mix-blend-mode: normal;
 border: 1px solid rgba(0, 0, 0, 0.05);
 backdrop-filter: blur(25px);
 border-radius: 0px 0px 10px 10px;
 transition: all .18s;
 overflow: hidden;

 ul {
  padding: 0 35px;
  li {
   border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
   >a{
    font-weight: bold;
   }
   a {
    font-size: 12px;
    line-height: 30px;
    color: #1A1A1A;
    display: block;
    width: 100%;
   }
   .subMenuWrap{
    padding-left: 5px;
   }
  }
  li:last-child{
   padding-bottom: 10px;
  }
 }
 
 .menuContactContent{
  padding: 20px 0 30px;
 }
`


