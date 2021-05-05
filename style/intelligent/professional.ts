/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import styled from 'styled-components'

export const ExpertStyle = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3.15rem;
  height: 3.45rem;
  box-shadow: 0 2px 10px 0 #ccc;
  padding-top: 0.15rem;
  position: relative;

  div.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
    height: 0.9rem;
    background-image: linear-gradient(
      -46deg,
      #518aef 0%,
      #599bf1 37%,
      #518aef 74%,
      #4369ea 100%
    );
  }

  h1.name {
    font-size: 0.24rem;
    font-weight: 400;
    line-height: 0.41rem;
    color: #666;
    margin: 0;
  }
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.05rem;
    > p {
      margin: 0;
      font-weight: 300;
      line-height: 0.18rem;
      font-size: 0.14rem;
      color: #888;
    }
  }
  .skills {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 0.14rem;
      color: #666666;
      margin: 0;
      line-height: 0.23rem;
      font-weight: 400;
    }
  }
`

export const ExpertsBannerStyle = styled.div`
  p {
    width: 5rem;
  }
`

export const ExpertsStyle = styled.div`
  padding: 1rem 2.4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.6rem;
`
