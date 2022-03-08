import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  .back{
    width: 75.7rem;
    height: 12.5rem;
    position: absolute;
    top: 18.8rem;
    left: 41.8rem;
    display:flex;
    justify-content: space-between; 
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
    /* opacity: 0.1; */
    border-radius: 1rem;
    overflow: hidden;
  }
  .hover-background:hover{
    background: rgba(83, 82, 82, 0.753);
    /* background: #FFFFFF; */
     /* opacity: 0.1; */
     color: #FFFFFF;
  }
  .picture{
    width: 7rem;
    height: 7rem;
    box-sizing: border-box;
    border-radius: 14px;
    margin: 0 auto;
    margin-top: 1.5rem;
  }
  .picture img{
    width: 100%;
    height: 100%;
  }
  .word{
    text-align: center;
    margin-top: 1.5rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
    letter-spacing: 0.0144706rem;
    color: #FFFFFF;
  }
  .works{
    min-width: 19rem;
    height: 1.6rem;
    position: absolute;
    top: 35.1rem;
    left: 97.7rem;
  }
  .works-img img{
    width: 1.4rem;
    height: 1.5rem;
    position: absolute;
    top: 0rem;
    left: 0rem;
  }
  .works-word{
    min-width: 25.4rem;
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
  .works-word:hover{
    text-decoration: underline;
  }
`

function Multichainbrand() {
  let data = [{
    id: '1',
    title: "Ethereum",
    image: "/Multichainbrand/ethereum.png",
    type:true,
    yangshi:"first"
  },
  {
    id: '2',
    title: "Polygon",
    image: "/Multichainbrand/polygon.png",
    type:true,
    yangshi:"first"
  },
  {
    id: '3',
    title: "BNB Chain",
    image: "/Multichainbrand/bnbchain.png",
    type:true,
    yangshi:"first"
  },
  {
    id: '4',
    title: "NEAR",
    image: "/Multichainbrand/near.png",
    type:true,
    yangshi:"first"
  },
  {
    id: '5',
    title: "Avalanche",
    image: "/Multichainbrand/avalanche.png",
    type:true,
    yangshi:"first"
  },
  ]
  return (
    <>
      <Wrap>
        <div className='back'>
          {data.map((item) => (
            <div className='hover-background' key={item.id}>
              <ul>
                <li className='picture'>
                  <img src={item.image} alt="" />
                </li>
                <li className='word'>{item.title}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className='works'>
          <div className='works-img'>
            <img src="/Multichainbrand/shape.png" alt="" />
          </div>
          <span className='works-word'>How Zecrey Multi-chain support works?</span>
        </div>
      </Wrap>
    </>
  )
}

export default Multichainbrand