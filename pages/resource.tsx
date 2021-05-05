/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { Banner, Img, Link } from '@/components'
import { SoftwareProps } from '@/components/Software'
import {
  TitleStyle,
  HardwareBannerStyle,
  ImageAndTableStyle,
  HardwareResourceStyle,
  SoftwareResourceStyle,
  SoftwareListStyle
} from '@/style/intelligent/resource'
import { buryPoint } from '@/utils'
import { META, PLATFORM } from '@/constant'
const LOCALPLATFORM = PLATFORM

const hardwareDescription: any[] = require('@/public/hardware/description.json')

const images = {
  computing_machine: [
    require('@/public/intelligent/computing_machine.png?lqip'),
    require('@/public/intelligent/computing_machine.png')
  ],
  hardware1: [
    require('@/public/intelligent/hardware1.png?lqip'),
    require('@/public/intelligent/hardware1.png')
  ],
  hardware2: [
    require('@/public/intelligent/hardware2.png?lqip'),
    require('@/public/intelligent/hardware2.png')
  ]
}

const PageBanner = () => (
  <Banner
    img={images['computing_machine']}
    className={'reactive'}
    title={'海量工业软件注册即用'}
    subTitle={'基于无锡超算-神威“太湖之光”高效能计算系统  '}
  />
)

interface TitleProps {
  h1: string
  h2: string
}

const Title = ({ h1, h2 }: TitleProps) => (
  <TitleStyle>
    <h1>{h1}</h1>
    <h2>{h2}</h2>
  </TitleStyle>
)

interface HardwareBannerProps {
  index: number
  height: number
}

const HardwareBanner = ({ index, height }: HardwareBannerProps) => {
  const content = [
    <>
      <h1>高效能计算系统</h1>
      <p>High Performance Computing System</p>
      <p>神威“太湖之光”</p>
    </>,
    <>
      <h1>商用辅助计算系统</h1>
      <p>Commercial Auxiliary Computing System</p>
    </>
  ]

  return (
    <HardwareBannerStyle height={height}>
      <Banner
        img={images[`hardware${index + 1}`]}
        className={`hardware${index + 1}`}>
        <div className='content'>{content[index]}</div>
      </Banner>
    </HardwareBannerStyle>
  )
}

interface ImageAndTableProps {
  description: any
  index: number
}

const ImageAndTable = ({ description, index }: ImageAndTableProps) => {
  const tableRef = React.useRef(null)

  const [tableHeight, setTableHeight] = React.useState(0)

  React.useEffect(() => {
    const onResize = () => {
      setTableHeight(tableRef.current?.offsetHeight)
    }
    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [tableRef, tableRef.current])

  const emptyCellsCount = Object.keys(description).length % 3

  return (
    <ImageAndTableStyle>
      <HardwareBanner index={index} height={tableHeight} />
      <div className='hardware-description-grid' ref={tableRef}>
        {Object.entries(description).map(([key, value]) => (
          <div className='cell' key={key}>
            <b>{key}</b>
            <span>{value}</span>
          </div>
        ))}
        {emptyCellsCount !== 0 && (
          <div
            className='space'
            style={{
              gridColumnStart: emptyCellsCount + 1
            }}
          />
        )}
      </div>
    </ImageAndTableStyle>
  )
}

const HardwareResource = () => (
  <HardwareResourceStyle>
    <Title h1={'硬件资源'} h2={'Hardware Resource'} />
    {hardwareDescription.map((description, index) => (
      <ImageAndTable description={description} index={index} key={index} />
    ))}
  </HardwareResourceStyle>
)

const softwareTypeList =
  PLATFORM === 'yuansuan'
    ? [
        '全部',
        '结构分析',
        '流体分析',
        '电磁分析',
        '前后处理',
        '生物医药',
        '3D建模',
        '其他'
      ]
    : ['全部', '结构分析', '流体分析', '电磁分析', '前后处理', '其他']

const SoftwareResource = () => {
  const [currentSoftwareType, setCurrentSoftwareType] = React.useState('全部')

  const filteredSoftwareList = React.useMemo(() => {
    const softwareListSorted: SoftwareProps[] = META.softwareList.sort(
      (i, j) => i.index - j.index
    )

    switch (currentSoftwareType) {
      case '全部':
        return softwareListSorted
      case '其他':
        return softwareListSorted.filter(
          item => !softwareTypeList.includes(item.type)
        )
      default:
        return softwareListSorted.filter(
          item => item.type === currentSoftwareType
        )
    }
  }, [currentSoftwareType])

  return (
    <SoftwareResourceStyle id={'software'}>
      <Title h1={'工业软件'} h2={'Industrial Software'} />
      <ul className={'softwareTypeFilterTab'}>
        {softwareTypeList.map(item => (
          <li
            key={item}
            className={currentSoftwareType === item ? 'active' : ''}
            onClick={() => {
              setCurrentSoftwareType(item)
            }}>
            {item}
          </li>
        ))}
      </ul>

      <SoftwareListStyle>
        {filteredSoftwareList.map((software, index) => {
          let href = ''

          try {
            href = require(`@/public/${LOCALPLATFORM}/software/logo/${software?.logo}.png`)
          } catch (err) {}

          return (
            <div className={'software'} key={software.name}>
              <Link path={`software/${encodeURIComponent(software.name)}`}>
                <div
                  className={'link'}
                  onClick={() => {
                    buryPoint({
                      category: '资源配置',
                      action: '点击',
                      label: software.name
                    })
                  }}>
                  <Img src={href} />
                  {software.name}
                </div>
              </Link>
            </div>
          )
        })}
      </SoftwareListStyle>
    </SoftwareResourceStyle>
  )
}

const Resource = () => (
  <div>
    <PageBanner />
    <HardwareResource />
    <SoftwareResource />
  </div>
)

export default Resource
