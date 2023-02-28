import styled from "styled-components";

export const BackersStyle = styled.div`
 background: #F7F7F7;
 padding: 100px 0 130px;

 .content {
  height: auto;
  overflow: hidden;
  width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding: 50px 0 0;
  align-items: center;
  justify-items: center;

  img {
   width: 137px;
   height: auto;
   float: left;
   margin: 0 auto 50px;
  }
  
 }

 @media (max-width: 1140px) {
  padding: 50px 0 40px;
  .container {
   padding: 0 25px;
  }

  .content {
   width: 100%;
   grid-template-columns: 50% 50%;
   padding: 23px 0 0;

   img {
    margin: 0 auto 38px;
   }
  }
 }
`


