/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import styled from 'styled-components'
import { META } from '@/constant'
import Router from 'next/router'
import { buryPoint } from '@/utils'

const Style = styled.button`
  width: 1rem;
  height: 0.36rem;
  font-size: 0.16rem;
  line-height: 0.36rem;
  background-color: #1e48f2;
  color: white;
  border: none;
  padding: 0;
  margin: auto 0;

  &.big {
    width: 2.4rem;
    height: 0.72rem;
    font-size: 0.32rem;
    border-radius: 0.04rem;
    font-weight: 300;
  }
`

interface CZCProps {
  category?: string
  action?: string
  label?: string
  children: string
  className?: string
  disabled?: boolean
}

export const StartUseAppButton = ({
  category,
  action,
  label,
  ...props
}: CZCProps) => {
  const channel = React.useMemo(() => {
    let channel = ''
    try {
      channel = localStorage.getItem('source_channel')
    } catch (e) {}
    return channel
  }, [])

  return (
    <Style
      onClick={() => {
        buryPoint({ category, action, label })
        setTimeout(() => {
          Router.push(`${META.portalUri}?channel=${channel}`)
        }, 500)
      }}
      {...props}
    />
  )
}
