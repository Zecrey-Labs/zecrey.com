import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  .card {
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
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 0.0144706rem;
    color: #f1f1f1;
  }
  .view {
    min-width: 32rem;
    height: 1.8rem;
    position: absolute;
    height: 18px;
    left: 16rem;
    right: 41.56%;
    top: 6.8rem;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2ad2d6;
  }
  .first {
    position: absolute;
    top: 9.8rem;
    left: 19rem;
  }
  .second {
    position: absolute;
    top: 9.8rem;
    left: 37rem;
  }
  .thirdly {
    position: absolute;
    top: 9.8rem;
    left: 55rem;
  }
  .fourthly {
    position: absolute;
    top: 9.8rem;
    left: 73rem;
  }
`
function card(props) {
  const { mktype, ys } = props
  return (
    <>
      <Wrap>
        <div className={`maximum ${ys}`}>
          {mktype === true ? (
            <div className='card'>
              <div className='text'>
                <p>
                  Understand the latest progress of the project and browse the
                  technical details of the project in depth.
                </p>
              </div>
              <div className='view'>
                <p>View {'>'}</p>
              </div>
            </div>
          ) : null}
        </div>
      </Wrap>
    </>
  )
}

export default card
