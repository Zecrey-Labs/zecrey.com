/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Img, Link, StartUseAppButton } from '@/components'
import { Descriptions } from 'antd'
import { SoftwareProps } from '@/components/Software'
import {
  BreadCrumbStyle,
  HeaderStyle,
  DescriptionStyle,
  SoftwareStyle
} from '@/style/intelligent/software'
import { META, PLATFORM } from '@/constant'
import { LeftOutlined } from '@ant-design/icons'
const LOCALPLATFORM = PLATFORM

const { Item } = Descriptions

const BreadCrumb = () => (
  <BreadCrumbStyle>
    <Link path={'resource#software'}>
      <a className={'route'}>
        <LeftOutlined className={'left-arrow'} />
        资源配置
      </a>
    </Link>
    <span className='separator'>{'/'}</span>
    <span className={'route'}>软件详情</span>
  </BreadCrumbStyle>
)

export default function Software() {
  const router = useRouter()
  const { name } = router.query
  const software: SoftwareProps = META.softwareList.find(
    item => item.name === name
  )
  const logo = useMemo(() => {
    try {
      return require(`@/public/${LOCALPLATFORM}/software/logo/${software?.logo}.png`)
    } catch (err) {
      return
    }
  }, [software])

  return (
    <SoftwareStyle>
      <BreadCrumb />
      <HeaderStyle>
        <div className='column-one'>
          <Img src={logo} />
        </div>
        <div className='column-two'>
          <Descriptions title={software?.name}>
            <Item label='品牌商'>{software?.manufacture}</Item>
          </Descriptions>
        </div>
        <div className='column-three'>
          <StartUseAppButton
            className={software?.published ? 'published' : 'unpublished'}
            disabled={!software?.published}
            category={'软件详情'}
            label={software?.name}>
            {software?.published ? '免费在线试用' : '软件接入中'}
          </StartUseAppButton>
        </div>
      </HeaderStyle>
      <DescriptionStyle>
        <div className='title'>软件介绍</div>
        <div className='description'>{software?.description}</div>
      </DescriptionStyle>
      {software?.detail && (
        <DescriptionStyle>
          <div className='title'>软件详情</div>
          <ul className='detail'>
            {software?.detail?.map((item, index) => (
              <li key={index}>
                <Img src={require('@/public/yuansuan/home/little.png')} />
                {item}
              </li>
            ))}
          </ul>
        </DescriptionStyle>
      )}
    </SoftwareStyle>
  )
}
