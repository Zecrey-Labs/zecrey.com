import React, { useState } from 'react'
import styled from 'styled-components';
import Hei from "./hei"

const Wrap = styled.div`
  .background{
    width: 81.9rem;
    min-height: 12.5rem;
    display:flex; 
    justify-content: space-between;  
    position: absolute;  
    top: 19.6rem;
    left: 38.5rem;
    animation: move 1.2s linear 0.2s;
  }
  @keyframes move{
    0% {
      transform: translateY(1.3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .hover-background{
    width: 10rem;
    height: 12.5rem;
    mix-blend-mode: normal;
    border-radius: 1rem;
    overflow: hidden;
  }
  .hover-background:hover{
    background: rgba(83, 82, 82, 0.753);
    /* opacity: 0.1; */
    color: #FFFFFF;
  }
  .picture{
    width: 7rem;
    height: 7rem;
    background: rgba(0, 0, 0, 0.15);
    /* border: 0.3rem solid #F1F1F1; */
    box-sizing: border-box;
    border-radius: 14px;
    margin: 0 auto;
    margin-top: 1.5rem;
    z-index: 100;
  }
  .picture img{
    width: 100%;
  }
  .word{
    text-align: center;
    margin-top: 1.5rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
    /* letter-spacing: 0.0144706rem; */
    color: #FFFFFF;
  }
  .privacy{
    min-width: 26rem;
    height: 1.6rem;
    position: absolute;
    top: 35rem;
    left: 100.7rem;
  }
  .privacy-img img{
    width: 1.4rem;
    height: 1.5rem;
    position: absolute;
    top: 0rem;
    left: 0rem;
  }
  .privacy-word{
    min-width: 19.4rem;
    height: 1.6rem;
    position: absolute;
    top: 0rem;
    left: 1.9rem;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    color: #2AD4D8;
  }
`

function BubbleCard(props) {
  const [mktype, setMktype] = useState<any>(); // Module display
  const [ys, setYs] = useState<any>(); // Module display
  let data = [{
    id: '1',
    title: "Swop",
    image: "/Bubblecard/swop.png",
    type:true,
    yangshi:"first"
  },
  {
    id: "2",
    title: "Transfer",
    image: "/Bubblecard/transfer.png",
    type:false,
    yangshi:"second"
  },
  {
    id: '3',
    title: "Defi",
    image: "/Bubblecard/defi.png",
    type:true,
    yangshi:"thirdly"
  },
  {
    id: "4",
    title: "Lock/Unlock",
    image: "/Bubblecard/lock-unlock.png",
    type:true,
    yangshi:"fourthly"
  },
  {
    id: '5',
    title: "Withdraw",
    image: "/Bubblecard/withdraw.png",
    type:true,
    yangshi: "fifth"
  }, 
  {
    id: "6",
    title: "Deposit",
    image: "/Bubblecard/deposit.png",
    type:true,
    yangshi: "sixth"
  },
  {
    id: '7',
    title: "NFT Manage",
    image: "/Bubblecard/manage.png",
    type:true,
    yangshi: "seventh"
  },                  
  ]
  const btn=(type,e)=>{
    setMktype(type)
    setYs(e)
  }
  return (
    <>
      <Wrap>
        {/* <div className='max'> */}
          <Hei mktype={mktype} ys={ys}/>
            <div className='background'>
              {data.map((item) => (
                // onMouseEnter  onMouseLeave
                <div 
                  onMouseEnter={()=>btn(item.type,item.yangshi)} 
                  onMouseLeave={()=>btn(item,item)}
                  className='hover-background' 
                  key={item.id}
                >
                  <ul>
                    <li className='picture'>
                      <img src={item.image} alt="" />
                    </li>
                    <li className='word'>{item.title}</li>
                  </ul>
                </div>
              ))}
          </div>
        {/* </div> */}
        <div className='privacy'>
          <div className='privacy-img'>
            <img src="/Bubblecard/safety.png" alt="" />
          </div>
          <span className='privacy-word'>How Zecrey protects user privacy?</span>
        </div>
      </Wrap>
    </>
  )
}

export default BubbleCard