/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import styled, { css } from 'styled-components'
import { useImage } from '@/utils/hooks'

const BannerStyle = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  &.reactive {
    width: 100%;
    height: 8.5rem;
  }

  > div.bannerChildren {
    position: absolute;
    left: 2.4rem;
    top: 2.8rem;
    h1 {
      color: white;
      font-size: 0.48rem;
      line-height: 1em;
      padding: 0;
      margin: 0 0 0.3rem;
      font-weight: 400;
    }
    p {
      color: white;
      font-size: 0.28rem;
      line-height: 1.4em;
      padding: 0;
      margin: 0 0 0.4rem;
      font-weight: 200;
    }
  }
  &.right {
    > div.bannerChildren {
      right: 2.4rem;
      h1,
      p {
        text-align: right;
      }
      button {
        float: right;
      }
    }
  }
`

interface BannerProps {
  img?: string | any[] | { default }
  children?: React.ReactNode
  title?: string
  subTitle?: string
  className?: string
}
export const Banner = ({
  img,
  children,
  title,
  subTitle,
  className,
}: BannerProps) => {
  const imgSrc = useImage(img)
  return (
    <BannerStyle
      className={`${className || ''} section`}
      style={imgSrc ? { backgroundImage: `url(${imgSrc})` } : {}}>
      <div className={'bannerChildren'}>
        {title && (
          <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
          </>
        )}
        {children}
      </div>
    </BannerStyle>
  )
}

interface ImageProps {
  img: string | any[] | { default }
  width: number
  height: number
}

const ImageStyle = styled.div<{ width: number; height: number }>`
  .section {
    background-repeat: no-repeat;
    background-size: cover;
    ${({ width, height }) => {
      return css`
        width: ${width / 100}rem;
        height: ${height / 100}rem;
      `
    }}
  }
`

export const NewImage = ({ img, ...props }: ImageProps) => {
  return (
    <ImageStyle width={props.width} height={props.height}>
      <Banner img={img} {...props} />
    </ImageStyle>
  )
}
