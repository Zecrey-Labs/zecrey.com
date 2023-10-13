"use client";
import styled from "styled-components";
import { useState } from "react";
import {IPattern} from "../../pattern";

const StyleWraper = styled.div`
 width: 100%;
 height: 100%;
 position: fixed;
 left: 0;
 top: 0;
 z-index: 10;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 .bg{
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.5;
  background: var(--background-1);
 }
 .content{
  position: relative;
  z-index: 6;
  width: 4.68rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: .16rem;
  border: 1px solid var(--background-2);
  background: var(--background-1);
  padding: .4rem .33rem 0.2rem;
  .icoWarn{
   width: .45rem;
   margin-bottom: .1rem;
  }
  .p1{
   color: var(--zecrey-cyan);
   text-align: center;
   font-family: DINCond-Bold;
   font-size: .32rem;
   font-weight: 500;
   text-transform: uppercase;
   margin-bottom: .05rem;
  }
  .p2{
   color: var(--text);
   text-align: center;
   font-family: Arial;
   font-size: .14rem;
   font-weight: 400;
   margin-bottom: .22rem;
  }
  .p3{
   color: var(--zecrey-cyan);
   text-align: center;
   font-family: Arial;
   font-size: .14px;
   font-weight: 700;
   margin-bottom: .22rem;
  }
  .p4{
   color: var(--text);
   text-align: center;
   font-family: Arial;
   font-size: .14rem;
   font-weight: 400;
   margin-bottom: .80rem;
  }
  .btn{
   background: var(--zecrey-cyan);
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   height: .43rem;
   color: var(--background-1);
   text-align: center;
   font-family: Arial;
   font-size: .18rem;
   font-style: normal;
   font-weight: 700;
   width: 100%;
   border-radius: .08rem;
  }
  
 }
 @media (max-width: 1080px) {
  .content{
   width: auto;
   margin: 0 .16rem;
   padding: .4rem .16rem 0.16rem;
   .icoWarn{
    width: .45rem;
    height: .45rem;
   }
   .p4{
    margin-bottom: .7rem;
   }
  }
 }
`;

interface IProps{
  text: string
  match: IPattern
  setWarnShow: (boolen) => void
}

export const PopUpWaring = (props: IProps) => {
  const {
    text,
    setWarnShow,
    match
  } = props

  return (
    <StyleWraper>
      <div className={'bg'} />
      <div className={'content'}>
        <img className={'icoWarn'} src={"static/warningIco.svg"}/>
        <p className={'p1'}>Zecrey Official!</p>
        <p className={'p2'}>The content you entered is officially associated with Zecrey.</p>
        <p className={'p3'}>{text}</p>
        <p className={'p4'}>{match?.text}</p>
        <div className={'btn'} onClick={() => {
          setWarnShow(false)
        }}>
          Got it
        </div>
      </div>
    </StyleWraper>
  );
};

