import styled from "styled-components";

export const ContactContentStyle = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 padding-bottom: 50px;
`

export const CardIntroStyle = styled.div`
 font-family: 'Source Sans Pro';
 width: 262px;
 height: 280px;
 background: #F7F7F7;
 border-radius: 25px;
 cursor: pointer;
 padding: 60px 40px 0;
 transition: all .5s;
 
 a{
  text-decoration: none;
 }

 img {
  width: 94px;
  height: 72px;
  margin: 0 auto 25px;
 }

 img.light {
  display: block;
 }

 img.dark {
  display: none;
 }

 p {
  text-align: center;
 }

 p.title {
  font-weight: 700;
  font-size: 21px;
  color: #3D3D3D;
  margin-bottom: 25px;
 }

 p.description {
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #818181;
 }

 &:hover {
  background: #1A1A1A;

  img.light {
   display: none;
  }

  img.dark {
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



