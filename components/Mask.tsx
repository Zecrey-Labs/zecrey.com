/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import styled from 'styled-components'
import { hex2Rgba } from '../utils'

const StyledLayout = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  display: inherit;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    ${props => {
      return `
      transform: ${props['data-props'].transform};
    background-color: ${props['data-props'].backgroundColor ||
      hex2Rgba(props.theme.primary, 0.78)};
      `
    }}
  }
`

type Props = {
  color?: string
  transform?: string
  type?: 'default' | 'left-diamond' | 'right-diamond'
  children?: any
  aos?: Partial<{
    'data-aos': string
    'data-aos-offset': number
    'data-aos-duration': number
    'data-aos-easing': string
    'data-aos-delay': number
    'data-aos-anchor': string
    'data-aos-anchor-placemen': string
    'data-aos-once': boolean
  }>
}

function getTransformByType(type) {
  switch (type) {
    case 'left-diamond': {
      return [
        'skewX(30deg) translateX(-66%)',
        {
          'data-aos': 'slide-right',
          'data-aos-duration': 1000,
        },
      ]
    }

    case 'right-diamond': {
      return [
        'skewX(-30deg) translateX(66%)',
        {
          'data-aos': 'slide-left',
          'data-aos-duration': 1000,
        },
      ]
    }

    default:
      return ['none', {}]
  }
}

export function Mask({ children, type, transform, color, aos }: Props) {
  const [_trans, _aos] = getTransformByType(type)
  const finalTransform = transform || _trans
  const finalAos = {
    ..._aos,
    ...aos,
  }

  return (
    <StyledLayout
      {...finalAos}
      data-props={{
        backgroundColor: color,
        transform: finalTransform,
      }}>
      {children}
    </StyledLayout>
  )
}
