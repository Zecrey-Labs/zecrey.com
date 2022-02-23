import React, { useState, useMemo } from 'react';
import { Modal, Card, Button } from 'antd';
import styled from 'styled-components';
import Image from 'next/image';

const Wrap = styled.div`
  .multifunctional{
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width: 128rem;
    height: 41rem;
    border-radius: 1rem;
    background: rgba(56, 56, 56, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    backdrop-filter: blur(2.71828rem);
  }
  .multifunctional-support{
    width: 20rem;
    height: 6rem;
    position: absolute;
    height: 6rem;
    left: 4.69%;
    right: 79.69%;
    top: calc(50% - 6rem/2 - 10.1rem);
  }
  .multifunctional-support p{
    font-family: Lexend;
    font-style: normal;
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 3rem;
    letter-spacing: 0.0289412rem; 
    color: rgba(83, 248, 255, 1);
  }
  .introduce{
    width: 81.9rem;
    height: 8rem;
    margin: 7.1rem 0 0 40rem;
  }
  .introduce p{
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #FFFFFF;
  }
  .p-introduce{
    line-height: 1.8rem;
  }
  .icon{
    width: 81.9rem;
    height: 12.5rem;
    margin: 7.5rem 0 0 40rem;
    display: flex;
    justify-content: space-between;
  }
  .icon-hover{
    width: 10rem;
    height: 12.5rem;
    text-align: center;
    &:hover{
      background: rgba(255, 255, 255, 0.3);
    }
  }
  /* .icon-hover:hover{
    background: #FFFFFF;
  } */
  .icon-img-1{
    width: 7rem;
    height: 7rem;
    background: rgba(83, 248, 255, 1);
    margin: 0 auto;
  }
  .icon-box span{
    display: inline-block;
    font-family: Lexend;
    font-style: normal;
    font-weight: 50rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
    /* color: #FFFFFF; */
    color: rgba(83, 248, 255, 1);
    margin-top: 1rem;
  }
  .privacy{
    width: 21.3rem;
    height: 1.6rem;
    margin: 2.9rem 0 0 100.7rem;
    display: flex;
    justify-content: space-between;
  }
  .privacy-icon{
    width: 1.4rem;
    height: 1.5rem;
  }
  .privacy-word{
    width: 19.4rem;
    height: 1.6rem;
  }
  .privacy-word p{
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 0.0144706rem;
    color: #2AD4D8;
  }
  .safety{
    width: 1.4rem;
    height: 1.5rem;
  }
`

function MultifunctionalSupport() {
  const list = useMemo(() => {
    return Array(6).fill({
      title: 'Swop'
    })
  }, [])

  const [isShow, setIsShow] = useState(false);

  return (
    <Wrap>
      <div className='multifunctional'>
        <div className='multifunctional-support'>
          <p>Multifunctional</p>
          <p>Support</p>
        </div>
        <Image 
          src='/public/multifunctional/Fill 1.svg'
          className='picture'
          alt='zecrey'
          layout='fill'
        />
        <div className='introduce'>
          <p className='p-introduce'>Zecrey supports an all-in-one private wallet which helps the users to manage their assets in multiple blockchains.</p>
          <p>As an layer 2 privacy cross-chain protocol based on zk-rollup, Zecrey brings cross-chain privacy to the public chain ecology,</p>
          <p>with the core characteristics of universal cross-chain bridge, high security cross-chain swap afficient privacy.</p>
        </div>
        <div className='icon'>
          {list.map((i, index) => (
            <Card title="" extra={
              <div className='icon-hover' onClick={() => setIsShow(true)}>
                <div className='icon-box' key={index}>
                  <div className='icon-img-1'></div>
                  <span>{i.title}</span>
                </div>
              </div>
            }>
            <Modal 
              title="" 
              visible={isShow} 
              onCancel={() => setIsShow(false)}
            ></Modal>
          </Card>
          ))}
        </div>
        <div className='privacy'>
          <div className='privacy-icon'>
            <img className='safety' src="/public/multifunctional/safety.png" alt="" />
          </div>
          <div className='privacy-word '>
            <p>How Zecrey protects user privacy?</p>
          </div>
        </div>
      </div>
    </Wrap>
  )
}

export default MultifunctionalSupport