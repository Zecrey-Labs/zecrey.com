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
  
  img:nth-of-type(1){
   width: 154px;
  }
  img:nth-of-type(2){
   width: 157px;
  }
  img:nth-of-type(3){
   width: 104px;
  }
  img:nth-of-type(4){
   width: 139px;
  }
  img:nth-of-type(5){
   width: 142px;
  }
  img:nth-of-type(6){
   width: 137px;
  }
  img:nth-of-type(7){
   width: 143px;
  }
  img:nth-of-type(8){
   width: 172px;
  }
  img:nth-of-type(9){
   width: 113px;
  }
  img:nth-of-type(10){
   width: 127px;
  }
  img:nth-of-type(11){
   width: 96px;
  }
  img:nth-of-type(12){
   width: 64px;
  }
  img:nth-of-type(13){
   width: 126px;
  }
  img:nth-of-type(14){
   width: 140px;
  }
  img:nth-of-type(15){
   width: 100px;
  }
  img:nth-of-type(16){
   width: 131px;
  }
  img:nth-of-type(17){
   width: 163px;
  }
  img:nth-of-type(18){
   width: 115px;
  }
  img:nth-of-type(19){
   width: 75px;
  }
  img:nth-of-type(20){
   width: 132px;
  }
  img:nth-of-type(21){
   width: 110px;
  }
  img:nth-of-type(22){
   width: 127px;
  }
  img:nth-of-type(23){
   width: 89px;
  }
  img:nth-of-type(24){
   width: 110px;
  }
  img:nth-of-type(25){
   width: 105px;
  }
  img:nth-of-type(26){
   width: 136px;
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


