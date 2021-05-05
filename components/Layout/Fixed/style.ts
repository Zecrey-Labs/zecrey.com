/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import styled from 'styled-components'

export const FixedStyle = styled.div`
  > div.gift {
    z-index: 1;
    position: fixed;
    right: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      &.top {
        width: 1.8rem;
        height: 1.8rem;
      }
      &.button {
        width: 1rem;
        height: 0.32rem;
        cursor: pointer;
      }
    }
  }
`

export const MaskStyle = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalStyle = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  height: 6.2rem;
  width: 8.4rem;

  background: #ffffff;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
  border-radius: 2px;

  > img {
    width: 3.2rem;
  }

  span.close-icon {
    cursor: pointer;
    font-size: 0.16rem;
    position: absolute;
    top: 0.22rem;
    right: 0.22rem;
    color: rgba(0, 0, 0, 0.45);
    z-index: 1000;
  }
`

export const FormStyle = styled.div`
  padding: 1.12rem 0;
  width: 5.2rem;
  position: relative;

  .ant-form-item {
    margin: 0;
    height: 0.8rem;
    &.ant-form-item-has-error {
    }

    .ant-form-item-explain {
      font-size: 0.12rem;
    }
  }

  div.ant-form-item.submit {
    margin-top: 0.28rem;
    button {
      background: #1e48f2;
      border-radius: 4px;
      font-size: 0.14rem;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      line-height: 0.14rem;
      height: 0.42rem;
      width: 2rem;
    }
  }
`

export const SubmittedStyle = styled.div`
  padding: 2.4rem 1.67rem 2.88rem 1.67rem;
  h1 {
    font-size: 0.2rem;
    color: #666666;
    line-height: 0.28rem;
    font-weight: 300;
    margin-bottom: 0.16rem;
    span.checked-icon {
      font-size: 0.24rem;
      color: #52c41a;
      margin-right: 0.12rem;
    }
  }
  p {
    font-size: 0.14rem;
    color: #666666;
    line-height: 0.24rem;
    font-weight: 300;
  }
`
