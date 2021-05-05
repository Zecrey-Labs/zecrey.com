/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import { PLATFORM } from '@/constant'

export interface NavProps {
  title: string
  path: string
  subNav?: NavProps[]
}

const baseNavList: NavProps[] = [
  {
    title: '首页',
    path: '',
  },
  {
    title: '资源配置',
    path: 'resource',
  },
  {
    title: '专家库',
    path: 'experts',
  },
]

export const navList =
  {
    intelligent: [
      ...baseNavList,
      {
        title: '关于我们',
        path: 'about',
      },
    ],
    yuansuan: [
      ...baseNavList,
      {
        title: '典型案例',
        path: 'showcase',
        subNav: [
          {
            title: '混合云',
            path: 'showcase/混合云',
          },
          {
            title: '创新协同',
            path: 'showcase/创新协同',
          },
          {
            title: '工业软件',
            path: 'showcase/工业软件',
          },
        ],
      },
    ],
  }[PLATFORM] || baseNavList
