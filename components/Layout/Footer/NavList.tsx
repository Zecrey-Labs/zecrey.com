/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { Link } from '@/components'
import { NavListStyle } from './style'
import { navList } from '@/constant/navList'
import { buryPoint } from '@/utils'

export const NavList = () => (
  <NavListStyle>
    {navList.map((item, index) => (
      <div key={index} className={'mainNav'}>
        {item.subNav ? (
          <>
            <a className={'no-use'}>{item.title}</a>
            <ul className={'subNav'}>
              {item.subNav.map((item, index) => (
                <Link key={index} path={item.path}>
                  <a
                    onClick={() => {
                      buryPoint({
                        category: '导航栏',
                        action: '点击',
                        label: '典型案例',
                      })
                    }}>
                    {item.title}
                  </a>
                </Link>
              ))}
            </ul>
          </>
        ) : (
          <Link path={item.path}>
            <a
              onClick={() => {
                buryPoint({
                  category: '导航栏',
                  action: '点击',
                  label: item.title,
                })
              }}>
              {item.title}
            </a>
          </Link>
        )}
      </div>
    ))}
  </NavListStyle>
)
