/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React, { useState, useEffect } from 'react'
import { NavStyle } from '@/components/Layout/Header/style'
import { Link } from '@/components'
import { NavProps } from '@/constant/navList'
import { buryPoint } from '@/utils'

export const Nav = ({ title, path, subNav }: NavProps) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const currentPath = window.location.pathname
      .replace('/intelligent', '')
      .split('/')[1]
    setActive(path === currentPath)
  }, [typeof window === 'undefined' ? undefined : window.location.pathname])

  return (
    <NavStyle className={active ? 'active' : ''}>
      {subNav ? (
        <a className={'no-use'}>{title}</a>
      ) : (
        <Link path={path}>
          <a
            onClick={() => {
              buryPoint({ category: '导航栏', action: '点击', label: title })
            }}>
            {title}
          </a>
        </Link>
      )}
    </NavStyle>
  )
}
