import styled from "styled-components";

export const SecTitleStyle = styled.div`
 font-family: 'Source Sans Pro';
 text-align: center;
 padding-bottom: 50px;
 .p1{
  font-weight: 700;
  font-size: 32px;
  color: #303030;
  margin-bottom: 10px;
 }
 .p2{
  font-weight: 400;
  font-size: 16px;
  color: #818181;
 }

 @media (max-width: 1140px) {
  padding-bottom: 20px;
  .p1{
   font-size: 21px;
   line-height: 26px;
   margin-bottom: 7px;
  }
  .p2{
   font-size: 12px;
   line-height: 15px;
  }
 }
`


