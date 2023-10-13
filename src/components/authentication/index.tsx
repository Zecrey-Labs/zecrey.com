"use client";
import styled from "styled-components";
import {IPattern, pattern} from "../../pattern";

const StyleWraper = styled.div`
 width: 100%;
 height: 100%;
 position: fixed;
 left: 0;
 top: 0;
 z-index: 2;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
  .logo{
   width: .83rem;
   height: .88rem;
   margin-bottom: .25rem;
  }
 .title{
  color: var(--zecrey-cyan);
  font-family: DINCond-Bold;
  text-align: center;
  font-weight: 500;
  margin-bottom: .5rem;
 }
 .search{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: .6rem;
  .start{
   position: absolute;
   width: .32rem;
   height: .79rem;
   right: -.3rem;
   top: -.54rem;
  }
  input{
   width: 7.85rem;
   height: .57rem;
   border: none;
   background: #fff;
   padding: .17rem .29rem;
   color: #8898A0;
   font-family: Arial;
   margin-right: .08rem;
   border-radius: .08rem;
   font-size: .18rem;
  }
  input::placeholder{
   color: #8898A0;
  }
  .btn{
   width: 1.74rem;
   height: .57rem;
   border-radius: .08rem;
   background: var(--zecrey-cyan);
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   .magnifyingGlass{
    width: .3rem;
    height: .3rem;
    margin-right: .07rem;
   }
   span{
    color: var(--background-1);
    font-family: Arial;
    font-size: .18rem;
    font-weight: 700;
   }
  }
 }
 .description{
  width: 9.66rem;
  color: var(--text);
  font-family: arial;
  font-size: .14rem;
  font-weight: 400;
  p{
   margin-bottom: .2rem;
   line-height: 1.4;
  }
 }
 .magnifyingGlassComp{
  display: block;
 }
 .magnifyingGlassMob{
  display: none;
 }

 @media (max-width: 1080px) {
  .magnifyingGlassComp{
   display: none;
  }
  .magnifyingGlassMob{
   display: block;
  }
  .logo{
   width: .47rem;
   height: .50rem;
  }
  .title{
   font-size: .36rem;
  }
  .search{
   width: 100%;
   padding: 0 .25rem;
   margin-bottom: .4rem;
   input{
    height: .45rem;
    font-size: .14rem;
    padding: .14rem .18rem;
    flex: 1;
   }
   .btn{
    width: .63rem;
    height: .45rem;
    overflow: hidden;
    .magnifyingGlassMob{
     width: 100%;
     height: 100%;
     margin-right: 0;
    }
    span{
     display: none;
    }
   }
   .start{
    width: .18rem;
    height: .45rem;
    right: 0.05rem;
    top: -0.3rem;
   }
  }
  .description{
   padding: 0 .25rem;
   font-size: .12rem;
   width: 100%;
   text-align: center;
   p{
    margin-bottom: .15rem;
   }
  }
 }
`;

interface IProps{
  text: string
  setText: (arg0: string) => void
  setShowTask: (arg0: boolean) => void
  setMatch: (arg0: IPattern | false) => void
}

export const Authentication = (props: IProps) => {
  const {
    text,
    setText,
    setShowTask,
    setMatch,
  } = props

  return (
    <StyleWraper>
      <img className={'logo'} src={"static/logo.svg"}/>
      <p className={'title'}>ZECREY LABS OFFICIAL LINK AUTHENTICATOR</p>
      <div className={'search'}>
        <input value={text} onChange={(e) => {
          setText(e.target.value)
        }} placeholder={'Please enter the content to verify'} />
        <div className={'btn'} onClick={() => {
          const match = pattern.find((item) => (
            item.rule.find((item1) => (
              text.indexOf(item1) !== -1
            ))
          ))
          setMatch(match || false)
          setShowTask(true)
        }}>
          <img className={'magnifyingGlass magnifyingGlassComp'} src={"static/magnifyingGlass.svg"}/>
          <img className={'magnifyingGlass magnifyingGlassMob'} src={"static/magnifyingGlassMobile.svg"}/>
          <img className={'start'} src={"static/icoStar.png"}/>
          <span>
            Verify
          </span>
        </div>
      </div>
      <div className={'description'}>
        <p>To prevent fraud, we have developed an authenticator tool for users to verify if a link, Twitter account, Telegram channel, Telegram group, Discord server or team member account is officially affiliated with Zecrey. The content that can be authenticated includes links, Twitter, Discord, Telegram, Medium, YouTube, and more.</p>
        <p>We advise all users to stay vigilant and carefully verify sources before interacting or providing any personal information. Please rely only on our official Zecrey announcements and channels. Report any suspicious activity or misuse of the Zecrey name to our team.</p>
      </div>
    </StyleWraper>
  );
};

