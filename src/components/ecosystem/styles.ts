import styled from "styled-components";

export const BackersStyle = styled.div`
 padding: 100px 0 110px;

 .container{
  padding: 0 15px;
 }
 
  
 .content {
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  >div:nth-of-type(2){
   .btn{
    transform: translateY(13px);
   }
  }

 }

 @media (max-width: 1140px) and (min-width: 768px) {
  .content{
   flex-wrap: wrap;
   display: grid;
   grid-template-columns: 32% 32% 32%;
   align-items: center;
   justify-items: center;
   p{
    width: 100%;
   }
   .line{
    width: 100%;
   }
   .img1{
    margin-top: 21px;
   }
  }
 }
 @media (max-width: 767px) {
  display: block;
  padding: 30px 0 60px;
  .content{
   flex-wrap: wrap;
  }
 }
`


