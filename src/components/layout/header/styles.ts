import styled from "styled-components";

export const HeaderWrap = styled.div`
 position: fixed;
 left: 0;
 top: 0;
 width: 100%;
 z-index: 99;
 //transition: all .3s;
 background: rgba(255, 255, 255, 0);
 border: 1px solid rgba(0, 0, 0, 0);
 backdrop-filter: blur(0px);
`
export const HeaderContent = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 122px;
`
export const HeaderLink = styled.div`
 > div {
  display: inline-block;
  position: relative;

  a {
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   letter-spacing: -0.274286px;
   color: #000;
   cursor: pointer;
   margin: 10px 5px;
   padding: 5px 15px;
   display: inline-block;
   border-radius: 10px;
   transition: all .5s;
   text-decoration: none;
  }
  
  a:hover {
   background: rgba(0, 0, 0, 0.03);
  }

  span {
   width: 20px;
   height: 4px;
   position: absolute;
   left: 20px;
   bottom: 8px;
   background: #01ABB2;
   display: none;
  }
 }

 > div.active {
  a{
   color: #01ABB2;
  }

  span {
   display: inline-block;
  }
 }



`
