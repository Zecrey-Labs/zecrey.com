/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { Banner, Img } from '@/components'
import { ShowcaseStyle } from '@/style/showcase'
import { useRouter } from 'next/router'

interface ShowcaseProps {
  [key: string]: {
    index: number
    banner: {
      title: string
      subtitle: string
    }
    description: {
      background: string[]
      solution: string[]
      achievement: string[]
    }
  }
}

const showcaseList: ShowcaseProps[] = require('@/public/showcase/list.json')

const bannerImages = [
  [
    require('@/public/showcase/banner/1.png?lqip'),
    require('@/public/showcase/banner/1.png'),
  ],
  [
    require('@/public/showcase/banner/2.png?lqip'),
    require('@/public/showcase/banner/2.png'),
  ],
  [
    require('@/public/showcase/banner/3.png?lqip'),
    require('@/public/showcase/banner/3.png'),
  ],
]

const illustrations = [
  [
    require('@/public/showcase/illustration/1.png?lqip'),
    require('@/public/showcase/illustration/1.png'),
  ],
  [
    require('@/public/showcase/illustration/2.png?lqip'),
    require('@/public/showcase/illustration/2.png'),
  ],
  [
    require('@/public/showcase/illustration/3.png?lqip'),
    require('@/public/showcase/illustration/3.png'),
  ],
]

const Showcase = () => {
  const router = useRouter()
  const { name } = router.query

  const showcase = showcaseList[name as string]

  return showcase ? (
    <ShowcaseStyle>
      <Banner
        className='reactive'
        img={bannerImages[showcase.index]}
        title={showcase.banner.title}
        subTitle={showcase.banner.subtitle}
      />
      <div className='content'>
        <Img src={illustrations[showcase.index]} />
        <div className='text'>
          <h1>项目背景</h1>
          <ul>
            {showcase.description.background.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <h1>解决方案概要</h1>
          <ul>
            {showcase.description.solution.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <h1>价值及成果</h1>
          <ul>
            {showcase.description.achievement.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </ShowcaseStyle>
  ) : (
    <div>hello</div>
  )
}

export default Showcase
