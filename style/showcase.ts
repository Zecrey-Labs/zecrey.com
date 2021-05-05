/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import styled from 'styled-components'

export const ShowcaseStyle = styled.div`
  > div.content {
    background: #ffffff;
    box-shadow: 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.1);
    width: 14.4rem;
    padding: 0.6rem 0.8rem;
    margin: 1rem 2.4rem;
    display: flex;
    flex-direction: row;
    > img {
      width: 6.8rem;
      height: 4rem;
      margin-right: 0.8rem;
    }
    > div.text {
      > h1 {
        font-size: 0.24rem;
        line-height: 1.2em;
        color: #333333;
        text-align: left;
        font-weight: 400;
        margin-bottom: 0.1rem;
      }
      ul {
        margin-bottom: 0.1rem;
        li {
          font-size: 0.16rem;
          color: #666666;
          text-align: left;
          line-height: 1.5em;
        }
      }
    }
  }
`
