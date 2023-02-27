import styled from "styled-components";

export const CardIntroStyle = styled.div`
 width: 360px;
 height: 360px;
 background: #F3F3F3;
 mix-blend-mode: normal;
 opacity: 0.9;
 border-radius: 15px;
 transition: all .5s;
 padding: 45px;
 cursor: pointer;

 @media (max-width: 1140px) {
  height: auto;
  width: 100%;
  margin-bottom: 25px;
  padding: 32px;
 }
 

 img {
  width: 49px;
  height: 38px;
  margin-bottom: 25px;
 }
 
 img.light{
  display: block;
 }
 img.dark{
  display: none;
 }

 p.title {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #1A1A1A;
  margin-bottom: 25px;
 }

 p.description {
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 17px;
  letter-spacing: -0.2px;
  color: #747474;
 }

 .line {
  width: 35px;
  height: 2px;
  background: #E9204F;
  margin-bottom: 20px;
 }

 &:hover{
  background: #1A1A1A;
  img.light{
   display: none;
  }
  img.dark{
   display: block;
  }
  p.title {
   color: #FFFFFF;
  }
  p.description {
   color: #B0B0B0;
  }
 }

`
