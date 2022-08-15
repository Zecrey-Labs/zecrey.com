import { vw, CenterFlex, FlatBtn } from '@/styles/global'
import classnames from 'classnames'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import CardWrap from '../common/card-wrap'
import Icon from '../common/Icon'
import { MobileWrap, Brands, BrandsWrap } from './styles'
import { brands } from './brands'

const Wrap = styled.div`
  &.isShow {
    .show {
      height: 62rem;
      transition: all 0.7s;
      li {
        transition: opacity 0.7s;
        &.none {
          opacity: 0.85;
        }
      }
    }
  }
  .partner {
    width: 81.9rem;
    height: 18.163rem;
    /* background: #444999; */
    position: absolute;
    top: -32px;
    right: 0;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    /* align-content: space-between;  */
  }
  li img {
    display: inline-block;
    opacity: 0.85;
    &:hover {
      opacity: 1;
    }
  }
  li {
    width: 25%;
    height: 7.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &.left1 img {
      margin-left: -10px;
    }
    &.left2 img {
      margin-left: -40px;
    }
    &.left3 img {
      margin-left: -30px;
    }
    &.left4 img {
      margin-left: 10px;
    }
    &.left5 img {
      margin-left: -47px;
    }
    &.none {
      cursor: default;
      opacity: 0;
    }
    &:last-child img {
      height: 7.2rem;
      margin-top: 1.1rem;
    }
  }

  .partner11 {
    &.none {
      display: none;
    }
    div {
      width: 116px;
      height: 35px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
    span {
      width: 59px;
      height: 16px;
      font-family: 'IBM Plex Sans';
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.144706px;
      color: #2ad4d9;
      margin-left: 22px;
      cursor: pointer;
    }
    img {
      margin-left: 6px;
      vertical-align: baseline;
    }
  }
`

const Partners = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 })
  return isMobileView ? <Mobile /> : <Desktop />
}
export default Partners

function Desktop() {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <Wrap className={classnames({ isShow })}>
      <CardWrap
        title='Backers'
        backgroundIcon={{
          svg: <Icon name='users' />,
          size: { width: '31.3rem', height: '24rem' }
        }}
        text={[]}>
        <Brands className='brands'>
          <BrandsWrap className='brands-wrap'>
            {brands.slice(0, 4).map((i, index) => (
              <CenterFlex
                key={index}
                className={classnames(...i.classnames, {
                  left: index === 0,
                  right: index === 3
                })}>
                <img
                  src={`/Partners/${i.src}`}
                  alt=''
                  style={{ width: i.width, height: i.height }}
                />
              </CenterFlex>
            ))}
          </BrandsWrap>
          <BrandsWrap className='brands-wrap'>
            {brands.slice(4, 8).map((i, index) => (
              <CenterFlex
                key={index}
                className={classnames(...i.classnames, {
                  left: index === 0,
                  right: index === 3
                })}>
                <img
                  src={`/Partners/${i.src}`}
                  alt=''
                  style={{ width: i.width, height: i.height }}
                />
              </CenterFlex>
            ))}
          </BrandsWrap>
          <BrandsWrap className='brands-wrap'>
            {brands.slice(8, 12).map((i, index) => (
              <CenterFlex
                key={index}
                className={classnames(...i.classnames, {
                  left: index === 0,
                  right: index === 3
                })}>
                <img
                  src={`/Partners/${i.src}`}
                  alt=''
                  style={{ width: i.width, height: i.height }}
                />
              </CenterFlex>
            ))}
          </BrandsWrap>
          {!isShow && (
            <BrandsWrap className='brands-wrap'>
              {brands.slice(12, 15).map((i, index) => (
                <CenterFlex
                  key={index}
                  className={classnames(...i.classnames, {
                    left: index === 0,
                    right: index === 3
                  })}>
                  <img
                    src={`/Partners/${i.src}`}
                    alt=''
                    style={{ width: i.width, height: i.height }}
                  />
                </CenterFlex>
              ))}
              <CenterFlex>
                <FlatBtn onClick={() => setIsShow(true)}>
                  View More <Icon name='dart-2' />
                </FlatBtn>
              </CenterFlex>
            </BrandsWrap>
          )}
          {isShow && (
            <>
              <BrandsWrap className='brands-wrap'>
                {brands.slice(12, 16).map((i, index) => (
                  <CenterFlex
                    key={index}
                    className={classnames(...i.classnames, {
                      left: index === 0,
                      right: index === 3
                    })}>
                    <img
                      src={`/Partners/${i.src}`}
                      alt=''
                      style={{ width: i.width, height: i.height }}
                    />
                  </CenterFlex>
                ))}
              </BrandsWrap>
              <BrandsWrap className='brands-wrap'>
                {brands.slice(16, 20).map((i, index) => (
                  <CenterFlex
                    key={index}
                    className={classnames(...i.classnames, {
                      left: index === 0,
                      right: index === 3
                    })}>
                    <img
                      src={`/Partners/${i.src}`}
                      alt=''
                      style={{ width: i.width, height: i.height }}
                    />
                  </CenterFlex>
                ))}
              </BrandsWrap>
              <BrandsWrap className='brands-wrap'>
                {brands.slice(20, 24).map((i, index) => (
                  <CenterFlex
                    key={index}
                    className={classnames(...i.classnames, {
                      left: index === 0,
                      right: index === 3
                    })}>
                    <img
                      src={`/Partners/${i.src}`}
                      alt=''
                      style={{ width: i.width, height: i.height }}
                    />
                  </CenterFlex>
                ))}
              </BrandsWrap>
              <BrandsWrap className='brands-wrap'>
                {brands.slice(24, 28).map((i, index) => (
                  <CenterFlex
                    key={index}
                    className={classnames(...i.classnames, {
                      left: index === 0,
                      right: index === 3
                    })}>
                    {!i.src ? null : (
                      <img
                        src={`/Partners/${i.src}`}
                        alt=''
                        style={{ width: i.width, height: i.height }}
                      />
                    )}
                  </CenterFlex>
                ))}
              </BrandsWrap>
            </>
          )}
        </Brands>
      </CardWrap>
    </Wrap>
  )
}
const Mobile = () => {
  const [isShow, setIsShow] = useState<boolean>(false)
  return (
    <MobileWrap>
      <label className='title-1'>Backers</label>
      <div className='grid'>
        <div className='grid-1'>
          <img src='/Partners/binance.svg' alt='' />
        </div>
        <div className='grid-2'>
          <img src='/Partners/spartan.svg' alt='' />
        </div>
      </div>
      <div className='grid'>
        <div className='grid-1'>
          <img src='/Partners/captical.svg' alt='' style={{ height: vw(25) }} />
        </div>
        <div className='grid-2'>
          <img src='/Partners/shima.svg' alt='' style={{ height: vw(51) }} />
        </div>
      </div>
      <div className='grid'>
        <div className='grid-1'>
          <img src='/Partners/you.svg' alt='' />
        </div>
        <div className='grid-2 center'>
          <img src='/Partners/amber.svg' alt='' style={{ height: vw(14) }} />
        </div>
      </div>
      <div className='grid'>
        <div className='grid-1'>
          <img src='/Partners/avatvr.svg' alt='' style={{ height: vw(15) }} />
        </div>
        <div className='grid-2'>
          <img src='/Partners/maplebl.svg' alt='' style={{ height: vw(23) }} />
        </div>
      </div>
      {isShow ? null : (
        <button onClick={() => setIsShow(true)}>
          View More
          <img src='/Partners/arrow.svg' alt='' />
        </button>
      )}
      <div className={classnames('grid', { hide: !isShow })}>
        <div className='grid-1'>
          <img src='/Partners/cmtd.svg' alt='' style={{ height: vw(24) }} />
        </div>
        <div className='grid-2'>
          <img src='/Partners/sevenx.svg' alt='' style={{ height: vw(23) }} />
        </div>
      </div>
      <div className={classnames('grid', { hide: !isShow })}>
        <div className='grid-1'>
          <img
            src='/Partners/cmccgloba.svg'
            alt=''
            style={{ height: vw(16) }}
          />
        </div>
        <div className='grid-2 center'>
          <img src='/Partners/bubit.svg' alt='' style={{ height: vw(25) }} />
        </div>
      </div>
      <div className={classnames('grid', { hide: !isShow })}>
        <div className='grid-1 center'>
          <img src='/Partners/looprlnc.svg' alt='' style={{ height: vw(25) }} />
        </div>
        <div className='grid-2 center'>
          <img src='/Partners/crasolum.svg' alt='' style={{ height: vw(18) }} />
        </div>
      </div>
      <div className={classnames('grid', { hide: !isShow })}>
        <div className='grid-1 center'>
          <img
            src='/Partners/DoraHacksVentures.svg'
            alt=''
            style={{ height: vw(33) }}
          />
        </div>
        <div className='grid-2 center'>
          <img src='/Partners/block0.svg' alt='' style={{ height: vw(21) }} />
        </div>
      </div>
      <div className={classnames('grid', { hide: !isShow })}>
        <div className='grid-1 center'>
          <img
            src='/Partners/cypherpunn.svg'
            alt=''
            style={{ height: vw(25) }}
          />
        </div>
        <div className='grid-2 center'>
          <img
            src='/Partners/stratified.png'
            alt=''
            style={{ height: vw(21) }}
          />
        </div>
      </div>
      <div className={classnames('grid', { hide: !isShow })}>
        <div className='grid-1 center'>
          <img src='/Partners/stake.svg' alt='' />
        </div>
        <div className='grid-2 center'>
          <img src='/Partners/snz.svg' alt='' style={{ height: vw(25) }} />
        </div>
      </div>
      <div className={classnames('grid', { hide: !isShow })}>
        <div className='grid-1 center'>
          <img src='/Partners/labs.svg' alt='' />
        </div>
        <div className='grid-2'>
          <img src='/Partners/20.svg' alt='' style={{ height: vw(21) }} />
        </div>
      </div>
      <div className={classnames('grid', { hide: !isShow })}>
        <div className='grid-1 center'>
          <img src='/Partners/21.svg' alt='' style={{ height: vw(22) }} />
        </div>
        <div className='grid-2 center'>
          <img src='/Partners/spark.svg' alt='' />
        </div>
      </div>
      <div className={classnames('grid', { hide: !isShow })}>
        <div className='grid-1 center'>
          <img src='/Partners/mulana.png' alt='' style={{ height: vw(39) }} />
        </div>
        <div className='grid-2 center'>
          <img src='/Partners/gate.io.svg' alt='' style={{ height: vw(39) }} />
        </div>
      </div>
    </MobileWrap>
  )
}
