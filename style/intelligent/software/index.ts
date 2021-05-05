/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import styled from 'styled-components'

export const BreadCrumbStyle = styled.div`
  font-size: 0.16rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  a {
    color: rgba(0, 0, 0, 0.85);
    &:hover {
      color: rgba(0, 0, 0, 0.85);
      text-decoration: none;
    }
  }
  span.left-arrow {
    margin-right: 0.15rem;
  }
  span.separator {
    padding: 0 0.05rem;
  }
  span.route {
    color: #999999;
  }
`

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 0.4rem;
  .column-one {
    background-color: white;
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 1.72rem;
      height: 0.6rem;
    }
  }
  .column-two {
    .ant-descriptions-title {
      font-size: 0.38rem;
      font-weight: 300;
      line-height: 0.4rem;
      color: black;
    }
    .ant-descriptions-item-label,
    .ant-descriptions-item-content {
      font-size: 0.2rem;
      font-weight: 300;
      line-height: 0.4rem;
      color: #666;
    }
  }
  .column-three {
    button {
      width: 2rem;
      height: 0.6rem;
      font-size: 0.24rem;
      text-align: center;
      font-weight: 300;
      &.published {
        background-color: #1e48f2;
        color: white;
        border: none;
      }
      &.unpublished {
        background: rgba(0, 0, 0, 0.04);
        color: rgba(0, 0, 0, 0.25);
        border: 1px solid #e8e8e8;
      }
    }
  }
`

export const DescriptionStyle = styled.div`
  font-size: 0.24rem;
  font-weight: 400;
  line-height: 0.4rem;
  margin-bottom: 0.4rem;
  .title {
    font-size: 0.2rem;
    color: #333;
    margin-bottom: 0.1rem;
  }
  .description,
  ul.detail > li {
    color: #666;
    font-size: 0.16rem;
    line-height: 0.32rem;
    font-weight: 300;
    white-space: pre-line;
  }
  ul.detail {
    margin: 0;
    li {
      display: flex;
      justify-items: center;
      img {
        margin-right: 0.13rem;
        width: 0.27rem;
        height: 0.27rem;
      }
    }
  }
`

export const SoftwareStyle = styled.div`
  padding: 1.2rem 2.4rem 1.6rem;
`
