/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { Banner, NewImage } from '@/components'
import {
  ExpertStyle,
  ExpertsStyle,
  ExpertsBannerStyle,
} from '@/style/intelligent/professional'
import { requirePublic } from '@/utils'
import { META } from '@/constant'

const images = {
  professional_banner: [
    require('@/public/intelligent/professional_banner.png?lqip'),
    require('@/public/intelligent/professional_banner.png'),
  ],
  consult_qrcode: [
    require('@/public/intelligent/consult_qrcode.png?lqip'),
    require('@/public/intelligent/consult_qrcode.png'),
  ],
}

const experts = require('@/public/experts/list.json')

interface ExpertProps {
  avatar: string
  name: string
  description: string[] | string
  skills: string[]
}

const requireAvatar = requirePublic('experts')

const Expert = ({ avatar, name, description, skills }: ExpertProps) => (
  <ExpertStyle>
    <div className='background' />
    <NewImage img={requireAvatar(avatar)} width={140} height={140} />
    <h1 className={'name'}>{name}</h1>
    <div className={'description'}>
      {typeof description === 'string' && <p>{description}</p>}
      {Array.isArray(description) &&
        description.map(item => <p key={item}>{item}</p>)}
    </div>
    <div className='skills'>
      {skills.map(skill => (
        <p key={skill}>{skill}</p>
      ))}
    </div>
  </ExpertStyle>
)

export default function Experts() {
  return (
    <div>
      <ExpertsBannerStyle>
        <Banner
          img={images['professional_banner']}
          className={'reactive'}
          title={`${META.company}专家库`}
          subTitle={`${META.company}与高校的科研人才团队(教授、博士、研究生)合作，构建企业的“外脑”资源`}
        />
      </ExpertsBannerStyle>
      <ExpertsStyle>
        {experts.map(expert => (
          <Expert key={expert.name} {...expert} />
        ))}
      </ExpertsStyle>
    </div>
  )
}
