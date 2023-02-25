import styled from "styled-components";

export const CardIntroStyle = styled.div`
 width: 360px;
 height: 370px;
 background: #F3F3F3;
 opacity: 0.9;
 border-radius: 15px;
 border: 1.5px solid #F3F3F3;
 padding: 32px 0 0;
 transition: all .5s;

 img {
  margin: 0 auto 42px;
 }
 
 .img0{
  width: 94px;
  height: 82px;
  margin-top: 45px;
 }
 
 .img1{
  width: 67px;
  height: 106px;
  margin-top: 26px;
 }
 
 .img2{
  width: 82px;
  height: 82px;
  margin-top: 45px;
 }
 
 p {
  text-align: center;
 }

 p.title {
  font-weight: 600;
  font-size: 21px;
  color: #1A1A1A;
  margin-bottom: 20px;
 }

 p.description {
  width: 260px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #818181;
  margin: 0 auto 15px;
  line-height: 18px;
 }

 .line {
  height: 2px;
  background: rgba(0, 0, 0, 0.15);
  width: 314px;
  margin: 0 auto 28px;
 }
 
 .btn{
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 1s;
  div{
   padding: 8px 28px;
  }
 }

 &:hover{
  border: 1.5px solid #01ABB2;
  padding: 0;
  .btn{
   opacity: 1;
  }
 }

 @media (max-width: 960px) {
  width: 100%;
  height: 370px;
  margin-bottom: 25px;
  padding: 23px 0 0px;
 }
`
