import styled from "styled-components";

export const ContactWrap = styled.div`
 @media (max-width: 1140px) {
  .container {
   padding: 0 10px;
  }
 }
`

export const ContactContentStyle = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 padding-bottom: 50px;
 @media (max-width: 1140px) {
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-items: center;
  justify-items: center;
 }
 @media (max-width: 767px) {
  grid-template-columns: 50% 50%;
 }
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

 a {
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

 @media (max-width: 1140px) {
  width: 160px;
  height: 160px;
  background: #F7F7F7;
  border-radius: 13px;
  padding: 20px 12px 15px;
  margin-bottom: 25px;
  img {
   width: 47px;
   height: 36px;
   margin: 0 auto 12px;
  }
  p.title {
   font-size: 12px;
   color: #3D3D3D;
   margin-bottom: 12px;
  }

  p.description {
   font-size: 12px;
  }
 }
 
 @media (max-width: 767px) {
  width: 160px;
  height: 160px;
  background: #F7F7F7;
  border-radius: 13px;
  padding: 20px 12px 15px;
  margin-bottom: 25px;
  img {
   width: 47px;
   height: 36px;
   margin: 0 auto 12px;
  }
  p.title {
   font-size: 12px;
   color: #3D3D3D;
   margin-bottom: 12px;
  }

  p.description {
   font-size: 12px;
  }
 }
`



