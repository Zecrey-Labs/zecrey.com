/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import BaseHome from '@/pages/index'

const zs_banner: [string, string][][] = [
  [
    [
      require('@/public/intelligent/home/carousel/1.1.png?lqip'),
      require('@/public/intelligent/home/carousel/1.1.png'),
    ],
    [
      require('@/public/intelligent/home/carousel/1.2.png?lqip'),
      require('@/public/intelligent/home/carousel/1.2.png'),
    ],
    [
      require('@/public/intelligent/home/carousel/1.3.png?lqip'),
      require('@/public/intelligent/home/carousel/1.3.png'),
    ],
  ],
  [
    [
      require('@/public/intelligent/home/carousel/2.1.png?lqip'),
      require('@/public/intelligent/home/carousel/2.1.png'),
    ],
  ],
  [
    [
      require('@/public/intelligent/home/carousel/3.1.png?lqip'),
      require('@/public/intelligent/home/carousel/3.1.png'),
    ],
    [
      require('@/public/intelligent/home/carousel/3.2.png?lqip'),
      require('@/public/intelligent/home/carousel/3.2.png'),
    ],
  ],
  [
    [
      require('@/public/intelligent/home/carousel/4.1.png?lqip'),
      require('@/public/intelligent/home/carousel/4.1.png'),
    ],
  ],
  [
    [
      require('@/public/intelligent/home/carousel/5.1.png?lqip'),
      require('@/public/intelligent/home/carousel/5.1.png'),
    ],
  ],
]

export default function Home() {
  return <BaseHome carousel={zs_banner} />
}
