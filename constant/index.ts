/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import { SoftwareProps } from '@/components/Software'

type METAProps = {
  company: string
  spell: string
  headerLogo: string
  footerLogo: string
  wechatQRCode: string
  tips: any[]
  property: any[]
  softwareList: SoftwareProps[]
  companyFullName: string
  title: string
  phone: string
  email: string
  address: string
  content: string
  description: string
  portalUri: string
}

export const PLATFORM = process.env.PLATFORM || 'yuansuan'

const defaultMeta: METAProps = {
  company: '远算',
  spell: 'Yuansuan',
  headerLogo: require('@/public/yuansuan/header-logo.svg'),
  footerLogo: require('@/public/yuansuan/footer-logo.png'),
  wechatQRCode: require('@/public/yuansuan/wechat.png'),
  tips: require('@/public/yuansuan/home/tips.json'),
  property: require('@/public/yuansuan/home/content.json'),
  softwareList: require('@/public/yuansuan/software/list.json'),
  companyFullName: '浙江远算科技有限公司',
  title: '远算云-弹性CAE仿真云计算平台',
  phone: '400-168-2407',
  email: 'contact@yuansuan.cn',
  address: '杭州市西湖区千岛湖智谷大厦C幢15楼',
  content:
    '云计算、仿真、云仿真、仿真云计算、仿真计算、工业互联网、数字化研发、CAE、Ansys、Fluent、MSC、高性能、弹性',
  description:
    '远算科技旗下的工业仿真创新研发云平台，基于超算资源（无锡超算中心-神威太湖之光）和海量工业软件（软件原厂合作），赋能于高校和企业的数字化研发。',
  portalUri: 'https://cloud.yuansuan.cn'
}
export const META: METAProps =
  {
    intelligent: {
      company: '智算未来',
      spell: 'Zhisuan',
      headerLogo: require('@/public/intelligent/zslogo.svg'),
      footerLogo: require('@/public/intelligent/zslogo.svg'),
      wechatQRCode: require('@/public/intelligent/wechat.png'),
      tips: require('@/public/intelligent/home/tips.json'),
      property: require('@/public/intelligent/home/content.json'),
      softwareList: require('@/public/intelligent/software/list.json'),
      companyFullName: '智算未来（无锡）科技有限公司',
      title: '智算未来',
      phone: '0510-85162150',
      email: 'contact@yuansuan.cn',
      address: '江苏省无锡市滨湖区吟白路1号',
      content:
        '智算未来、无锡超算、神威、太湖之光、仿真云计算、工业物联网、远算',
      description:
        '智算未来基于无锡超算的集群资源，由浙江远算提供平台技术支撑和产品运营，赋能于高校和企业的数字化研发。',
      portalUri: 'https://future.zsuan.cloud'
    },
    yuansuan: defaultMeta
  }[PLATFORM] || defaultMeta
