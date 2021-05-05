/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
  position: relative;
  height: 100vh;
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  background-size: 100% 100%;
`

interface Props {
  img?: string | any[] | { default }
  hash: string
  children?: any
  className?: string
}

export function Section({ img, hash, children, className }: Props) {
  let defaultImg
  img = (img && (img as any).default) || img
  if (Array.isArray(img)) {
    defaultImg = (img[0] && img[0].default) || img[0]
    img = (img[1] && img[1].default) || img[1]
  }
  const [imgSrc, setImgSrc] = useState(defaultImg || img)
  useEffect(() => {
    if (defaultImg && img) {
      const imageLoader = new Image()
      imageLoader.onload = () => {
        setImgSrc(img)
      }
      imageLoader.src = img as string
    }
  }, [img])

  return (
    <StyledLayout
      id={hash}
      className={`${className || ''} section`}
      style={imgSrc ? { backgroundImage: `url(${imgSrc})` } : {}}>
      {children}
    </StyledLayout>
  )
}
