import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  .bottom {
    /* width: 144rem; */
    height: 30.5rem;
    background: rgba(42, 42, 42, 0.5);
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(50px);
    position: relative;
    margin: 0 auto;
  }
  .bottom-center {
    width: 116rem;
    height: 30.5rem;
    margin: 0 auto;
    position: relative;
  }
  .skink {
    width: 20.9rem;
    height: 7.9rem;
    position: absolute;
    left: 0rem;
    top: 7.6rem;
  }
  .skink img {
    width: 20.9rem;
    height: 7.9rem;
  }
  .head-li {
    color: #2ad2d6;
    font-weight: 800;
  }
  .apps li,
  .explorer li,
  .development li,
  .papers li {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #e4e4e4;
  }
  li {
    margin-bottom: 1.2rem;
  }
  .apps {
    min-width: 9.2rem;
    height: 10.6rem;
    position: absolute;
    top: 6rem;
    left: 43.5rem;
  }

  .explorer {
    min-width: 12.9rem;
    height: 7.8rem;
    position: absolute;
    top: 6rem;
    left: 63.8rem;
  }
  .development {
    min-width: 11.1rem;
    height: 7.8rem;
    position: absolute;
    top: 6rem;
    left: 87.8rem;
  }
  .papers {
    min-width: 7.9rem;
    height: 7.8rem;
    position: absolute;
    top: 6rem;
    left: 108.1rem;
  }
  .underline {
    width: 116rem;
    height: 0.1rem;
    position: absolute;
    left: 0rem;
    top: 20.7rem;
    mix-blend-mode: normal;
    opacity: 0.2;
    border: 0.1rem solid #ffffff;
    background: #ffffff;
  }
  .zecrey-protocol {
    width: 10.2rem;
    position: absolute;
    top: 21.8rem;
    left: 0rem;
  }
  .zecrey-protocol p {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #e4e4e4;
  }
  .privacypolicy {
    position: absolute;
    top: 21.8rem;
    left: 56.4rem;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #e4e4e4;
  }
  .vertical {
    width: 0.1rem;
    height: 1.7rem;
    position: absolute;
    left: 66.7rem;
    top: 21.9rem;
    border: 0.1 solid #ffffff;
    background: #ffffff;
  }
  .contact {
    position: absolute;
    top: 21.8rem;
    left: 68rem;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #e4e4e4;
  }
  .com {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-decoration-line: underline;
    color: #e4e4e4;
  }
  .vertical2 {
    width: 0.1rem;
    height: 1.7rem;
    position: absolute;
    left: 85.9rem;
    top: 21.9rem;
    border: 0.1 solid #ffffff;
    background: #ffffff;
  }
  .copyright {
    position: absolute;
    top: 21.8rem;
    left: 87.1rem;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #f1f1f1;
  }
`

function bottom() {
  return (
    <>
      <Wrap>
        <div className='bottom'>
          <div className='bottom-center'>
            <div className='skink'>
              <img src='/Bottom/skink.png' alt='' />
            </div>
            <div className='apps'>
              <ul>
                <li>
                  <p className='head-li'>Apps</p>
                </li>
                <li>
                  <p>
                    <a
                      href='https://chrome.google.com/webstore/detail/zecrey/ojbpcbinjmochkhelkflddfnmcceomdi'
                      target='_blank'
                      rel='noreferrer'>
                      Extension Wallet
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      aria-disabled
                      style={{ cursor: 'not-allowed' }}>
                      Web App
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      aria-disabled
                      style={{ cursor: 'not-allowed' }}>
                      Zecrey Mobile
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className='explorer'>
              <ul>
                <li>
                  <p className='head-li'>Explorer</p>
                </li>
                <li>
                  <p>
                    <a
                      href='https://explorer.zecrey.com/'
                      target='_blank'
                      rel='noreferrer'>
                      Blockchain Explorer
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      aria-disabled
                      style={{ cursor: 'not-allowed' }}>
                      Info Explorer
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className='development'>
              <ul>
                <li>
                  <p className='head-li'>Development</p>
                </li>
                <li>
                  <p>
                    <a
                      href='https://github.com/Zecrey-Labs'
                      target='_blank'
                      rel='noreferrer'>
                      GitHub
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href='https://zecrey.medium.com/'
                      target='_blank'
                      rel='noreferrer'>
                      Medium
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className='papers'>
              <ul>
                <li>
                  <p className='head-li'>Papers</p>
                </li>
                <li>
                  <p>
                    <a
                      href='https://docsend.com/view/ntcsmt7meu84gcqk'
                      target='_blank'
                      rel='noreferrer'>
                      White Paper
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href='https://docs.zecrey.com/'
                      target='_blank'
                      rel='noreferrer'>
                      Docs
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className='underline'></div>
            <div className='zecrey-protocol'>
              <p>Zecrey Protocol</p>
            </div>
            <div>
              <a
                className='privacypolicy'
                href='https://www.privacypolicies.com/live/612448fc-ff4e-4dd2-a4a2-85e0d8076a71'
                target='_blank'
                rel='noreferrer'>
                Privacy Policy
              </a>
              <div className='vertical'></div>
              <span className='contact'>
                Contact: <span className='com'>bd@zecrey.com</span>
              </span>
              <div className='vertical2'></div>
              <span className='copyright'>
                Copyright @ 2022 Zecrey.All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default bottom
