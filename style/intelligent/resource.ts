/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import styled from 'styled-components'

export const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.4rem;
  h1,
  h2 {
    padding: 0;
    margin: 0;
    color: rgba(51, 51, 51, 1);
    font-weight: 300;
  }
  h1 {
    font-size: 0.48rem;
    line-height: 0.82rem;
  }
  h2 {
    font-size: 0.24rem;
    line-height: 0.41rem;
  }
`

interface HardwareBannerStyleProps {
  height: number
}

export const HardwareBannerStyle = styled.div<HardwareBannerStyleProps>`
  div.section {
    position: relative;
    width: 5.22rem;
    height: ${props => props.height}px;
    .bannerChildren {
      position: absolute;
      top: 0.4rem;
      left: 0.5rem;
      h1 {
        font-size: 0.4rem;
        font-weight: 200;
        line-height: 0.68rem;
        color: white;
        margin: 0;
      }
      p {
        font-size: 0.2rem;
        font-weight: 100;
        line-height: 0.41rem;
        color: white;
        margin: 0;
      }
    }
  }
`

export const ImageAndTableStyle = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 10px 0 #ccc;
  div.hardware-description-grid {
    display: grid;
    grid-template-columns: repeat(3, 3.07rem);
    grid-auto-rows: 1.72rem;
    grid-gap: 1px;
    background-color: rgba(0, 0, 0, 0.15);
    > div.cell {
      background-color: white;
      padding: 0.4rem 0.5rem;
      b,
      span {
        display: block;
      }
      b {
        font-size: 0.2rem;
        color: #333;
        margin-bottom: 0.15rem;
        font-weight: 600;
      }
      span {
        font-size: 0.16rem;
        color: #666;
        font-weight: 400;
      }
    }
    > div.space {
      grid-column-end: 4;
      background-color: white;
    }
  }
`

export const HardwareResourceStyle = styled.div`
  padding: 0.63rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:nth-of-type(2) {
    margin-bottom: 0.4rem;
  }
`

export const SoftwareResourceStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem 1rem 2.4rem;

  ul.softwareTypeFilterTab {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    width: 100%;
    justify-content: space-around;
    margin-bottom: 0.4rem;
    li {
      width: 1.2rem;
      font-size: 0.24rem;
      line-height: 0.24rem;
      padding-bottom: 0.2rem;
      text-align: center;
      color: #333333;
      cursor: pointer;
      &.active,
      &:hover {
        border-bottom: 2px solid #005dfc;
      }
    }
  }
`

export const SoftwareListStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.24rem;
  min-height: 3rem;

  > div.software {
    height: 1.54rem;
    box-sizing: border-box;
    border: 1px solid transparent;

    font-size: 0.16rem;
    background-color: white;
    color: #000000;
    text-align: left;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
    cursor: pointer;
    &:hover {
      border: 1px solid #1e48f2;
      box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.1);
    }
    > div.link {
      width: 100%;
      height: 100%;
      padding: 0.2rem 0.24rem;

      > img {
        width: 1.72rem;
        height: 0.6rem;
        margin-bottom: 0.1rem;
      }
    }
  }
`
