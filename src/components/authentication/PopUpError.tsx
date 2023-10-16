"use client";
import styled from "styled-components";
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
  .main{
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
  }
  .icoWarn{
   width: .45rem;
   margin-bottom: .1rem;
  }
  p{
   a{
    color: var(--white);
    font-family: Arial;
    text-decoration-line: underline;
    cursor: pointer;
   }
   a:hover{
    color: var(--zecrey-cyan);
   }
  }
  .p1{
   color: var(--red);
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
   color: var(--red);
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
   margin-bottom: .22rem;
  }
  .p4_1{
   margin-bottom: .55rem;
  }
  .p5{
   color: var(--text);
   text-align: center;
   font-family: Arial;
   font-size: .14rem;
   font-weight: 700;
   text-decoration-line: underline;
   margin-bottom: .08rem;
  }
  .btn{
   background: var(--red);
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   height: .43rem;
   color: var(--white);
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
    margin-bottom: .22rem;
   }
   .main{
    height: 3.84rem;
    overflow-y: scroll;
   }
  }
 }
`;

interface IProps{
  text: string
  match: IPattern | false
  setErrorShow: (arg0: boolean) => void
}

export const PopUpError = (props: IProps) => {
  const {
    text,
    setErrorShow
  } = props

  return (
    <StyleWraper>
      <div className={'bg'} onClick={() => {
        setErrorShow(false)
      }} />
      <div className={'content'}>
        <div className={'main'}>
          <img className={'icoWarn'} src={"static/errorIco.svg"}/>
          <p className={'p1'}>Unofficial!</p>
          <p className={'p2'}>The content you entered is NOT officially associated with Zecrey.</p>
          <p className={'p3'}>{text}</p>
          <p className={'p4'}>Please don&apos;t trust this link and safeguard your assets and personal information. If you need to report fraud, please notify our team via our official Discord channel at <a href={'https://discord.com/invite/MdajwkVZE4'}>https://discord.com/invite/MdajwkVZE4</a> or Telegram at <a href={'https://t.me/zecrey.'}>https://t.me/zecrey.</a></p>
          <p className={'p5'}>You can review the content and re-verify it</p>
          <p className={'p4 p4_1'}>Twitter accounts can be verified by their handles which begin with&quot;@&quot;; Discord names can be verified by their username (NOT display name); Telegram users can be verified by their Telegram usernames which begin with&quot;@&quot;, or username links (e.g. <a href={'https://t.me/zecreyprotocol'}>https://t.me/zecreyprotocol</a>); please pay attention to capitalization, spaces, long and short lines, etc.</p>
        </div>
        <div className={'btn'} onClick={() => {
          setErrorShow(false)
        }}>
          Got it
        </div>
      </div>
    </StyleWraper>
  );
};

