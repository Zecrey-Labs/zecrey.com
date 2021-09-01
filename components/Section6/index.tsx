/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import Image from 'next/image'
import {
  ArrowStyle,
  BlockStyle,
  Image1,
  Image2,
  Image3,
  Image4,
  ScreenshotStyle,
  Style
} from '@/components/Section6/style'

const Block = ({ text, children }) => (
  <BlockStyle>
    <div className='square'>{children}</div>
    <div className='text'>
      {text.map((i: string, index: number) => (
        <span key={index}>{i}</span>
      ))}
    </div>
  </BlockStyle>
)

export const Section6 = () => {
  return (
    <Style>
      <h2>Privacy for a smart contract world</h2>
      <p>
        Blockchains today are not protecting user privacy. Privacy protocols
        have enabled private cash transactions but these systems lack
        programmability. It is difficult and expensive for users to achieve
        complete digital asset privacy.
      </p>
      <div className='feature'>
        <ul>
          <li>
            <Block text={['Most', 'Privacy Protocols']}>
              <Image1>
                <Image
                  src='/section6/image1.svg'
                  alt='Most Privacy Protocols'
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                />
              </Image1>
            </Block>
          </li>
          <li>
            <ArrowStyle>
              <Image
                src='/section6/arrow.svg'
                alt='arrow'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </ArrowStyle>
          </li>
          <li>
            <Block text={['Not Generalized']}>
              <Image2>
                <Image
                  src='/section6/image2.svg'
                  alt='Not Generalized'
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                />
              </Image2>
            </Block>
          </li>
          <li>
            <Block text={['High Cost']}>
              <Image3>
                <Image
                  src='/section6/image3.svg'
                  alt='High Cost'
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                />
              </Image3>
            </Block>
          </li>
          <li>
            <Block text={['Inefficient']}>
              <Image4>
                <Image
                  src='/section6/image4.svg'
                  alt='Inefficient'
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                />
              </Image4>
            </Block>
          </li>
        </ul>
      </div>
      <div className='row3'>
        <div className='left'>
          <h2>The Zecrey protocol makes it easy.</h2>
          <p>
            Efficient and cheap to move digital assets into a private setting.
          </p>
          <div className='button'>
            <div className='circle'>
              <span className='inner' />
              <span className='medium' />
              <span className='outer' />
            </div>
            <span>Zecrey Mainnet</span>
            <div className='triangle'></div>
            <img
              className='pointer'
              src='/section6/pointer.svg'
              alt='pointer'
            />
          </div>
        </div>
        <div className='right'>
          <ScreenshotStyle>
            <div className='blur-bg'></div>
            <Image
              src='/screenshots/l2-wallet.png'
              alt='screenshot'
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </ScreenshotStyle>
        </div>
      </div>
    </Style>
  )
}
