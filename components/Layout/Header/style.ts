/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import styled from 'styled-components'

export const HeaderStyle = styled.div`
  position: fixed;
  display: flex;

  height: 0.8rem;
  width: 100%;
  z-index: 99;
  padding: 0 2.4rem;
  background-color: #333333cc;

  > img {
    display: block;
    box-sizing: border-box;
    height: 0.47rem;
    margin: auto 1rem auto 0;
  }
  > div.right {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const NavListStyle = styled.div`
  display: flex;
  margin: 0;
`

export const NavStyle = styled.div`
  height: 0.8rem;
  box-sizing: border-box;

  &.active {
    border-bottom: 5px solid #1e48f2;
  }

  &:hover {
    background-color: #1e48f2;
    a {
      text-decoration: none;
      color: #eee;
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
    width: 2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    cursor: pointer;
    font-size: 0.18rem;
    color: #eee;
    text-align: center;
    &.no-use {
      cursor: default;
    }
  }
`

export const SubNavStyle = styled.div`
  position: relative;
  height: 100%;

  > ul.subNav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin: 0;
    > li {
      background: #f0f2f5;
      text-align: left;
      &:hover {
        background-color: #3182ff;
        > a {
          color: white;
        }
      }

      > a {
        padding: 0 0.63rem;
        text-decoration: none;
        display: inline-block;
        height: 0.8rem;
        width: 100%;
        line-height: 0.8rem;
        cursor: pointer;
        font-size: 0.18rem;
        color: #333;
        text-align: left;
      }
    }
  }

  &:hover {
    > div.mainNav {
      > div {
        background-color: #1e48f2;
      }
    }
    > ul.subNav {
      display: block;
    }
  }
`
