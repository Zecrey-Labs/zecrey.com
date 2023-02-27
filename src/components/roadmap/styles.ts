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
    left: 43.4%;
    top: 22.8%;
    align-items: flex-end;

    .p1 {
     color: #01ABB2 !important;
     opacity: 1;
     font-size: 36px;
    }

    .p2 {
     text-align: right;
     color: #01ABB2 !important;
     opacity: 1;
    }

    .dot {
     border: 2px solid #01ABB2 !important;

     > div {
      background: #01ABB2 !important;
      opacity: 1 !important;
     }
    }
   }

   .stage3 {
    left: 74.5%;
    top: 5%;
   }
  }

 }

 .contentMob {
  @media (max-width: 1140px) {
   position: relative;
   margin: 30px 0 5px;
   .bgWrap {
    width: 2px;
    height: 465px;
    position: absolute;
    left: 0;
    top: 0;

    .bg {
     width: 100%;
     height: 100%;
    }

    .dot {
     position: absolute;
     left: -12px;
     top: 258px;
     width: 25px;
     height: 25px;
     border-radius: 13px;
     border: 2px solid #01ABB2 !important;

     > div {
      width: 13px;
      height: 13px;
      border-radius: 7px;
      background: #01ABB2 !important;
      opacity: 1 !important;
     }
    }
   }

   .stage {
    position: relative;
    align-items: flex-start;
    padding-left: 52px;
    width: auto;
    margin-bottom: 54px;

    .p1 {
     font-size: 24px;
     line-height: 34px;
     letter-spacing: 0.289412px;
     text-align: left;
    }

    .p2 {
     font-size: 14px;
     line-height: 18px;
     letter-spacing: 0.144706px;
     text-align: left;
    }
   }

   .stage2 {
    .p1 {
     color: #01ABB2 !important;
     opacity: 1;
     font-size: 36px;
     margin-bottom: 8px;
    }

    .p2 {
     color: #01ABB2 !important;
     opacity: 1;
    }

   }
  }
 }

 @media (max-width: 1140px) {
  padding: 47px 0 0px;
 }

`


export const BackersDotStyle = styled.div`
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
`

export const BackersStageStyle = styled.div`
 width: 300px;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 position: absolute;
 cursor: pointer;

 .p1 {
  font-family: "Zing Rust";
  font-style: italic;
  font-size: 24px;
  letter-spacing: 0.289412px;
  color: #343434;
  mix-blend-mode: normal;
  opacity: 0.6;
  transition: all .5s;
  font-weight: bold;
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

 &:hover {
  .p1 {
   color: #1A1A1A;
   opacity: 1;
  }

  .p2 {
   color: #B0B0B0;
   opacity: 1;
  }

  .dot {
   border: 2px solid rgba(15, 0, 50, 0.3);

   > div {
    background: #1A1A1A;
    opacity: 0.4;
   }
  }
 }
`

