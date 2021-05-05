/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import styled from 'styled-components'

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  .banner {
    width: 100%;
    height: 78vh;
    background-size: 100% 100%;
    position: relative;
    .about {
      font-size: 0.48rem;
      color: #ffffff;
      z-index: 1;
      position: absolute;

      height: 78vh;
      line-height: 78vh;
      left: 3.3rem;
    }
  }
  .content {
    width: 100%;
    height: 10.46rem;
    background-color: #eeeeee;
    position: relative;

    .zs {
      position: absolute;
      top: 1.35rem;
      left: 2.4rem;
      width: 8.52rem;
      height: 6.83rem;
    }
    .ys {
      position: absolute;
      top: 0.88rem;
      right: 2.4rem;
      width: 3.59rem;
      height: 3.79rem;
      z-index: 1;
    }
    .item {
      position: absolute;
      width: 8.17rem;
      height: 6.07rem;
      bottom: 1.07rem;
      right: 2.78rem;
      background: url('/images/about/back.png') no-repeat;
      background-size: 100% 100%;
      font-size: 0.18rem;
      color: #ffffff;
    }
  }
`
