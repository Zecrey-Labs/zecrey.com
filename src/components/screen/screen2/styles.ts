import styled from "styled-components";

export const Screen2Wrap = styled.div`
 position: relative;
 height: 650px;
 overflow: hidden;
 background: #F7F7F7;

 .bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 1;
  max-height: none;
 }

 .container{
  height: 100%;
 }
 .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
 }
 
 @media (max-width: 960px) {
  height: auto;
  padding-bottom: 35px;
  .bg {
   width: 200%;
  }
  .content {
   flex-wrap: wrap;
   height: auto;
  }
 }
`

export const SecMember = styled.div`
 width: 640px;
 height: 650px;
 transform: translateX(-120px);
 transition: all .4s;

 img {
  width: 100%;
  height: 100%;
 }
 @media (max-width: 960px) {
  width: auto;
  height: auto;
  transform: translateX(0);
  margin: 0 -50px;
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

 @media (max-width: 960px) {
  width: 100%;
  p{
   text-align: center;
  }
  .p1{
   font-size: 28px;
   margin-bottom: 20px;
   line-height: 32px;
  }
  .p2{
   font-size: 12px;
   line-height: 18px;
  }
 }
`


