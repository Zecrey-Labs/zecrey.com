/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { NavListStyle } from './style'
import { navList } from '@/constant/navList'
import { Nav } from './Nav'
import { SubNavDropdown } from './SubNavDropdown'

export const NavList = () => (
  <NavListStyle>
    {navList.map((nav, index) => (
      <SubNavDropdown key={index} subNav={nav.subNav}>
        <Nav key={index} {...nav} />
      </SubNavDropdown>
    ))}
  </NavListStyle>
)
