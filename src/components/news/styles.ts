import styled from "styled-components";

export const NewsContentStyle = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 @media (max-width: 1140px) {
  display: block;
 }
`

export const NewsContentBtnWrap = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 40px 0 60px;
 >div{
  padding: 8px 30px;
 }
 @media (max-width: 1140px) {
  padding: 10px 0 40px;
 }
`

export const NewsContentLine = styled.div`
 width: 100%;
 height: 1px;
 background: #000;
 opacity: 0.1;
 margin-bottom: 80px;
`


