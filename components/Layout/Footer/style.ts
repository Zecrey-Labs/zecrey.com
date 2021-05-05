/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import styled from 'styled-components'

export const StyledLayout = styled.div`
  width: 100%;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
  > section.main {
    background-color: ${({ theme }) => theme.black};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.6rem 2.44rem 0.56rem 2.4rem;
    > .info {
      min-width: 2.2rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;

      > img {
        width: 1.8rem;
      }

      > ul.contact {
        margin-top: 0.25rem;
        > li {
          display: flex;
          align-items: center;
          font-size: 0.14rem;
          line-height: 0.36rem;
          font-weight: 200;
          > img {
            margin-right: 0.31rem;
          }
          &.phone {
            font-size: 0.24rem;
            font-weight: 300;
          }
        }
      }
    }

    .qrcode {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      width: 1.2rem;

      .item {
        > img {
          width: 100%;
        }

        p {
          font-size: 0.12rem;
          color: #666666;
          text-align: center;
          margin: 0.1rem 0 0;
        }
      }
    }
  }

  > section.registration {
    padding: 0 5.26rem;
    background: #2f2f2f;
    height: 0.6rem;
    font-size: 0.14rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > span,
    a {
      line-height: 0.6rem;
      color: #999;
      font-weight: 300;
      display: flex;
      align-items: center;
    }
  }
`

export const NavListStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 200;
  > div.mainNav {
    margin-right: 1rem;
    font-size: 0.18rem;
    a {
      color: white;
      &:hover {
        color: white;
        text-decoration: none;
      }
    }
    > a {
      display: block;
      cursor: pointer;
      margin-bottom: 1em;
      &.no-use {
        cursor: default;
        color: #999;
      }
    }
    > ul.subNav {
      display: flex;
      flex-direction: column;
      > a {
        display: block;
        margin-bottom: 0.5em;
      }
    }
  }
`
