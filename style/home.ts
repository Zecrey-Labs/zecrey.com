/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import styled from 'styled-components'

export const TipStyle = styled.div`
  width: 14.4rem;
  position: absolute;
  margin: 0 auto;
  right: 0;
  left: 0;
  bottom: 0;
  transform: translateY(50%);
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  > .tip {
    height: 1.86rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.2rem 0;
    > img {
      display: block;
      box-sizing: border-box;
      width: 0.6rem;
      height: 0.65rem;
      padding-bottom: 0.08rem;
    }
    > h1 {
      text-align: center;
      margin: 0;
      font-size: 0.18rem;
      line-height: 0.18rem;
      padding-bottom: 0.17rem;
      color: black;
      font-weight: 300;
    }
    > p {
      text-align: center;
      margin: 0;
      font-size: 0.14rem;
      color: #999;
      font-weight: 400;
      line-height: 0.24rem;
    }
  }
`

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0;
  background-color: #f6f6f6;

  .banner {
    position: relative;

    .ant-carousel {
      .slick-dots {
        margin-bottom: 1rem;
        li {
          width: 0.4rem;
          button {
            height: 0.05rem;
            border-radius: 0.2rem;
          }
          &.slick-active {
            width: 0.6rem;
          }
        }
      }
    }
  }

  .main {
    margin: 1.72rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content-item {
      height: 4.5rem;
      width: 14.4rem;
      margin-bottom: 0.8rem;
      display: flex;
      flex-direction: row;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      &:nth-of-type(2n) {
        flex-direction: row-reverse;
      }
      .carousel {
        width: 7.7rem;
        height: 100%;

        .carousel-image {
          width: 7.7rem;
          height: 4.5rem;
        }
      }
      > .description {
        width: calc(100% - 7.7rem);
        height: 100%;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0 0 1.42rem;
        > h1 {
          color: #333;
          font-weight: 300;
          font-size: 0.32rem;
          margin: 0 0 0.2rem 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          img {
            height: 0.42rem;
            width: 0.42rem;
            margin-right: 0.2rem;
          }

          button {
            margin-left: 0.5rem;
          }
        }
        > h2 {
          font-size: 0.24rem;
          font-weight: 300;
          color: #666;
          margin-bottom: 0.3rem;
          padding-left: 0.65rem;
        }
        > ul {
          > li {
            font-size: 0.16rem;
            font-weight: 300;
            color: #666;
            padding-left: 0.2rem;
            margin-bottom: 0.15rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            img {
              width: 0.27rem;
              height: 0.27rem;
              box-sizing: content-box;
              padding-right: 0.2rem;
            }
          }
        }
      }
    }
  }
`
