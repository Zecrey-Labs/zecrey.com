/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { Img } from '@/components'
import { Modal } from './Modal'
import { FixedStyle } from './style'
import { buryPoint } from '@/utils'

const giftImages = [
  require('@/public/images/gift.gif'),
  require('@/public/images/giftButton.gif'),
]

interface Props {
  submit: () => void
}

export const Fixed = ({ submit }: Props) => {
  const [modalVisible, setModalVisible] = React.useState(false)

  const openFormModal = () => {
    setModalVisible(true)
  }

  return (
    <FixedStyle>
      {modalVisible && (
        <Modal
          close={() => {
            setModalVisible(false)
          }}
          submit={submit}
        />
      )}
      <div
        className={'gift'}
        onClick={event => {
          buryPoint({ category: '弹窗', action: '点击', label: '' })
          event.stopPropagation()
        }}>
        <Img src={giftImages[0]} className={'top'} />
        <Img src={giftImages[1]} className={'button'} onClick={openFormModal} />
      </div>
    </FixedStyle>
  )
}
