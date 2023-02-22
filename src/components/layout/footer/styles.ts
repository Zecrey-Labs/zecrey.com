import styled from "styled-components";

export const FooterWrap = styled.div`
 width: 100%;
 height: 300px;
 background: #F7F7F7;
`
export const FooterContent = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
 padding-top: 80px;
`

export const FooterLink = styled.div`
 display: flex;
 justify-content: flex-start;
 align-items: flex-start;
 transform: translateX(80px);

 .linkItem {
  margin-right: 95px;

  p {
   margin-bottom: 10px;
  }

  .title {
   font-style: normal;
   font-weight: 800;
   font-size: 16px;
   color: #01ABB2;
  }

  .description {
   a {
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

`

export const FooterLine = styled.div`
 width: 100%;
 height: 1px;
 opacity: 0.1;
 background: #000000;
 margin: 40px 0px 10px;
`

export const FooterBottom = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;

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
   font-weight: 400;
   font-size: 14px;
   line-height: 18px;
   text-decoration-line: underline;
   color: #5A5A5A;
  }

  .verticalLine {
   opacity: .1;
   color: #000000;
   margin: 0 12px;
  }
 }
`
