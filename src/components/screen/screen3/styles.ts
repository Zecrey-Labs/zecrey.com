import styled from "styled-components";

export const Screen3Wrap = styled.div`
 font-family: "Source Sans Pro";
 position: relative;
 height: 650px;
 overflow: hidden;

 .bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 1;
  max-height: none;
 }

 .container {
  height: 100%;
  position: relative;
 }

 .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
  min-height: 650px;
 }
 
 @media (max-width: 1140px) {
  height: auto;
  .content {
   padding: 0 0 40px;
   min-height: auto;
  }
 }
`

export const SecBg = styled.div`
 overflow: hidden;
 position: absolute;
 right: 0;
 top: 0;
 width: 650px;
 height: auto;
 z-index: 1;
 transform: translateX(150px);
 transition: all .4s;

 img {
  width: 100%;
  height: auto;
  margin: 0 auto;
 }

 @media (max-width: 1140px) {
  overflow: visible;
  position: relative;
  width: auto;
  transform: translateX(0);
  margin: 0 -50px;
  img {
   width: 100%;
   height: auto;
  }
 }
`

export const SecIntroduce = styled.div`
 width: 579px;

 .p1 {
  font-weight: 700;
  font-size: 38px;
  line-height: 42px;
  color: #303030;
  margin-bottom: 30px;
 }

 .p2 {
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #818181;
  margin-bottom: 25px;
 }

 .btn{
  >div{
   padding: 8px 24px;
  }
 }

 @media (max-width: 1140px) {
  width: 100%;
  .p1 {
   font-size: 28px;
   line-height: 32px;
   text-align: center;
   margin: 0 -10px 17px;
  }

  .p2 {
   font-size: 12px;
   line-height: 18px;
   text-align: center;
  }
  .btn{
   display: flex;
   justify-content: center;
   align-items: center;
  }
 }
`


