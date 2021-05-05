/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { Img, StartUseAppButton } from '@/components'
import { NavList } from './NavList'
import { HeaderStyle } from './style'
import { META } from '@/constant'

export const Header = () => (
  <HeaderStyle>
    <Img src={META.headerLogo} />
    <div className='right'>
      <NavList />
      <StartUseAppButton category='登录注册'>登录注册</StartUseAppButton>
    </div>
  </HeaderStyle>
)
