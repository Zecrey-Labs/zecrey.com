import styled from "styled-components";

export const CardIntroStyle = styled.div`
 font-family: 'Source Sans Pro';
 width: 360px;
 a {
  text-decoration: none;
 }

 img {
  width: 360px;
  height: 180px;
  border-radius: 15px;
  margin-bottom: 10px;
 }

 p.title {
  font-size: 16px;
  line-height: 20px;
  color: #1A1A1A;
  margin-bottom: 7px;
 }

 p.time {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
 }

 .line {
 }

 @media (max-width: 1140px) {
  width: 100%;
  padding-bottom: 30px;
  img {
   width: 100%;
  }
 }

`
