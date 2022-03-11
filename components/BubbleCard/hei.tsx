import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  /* .maximum{
    width: 81.9rem;
  } */
  .card-button {
    width: 36.5rem;
    height: 13rem;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.85;
    border-radius: 1rem;
    overflow: hidden;
  }
  .introduce {
    width: 33.8rem;
    height: 4.8rem;
    margin: 2rem 0 0 2rem;
    overflow: hidden;
  }
  .introduce p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #f1f1f1;
  }
  .card {
    width: 36.5rem;
    height: 8.5rem;
    background: #000000;
    mix-blend-mode: normal;
    /* opacity: 0.85; */
    border-radius: 1rem;
    overflow: hidden;
  }
  .intr {
    width: 33.8rem;
    height: 4.8rem;
    /* background: #2AD2D6; */
    margin: 1.8rem 0 0 2rem;
  }
  .intr p {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #f1f1f1;
  }
  .button {
    width: 32.5rem;
    height: 3.5rem;
    border-radius: 0.6rem;
    margin: 0 auto;
    margin-top: 0.7rem;
  }
  .button p {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 3.5rem;
    letter-spacing: 0.0168824rem;
    color: #2ad2d6;
    text-align: center;
  }
  .button:hover {
    background: #2ad2d6;
  }
  .button:hover p {
    color: #000000;
  }
  .first {
    position: absolute;
    top: 5.1rem;
    left: 25rem;
  }
  .second {
    position: absolute;
    top: 10.1rem;
    left: 37rem;
  }
  .thirdly {
    position: absolute;
    top: 5.1rem;
    left: 49rem;
  }
  .fourthly {
    position: absolute;
    top: 5.1rem;
    left: 61rem;
  }
  .fifth {
    position: absolute;
    top: 5.1rem;
    left: 73rem;
  }
  .sixth {
    position: absolute;
    top: 5.1rem;
    left: 85rem;
  }
  .seventh {
    position: absolute;
    top: 5.1rem;
    left: 97rem;
  }
`

function BubbleCard(props) {
  // const [conceal, setconceal] = useState(true);
  const { mktype, ys } = props

  useEffect(() => {
    console.log('样式', ys)
  }, [ys])

  return (
    <>
      <Wrap>
        <div className={`maximum ${ys}`}>
          {mktype === true ? (
            <div className='card-button'>
              <ul>
                <li className='introduce'>
                  <p>
                    Through simple, secure, and scalable technology, NEAR
                    empowers millions to invent and explore new experiences.
                    Business, creativity, and community are being reimagined.
                  </p>
                </li>
                <li className='button'>
                  <p>Get Started {'>'}</p>
                </li>
              </ul>
            </div>
          ) : null}
          {mktype === false ? (
            <div className='card'>
              <ul>
                <li className='intr'>
                  <p>
                    Through simple, secure, and scalable technology, NEAR
                    empowers millions to invent and explore new experiences.
                    Business, creativity, and community are being reimagined.
                  </p>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </Wrap>
    </>
  )
}

export default BubbleCard
