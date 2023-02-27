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
 }

 @media (max-width: 1140px) {
  padding: 30px 0 60px;
  .content{
   flex-wrap: wrap;
  }
 }
`


