import styled from "styled-components";

export const ButtonStyle = styled.div`
 display: inline-block;
 text-align: center;
 padding: 12px 26px;
 font-weight: 600;
 font-size: 18px;
 border: 1px solid #01ABB2;
 backdrop-filter: blur(2.71828px);
 border-radius: 28px;
 cursor: pointer;
 transition: all .4s;
 a{
  text-decoration: none;
  color: #01ABB2;
  transition: all .4s;
 }
 &:hover{
  background: #01ABB2;
  border: 1px solid #01ABB2;
  backdrop-filter: blur(2.71828px);
  border-radius: 28px;
  a{
   color: #fff;
  }
 }

`
