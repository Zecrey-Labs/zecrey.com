/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { StyledLayout } from '@/style/about'
import { Banner } from '@/components'
import { Img } from '@/components'

const images: [string, string][] = [
  [
    require('@/public/images/about/banner.png?lqip'),
    require('@/public/images/about/banner.png'),
  ],
  [
    require('@/public/images/about/content.png?lqip'),
    require('@/public/images/about/content.png'),
  ],
  [
    require('@/public/images/about/ys.png?lqip'),
    require('@/public/images/about/ys.png'),
  ],
]

export default function About() {
  if (images) {
    return (
      <StyledLayout>
        <Banner className={'banner'} img={images[0]} />
        <div className='content'>
          <Img className='zs' src={images[1]} alt='' />
          <Img className='ys' src={images[2]} alt='' />
          <div
            style={{ backgroundImage: '/images/about/back.png' }}
            className='item'>
            <div
              style={{
                position: 'absolute',
                fontSize: '0.3rem',
                fontWeight: 'bold',
                lineHeight: '0.4rem',
                left: '0.65rem',
                top: '0.5rem',
              }}>
              智算科技
              <div
                style={{
                  width: '0.39rem',
                  bottom: '-0.15rem',
                  borderBottom: '0.06rem solid #FFFFFF',
                  position: 'absolute',
                }}
              />
            </div>
            <div
              style={{
                width: '6.44rem',
                height: '3.83rem',
                position: 'absolute',
                top: '1.6rem',
                left: '0.65rem',
                lineHeight: '0.4rem',
              }}>
              智算未来（无锡）科技有限公司是由国家超级计算无锡中心（简称无锡超算）和浙江远算科技有限公司（简称浙江远算）合资成立。无锡超算是由国家科技部、江苏省和无锡市三方于2016年共同投建，拥有峰值运算性能超过每秒十亿亿次浮点运算能力的超级计算机“神威·太湖之光”；浙江远算是国内领先的创新研发云平台产品提供商与服务运营商。双方基于无锡超算的集群资源，通过平台技术升级、客户价值提升和产品运营服务等方式，进一步提升整体运营效率、提供高附加值服务、降低运营成本。未来目标是打造出中国汽车数字化超算云产品，建立技术领先的智能网联车产品体系，给企业提供数字化研发升级解决方案，实现立足服务江苏，进而辐射长三角以及覆盖全国的市场，并且为双方合作创造更大的商业价值。
            </div>
          </div>
        </div>
      </StyledLayout>
    )
  } else {
    return null
  }
}
