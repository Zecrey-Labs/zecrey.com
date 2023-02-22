import styled from "styled-components";

export const Screen2Wrap = styled.div`
 position: relative;
 height: 650px;
 overflow: hidden;
 background: #F7F7F7;

 .container {
 }

 .bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 1;
  max-height: none;
 }

 .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
 }
`

export const SecMember = styled.div`
 width: 400px;
 height: 264px;

 img {
  width: 100%;
  height: 100%;
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
`


