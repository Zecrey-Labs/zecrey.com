/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { NewImage } from '@/components'
import { badge } from './images'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin-left: 0.05rem;
    opacity: 0.7;
    color: black;
  }
`

type Props = {
  type: string
  style?: React.CSSProperties
}

export const Badge = observer(function Badge({ type, style }: Props) {
  return (
    <StyledLayout style={style}>
      <NewImage img={badge[type]} width={20} height={20} />
      <span>
        {{ domestic: '国产', opensource: '开源', scientist: '科学计算' }[type]}
      </span>
    </StyledLayout>
  )
})
