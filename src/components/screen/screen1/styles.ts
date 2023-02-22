import styled from "styled-components";

export const Screen1Wrap = styled.div`
 padding-top: 130px;
 overflow: hidden;
 position: relative;
 height: calc(100vh);
 .bg{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
 }
`

export const SecIntroduce = styled.div`
 margin-bottom: 80px;
 position: relative;
 z-index: 2;

 .imgBox {
  width: 110px;
  height: 108px;
  transform: translateX(-16px);
  margin-bottom: 30px;
 }

 h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  color: #1A1A1A;
  margin-bottom: 23px;
 }

 p {
  font-weight: 500;
  font-size: 28px;
  color: #4E4E4E;
 }

 .button{
  padding-top: 30px;
 }
`

export const SecCardWrap = styled.div`
 display: flex;
 justify-content: space-around;
 position: relative;
 z-index: 2;
`
