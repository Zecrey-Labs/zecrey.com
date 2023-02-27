import styled from "styled-components";

export const FooterWrap = styled.div`
 width: 100%;
 background: #F7F7F7;
 height: auto;
overflow: hidden;
 
 .container{
  padding: 0 30px;
 }
 @media (max-width: 1140px) {
 }
 
`
export const FooterContent = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
 padding-top: 80px;
 @media (max-width: 1140px) {
  padding-top: 40px;
  display: block;
 }
`

export const FooterLink = styled.div`
 display: flex;
 justify-content: flex-start;
 align-items: flex-start;
 transform: translateX(80px);

 .linkItem {
  margin-right: 67px;

  p {
   margin-bottom: 10px;
  }

  .title {
   font-style: normal;
   font-weight: 800;
   font-size: 15px;
   color: #01ABB2;
  }

  .description {
   a {
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #505050;
    text-decoration: none;
   }

   a:hover {
    text-decoration: underline;
   }
  }
 }

 @media (max-width: 1140px) {
  transform: translateX(0px);
  flex-wrap: wrap;
  .linkItem {
   display: inline-block;
   margin-right: 0;
   width: 49.99%;
   margin-bottom: 18px;
  }
 }
`

export const FooterLine = styled.div`
 width: 100%;
 height: 1px;
 opacity: 0.1;
 background: #000000;
 margin: 40px 0px 13px;
 transition: all .4s;
 @media (max-width: 1140px) {
  margin: 15px 0px 10px;
  opacity: 0.05;
 }
`

export const FooterBottom = styled.div`
 font-family: 'IBM Plex Sans';
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-bottom: 40px;

 .l {
  font-weight: 600;
  font-size: 14px;
  color: #5A5A5A;
 }

 .r {
  span {
   font-weight: 600;
   font-size: 14px;
   color: #5A5A5A;
  }

  .s1 {
   font-family: 'Source Sans Pro';
   font-weight: 400;
   font-size: 14px;
   line-height: 18px;
   text-decoration-line: underline;
   color: #5A5A5A;
  }
  
  .s2{
   font-weight: 400;
   font-size: 14px;
   line-height: 18px;
   letter-spacing: 0.168824px;
   color: #5A5A5A;
  }

  .verticalLine {
   opacity: .1;
   color: #000000;
   margin: 0 12px;
  }
 }
`
