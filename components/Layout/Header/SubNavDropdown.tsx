/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { SubNavStyle } from './style'
import { Link } from '@/components'
import { buryPoint } from '@/utils'

interface Props {
  subNav?: {
    title: string
    path: string
  }[]
  children: React.ReactNode
}

export const SubNavDropdown = ({ subNav, children }: Props) => {
  return (
    <SubNavStyle>
      <div className={'mainNav'}>{children}</div>
      <ul className={'subNav'}>
        {subNav?.map((nav, index) => (
          <li key={index}>
            <Link path={nav.path}>
              <a
                onClick={() => {
                  buryPoint({
                    category: '导航栏',
                    action: '点击',
                    label: '典型案例',
                  })
                }}>
                {nav.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </SubNavStyle>
  )
}
