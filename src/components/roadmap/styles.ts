import styled from "styled-components";

export const BackersStyle = styled.div`
 padding: 100px 0 0px;

 .content {
  width: 100%;

  .route {
   position: relative;
   width: 100%;
   height: 440px;

   .bg {
    width: 110%;
    margin-left: -5%;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
   }

   .stage {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    cursor: pointer;

    .p1 {
     font-family: 'Zing Rust Demo';
     font-style: italic;
     font-weight: 400;
     font-size: 24px;
     letter-spacing: 0.289412px;
     color: #343434;
     mix-blend-mode: normal;
     opacity: 0.6;
     transition: all .5s;
    }

    .p2 {
     font-family: 'IBM Plex Sans';
     font-style: normal;
     font-weight: 500;
     font-size: 14px;
     line-height: 18px;
     text-align: center;
     letter-spacing: 0.144706px;
     color: #898989;
     mix-blend-mode: normal;
     opacity: 0.6;
     margin-bottom: 10px;
     transition: all .5s;
    }

    .dot {
     width: 40px;
     height: 40px;
     border: 2px solid rgba(15, 0, 50, 0.2);
     border-radius: 20px;
     display: flex;
     justify-content: center;
     align-items: center;
     opacity: 1;
     transition: all .5s;

     > div {
      width: 26px;
      height: 26px;
      border-radius: 13px;
      background: #CECECE;
      opacity: 1;
      transition: all .5s;
     }
    }

    &:hover {
     .p1 {
      color: #1A1A1A;
      opacity: 1;
     }

     .p2 {
      color: #B0B0B0;
     }

     .dot {
      border: 2px solid rgba(15, 0, 50, 0.3);

      > div {
       background: #1A1A1A;
       opacity: 0.4;
      }
     }
    }
   }

   .stage0 {
    left: -.2%;
    top: 10%;
   }

   .stage1 {
    left: 36.7%;
    top: 41.5%;
    align-items: flex-start;
   }

   .stage2 {
    left: 43.1%;
    top: 26.5%;
    align-items: flex-end;

    .p2 {
     text-align: right;
    }
   }

   .stage3 {
    left: 74.5%;
    top: 5%;
   }
  }


 }
`


