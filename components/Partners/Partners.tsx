import classnames from 'classnames'
import React, { useState } from 'react'
import styled from 'styled-components'
import CardWrap from '../card-wrap'
import Icon from '../common/Icon'

const Wrap = styled.div`
  &.is-show {
    .show {
      height: 54.5rem;
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

function Partners() {
  const [isShow, setIsShow] = useState<boolean>(true)
  return (
    <>
      <Wrap className={classnames(isShow ? '' : 'is-show')}>
        <CardWrap
          title='Backers'
          backgroundIcon={{
            svg: <Icon name='users' />, // todo: repace with svg element
            size: { width: '31.3rem', height: '24rem' }
          }}
          text={[]}>
          <div>
            <ul className='partner'>
              <li>
                <img src='/Partners/spartan.svg' alt='' />
              </li>
              <li>
                <img src='/Partners/shima.svg' alt='' />
              </li>
              <li>
                <img src='/Partners/labs.svg' alt='' />
              </li>
              <li>
                <img src='/Partners/captical.svg' alt='' />
              </li>
              <li className='left1'>
                <img src='/Partners/you.svg' alt='' />
              </li>
              <li>
                <img src='/Partners/amber.svg' alt='' />
              </li>
              <li>
                <img src='/Partners/maplebl.svg' alt='' />
              </li>
              <li>
                <img src='/Partners/cmtd.svg' alt='' />
              </li>
              <li className='left2'>
                <img src='/Partners/avatvr.svg' alt='' />
              </li>
              <li>
                <img src='/Partners/sevenx.svg' alt='' />
              </li>
              <li>
                <img src='/Partners/bubit.svg' alt='' />
              </li>
              <li>
                <img src='/Partners/snz.svg' alt='' />
              </li>
              <li className='left3'>
                <img src='/Partners/DoraHacksVentures.svg' alt='' />
              </li>
              <li>
                <img src='/Partners/crasolum.svg' alt='' />
              </li>
              <li>
                <img src='/Partners/block0.svg' alt='' />
              </li>
              <li
                className={classnames(isShow ? 'partner11' : 'partner11 none')}>
                <div onClick={() => setIsShow(false)}>
                  <span>View More</span>
                  <img src='/Partners/arrow.svg' alt='' />
                </div>
              </li>

              <li className={classnames(isShow ? 'none' : '')}>
                <img src='/Partners/looprlnc.svg' alt='' />
              </li>
              <li className={classnames('left4', isShow ? 'none' : '')}>
                <img src='/Partners/cmccgloba.svg' alt='' />
              </li>
              <li className={classnames(isShow ? 'none' : '')}>
                <img src='/Partners/cypherpunn.svg' alt='' />
              </li>

              <li className={classnames(isShow ? 'none' : '')}>
                <img src='/Partners/stake.svg' alt='' />
              </li>
              <li className={classnames(isShow ? 'none' : '')}>
                <img src='/Partners/20.svg' alt='' />
              </li>
              <li className={classnames('left5', isShow ? 'none' : '')}>
                <img src='/Partners/21.svg' alt='' />
              </li>
              <li className={classnames(isShow ? 'none' : '')}>
                <img
                  src='/Partners/stratified.png'
                  alt=''
                  style={{ width: '13.6rem', height: '3.6rem' }}
                />
              </li>
              <li className={classnames(isShow ? 'none' : '')}>
                <img src='/Partners/spark.svg' alt='' />
              </li>
              <li className={classnames(isShow ? 'none' : '')}>
                <img src='/Partners/mulana.png' alt='' />
              </li>
            </ul>
          </div>
        </CardWrap>
      </Wrap>
    </>
  )
}

export default Partners
