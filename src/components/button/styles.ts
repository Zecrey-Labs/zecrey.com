import styled from "styled-components";

export const ButtonStyle = styled.div`
 font-family: 'Source Sans Pro';
 font-weight: 500;
 display: inline-block;
 text-align: center;
 padding: 10px 25px;
 font-size: 18px;
 border: 1px solid #01ABB2;
 backdrop-filter: blur(2.71828px);
 border-radius: 28px;
 cursor: pointer;
 transition: all .4s;
 @media (max-width: 1140px) {
  padding: 9px 18px;
  border-radius: 19px;
  font-size: 13px;
 }
 a{
  text-decoration: none;
  color: #01ABB2;
  transition: all .4s;
 }
 &:hover{
  background: #01ABB2;
  border: 1px solid #01ABB2;
  backdrop-filter: blur(2.71828px);
  a{
   color: #fff;
  }
 }

`
