/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { NavList } from './NavList'
import { StyledLayout } from './style'
import { Img } from '@/components'
import { META, PLATFORM } from '@/constant'

const icon = {
  phone: require('@/public/images/phone.png'),
  mail: require('@/public/images/mail.png'),
  location: require('@/public/images/location.png'),
}

export const Footer = () => {
  return (
    <StyledLayout>
      <section className={'main'}>
        <div className='info'>
          <Img src={META.footerLogo} />
          <ul className='contact'>
            <li className={'phone'}>
              <Img src={icon.phone} />
              {META.phone}
            </li>
            <li>
              <Img src={icon.mail} />
              {META.email}
            </li>
            <li>
              <Img src={icon.location} />
              {META.address}
            </li>
          </ul>
        </div>
        <NavList />
        <div className='qrcode'>
          <div className='item'>
            <Img src={META.wechatQRCode} />
            <p>微信公众号</p>
          </div>
        </div>
      </section>

      <section className='registration'>
        {[
          'Copyright © 2016 - 2021',
          META.companyFullName,
          PLATFORM === 'yuansuan'
            ? '备案号浙ICP备19024837号'
            : '备案号苏ICP备2020059166号',
          PLATFORM === 'intelligent' ? (
            <a
              target='_blank'
              href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32021102001094'>
              <img style={{ width: 16 }} src='/record.png' />
              苏公网安备 32021102001094号
            </a>
          ) : (
            <a
              target='_blank'
              href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602011015'>
              <img style={{ width: 16 }} src='/record.png' />
              浙公网安备 33010502005820号
            </a>
          ),
        ]
          .filter(Boolean)
          .map((item, index) => (
            <span key={index}>{item}</span>
          ))}
      </section>
    </StyledLayout>
  )
}
