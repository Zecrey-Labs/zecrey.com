import React, { useState } from 'react'
import styled from 'styled-components';
import Card from './card'

const Wrap = styled.div`
  .communtity{
    width: 128rem;
    height: 41rem;
    background: rgba(56, 56, 56, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    backdrop-filter: blur(2.71828rem);
    border-radius: 1rem;
    position: relative;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .headline{
    width: 21.8rem;
    height: 3rem;
    position: absolute;
    left: 41.48%;
    right: 41.48%;
    top: calc(50% - 3rem/2 - 16rem);
    font-family: Lexend;
    font-style: normal;
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 3rem;
    letter-spacing: 0.0289412rem;
    color: rgba(0, 182, 186, 1);
  }
  .introduce{
    width: 99.2rem;
    height: 8.6rem;
    position: absolute;
    left: 11.25%;
    right: 11.25%;
    top: 28.05%;
    bottom: 55.37%;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.1rem;
    text-align: center;
    letter-spacing: 0.0192941rem;
    color: #FFFFFF;
  }
  .circle{
    width: 38.398rem;
    height: 38.385rem;
    position: absolute;
    left: 35%;
    right: 35%;
    top: 58.05%;
    bottom: -51.67%;
    /* background: rgba(255, 255, 255, 0.05); */
  }
  .circle img{
    display: block;
    width: 38.398rem;
  }
  .software{
    width: 67.4rem;
    height: 13rem;
    position: absolute;
    top: 22.3rem;
    left: 30.3rem;
    display:flex; 
    justify-content:  space-between; 
  }
  .software-background{
    width: 13rem;
    height: 13rem;
    mix-blend-mode: normal;
    border-radius: 1rem;
    transform: translateX(0rem); 
    transform:translate3d(0rem 0 0 10rem);
  }
  .software-background:hover{
    background: rgba(83, 82, 82, 0.753);
    /* opacity: 0.1; */
  }
  .software-li{
    width: 6.7rem;
    height: 5.4rem;
    /* background: #FFFFFF; */
    margin: 0 auto;
    margin-top: 2.8rem;
    z-index: 10;
  }
  .software-li img{
    width: 100%;
  }
  .medium{
    height: 5.6rem;
  }
  .discord{
    height: 6.4rem;
  }
  .software-p{
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #FFFFFF;
    text-align: center;
    margin-top: 1.5rem;
  }

  .card{
    width: 36.5rem;
    height: 11.5rem;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.85;
    border-radius: 1rem;
    position: relative;
  }
  .text {
    width: 33.8rem;
    height: 3.3rem;
    position: absolute;
    left: 2rem;
    right: 28.59%;
    top: 2rem;
    bottom: 63.17%;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 0.0144706rem;
    color: #F1F1F1;
  }
  .view{
    min-width: 32rem;
    height: 1.8rem; 
    position: absolute;
    height: 18px;
    left: 16rem;
    right: 41.56%;
    top: 6.8rem;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2AD2D6;
  }
`

function Communtity(props) {
  const [mktype, setMktype] = useState<any>();
  const [ys, setYs] = useState<any>();
  // const [minka, setMinka] = useState(true) 
  let data = [{
       id: '1',
       title: "Twitter",
       "image": '/communtity/twitter.png',
       type:true,
       yangshi: "first" 
    },
    {
      id: '2',
      title: "Telegram",
      image: '/communtity/telegram.png',
      type:true,
      yangshi: "second" 
    },
    {
      id: '3',
      title: "Medium",
      image: '/communtity/medium.png',
      type:true,
      yangshi: "thirdly" 
    },
    {
      id: '4',
      title: "Discord",
      image: '/communtity/discord.png',
      type:true,
      yangshi: "fourthly" 
    },
  ]
  const btn=(type,e)=>{
    setMktype(type)
    setYs(e)
  }
  return (
    <>
      <Wrap>
        <div className='communtity'>
          <div className='headline'>
            <p>Join Communtity</p>
          </div>
          <div className='introduce'>
            <p>Zecrey is committed to promoting the globalization of projects. To this end, we have established communities on different platforms. In the community, you can communicate with zecrey users all over the world, get the latest progress of the project progress, understand the technical principles, and even discuss the technical details with the development team.</p>
          </div>
          <div className='circle'>
            <img src="/communtity/circle.png" alt=""/>
          </div>
          <div className='software'>
            {data.map((item) => (
              // onMouseEnter  onMouseLeave
              <div className='software-background' 
                onMouseEnter={()=>btn(item.type,item.yangshi)}
                onMouseLeave={()=>btn(item,item)}
                key={item.id}
              >
                <ul className='software-ul'>
                  <li className='software-li'>
                    <img src={item.image} alt="" />
                  </li>
                  <p className='software-p'>{item.title}</p>
                </ul>
              </div>
            ))}
          </div>
          <Card mktype={mktype} ys={ys}/>
        </div>
      </Wrap>
    </>
  )
}

export default Communtity