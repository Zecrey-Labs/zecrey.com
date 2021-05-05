/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { TipStyle, StyledLayout } from '@/style/home'
import { Carousel } from 'antd'
import { Banner, Img, StartUseAppButton } from '@/components'
import { META, PLATFORM } from '@/constant'

type Props = {
  carousel?: [string, string][][]
}

const ys_carousel: [string, string][][] = [
  [
    [
      require('@/public/yuansuan/home/carousel/1.1.png?lqip'),
      require('@/public/yuansuan/home/carousel/1.1.png')
    ],
    [
      require('@/public/yuansuan/home/carousel/1.2.png?lqip'),
      require('@/public/yuansuan/home/carousel/1.2.png')
    ]
  ],
  [
    [
      require('@/public/yuansuan/home/carousel/2.1.png?lqip'),
      require('@/public/yuansuan/home/carousel/2.1.png')
    ],
    [
      require('@/public/yuansuan/home/carousel/2.2.png?lqip'),
      require('@/public/yuansuan/home/carousel/2.2.png')
    ]
  ],
  [
    [
      require('@/public/yuansuan/home/carousel/3.3.png?lqip'),
      require('@/public/yuansuan/home/carousel/3.3.png')
    ],
    [
      require('@/public/yuansuan/home/carousel/3.1.png?lqip'),
      require('@/public/yuansuan/home/carousel/3.1.png')
    ],
    [
      require('@/public/yuansuan/home/carousel/3.2.png?lqip'),
      require('@/public/yuansuan/home/carousel/3.2.png')
    ]
  ],
  [
    [
      require('@/public/yuansuan/home/carousel/4.1.png?lqip'),
      require('@/public/yuansuan/home/carousel/4.1.png')
    ],
    [
      require('@/public/yuansuan/home/carousel/4.2.png?lqip'),
      require('@/public/yuansuan/home/carousel/4.2.png')
    ]
  ],
  [
    [
      require('@/public/yuansuan/home/carousel/5.1.png?lqip'),
      require('@/public/yuansuan/home/carousel/5.1.png')
    ]
  ]
]

const images: string[] = [
  require('@/public/yuansuan/home/banner1.png'),
  require('@/public/yuansuan/home/banner2.png'),
  require('@/public/yuansuan/home/little.png'),
  require('@/public/intelligent/home/banner1.png'),
  require('@/public/yuansuan/home/banner3.png')
]

const tipIcons: string[] = [
  require('@/public/yuansuan/home/icon_1.png'),
  require('@/public/yuansuan/home/icon_2.png'),
  require('@/public/yuansuan/home/icon_3.png'),
  require('@/public/yuansuan/home/icon_4.png'),
  require('@/public/yuansuan/home/icon_5.png')
]

const iconfont: string[] = [
  require('@/public/yuansuan/home/iconfont_1.svg'),
  require('@/public/yuansuan/home/iconfont_4.svg'),
  require('@/public/yuansuan/home/iconfont_3.svg'),
  require('@/public/yuansuan/home/iconfont_2.svg'),
  require('@/public/yuansuan/home/iconfont_3.svg')
]

const propertyList = META.property
const tips = META.tips

const Tips = () => (
  <TipStyle>
    {tips.map((tip, index) => {
      return (
        <div className='tip' key={index}>
          <Img src={tipIcons[index]} />
          <h1>{tip.title}</h1>
          {tip.content.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      )
    })}
  </TipStyle>
)

export default function Home({ carousel = ys_carousel }: Props) {
  const ref = React.useRef()

  React.useEffect(() => {
    const current = ref?.current as any
    const interval = setInterval(() => {
      current?.slick?.slickNext()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [ref, ref?.current])

  return (
    <StyledLayout>
      <div className='banner'>
        <Carousel ref={ref}>
          {PLATFORM === 'yuansuan' && (
            <Banner
              className='reactive'
              img={images[4]}
              title={'无锡超算独家运营'}
              subTitle={'中国最强HPC'}>
              <StartUseAppButton
                className={'big'}
                category={'banner'}
                label={'无锡超算'}>
                立即使用
              </StartUseAppButton>
            </Banner>
          )}
          <Banner
            className='reactive'
            img={images[0]}
            title={'一站式工业数字化研发平台'}
            subTitle={'开启企业数字化研发云模式'}>
            <StartUseAppButton
              className={'big'}
              category={'banner'}
              label={'远算云平台介绍'}>
              立即使用
            </StartUseAppButton>
          </Banner>
          {PLATFORM === 'yuansuan' ? (
            <Banner
              className='reactive'
              img={images[1]}
              title={'国家等保三级资质认证'}
              subTitle={'非银行机构最高级认证,为信息安全保驾护航'}>
              <StartUseAppButton
                className={'big'}
                category={'banner'}
                label={'等保三级资质证书'}>
                立即使用
              </StartUseAppButton>
            </Banner>
          ) : (
            <Banner
              className='reactive right'
              img={images[3]}
              title={'助力高校科研，赋能企业数字化研发'}
              subTitle={'命令行+图形化界面双模式'}>
              <StartUseAppButton className={'big'}>立即使用</StartUseAppButton>
            </Banner>
          )}
        </Carousel>
        <Tips />
      </div>
      <div className='main'>
        {propertyList.map((property, index) => (
          <div className='content-item' key={index}>
            <div className='carousel'>
              <Carousel autoplay dots={false}>
                {carousel[index].map((item, index) => (
                  <Img className='carousel-image' src={item} key={index} />
                ))}
              </Carousel>
            </div>
            <div className='description'>
              <h1>
                <Img src={iconfont[index]} />
                {property.title}
                <StartUseAppButton category={'立即使用'} label={property.title}>
                  立即使用
                </StartUseAppButton>
              </h1>
              <h2>{property.subtitle}</h2>
              <ul>
                {property.detail.map((text, index) => {
                  return (
                    <li key={index}>
                      <Img src={images[2]} />
                      {text}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </StyledLayout>
  )
}
