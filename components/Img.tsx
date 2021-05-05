/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React, { forwardRef } from 'react'
import { useImage } from '@/utils'

export const Img = forwardRef(function Img(
  props: Omit<React.ImgHTMLAttributes<any>, 'src'> & {
    src?: string | any[] | { default }
  },
  ref: any
) {
  let { src, ...rest } = props
  const imgSrc = useImage(src)

  return <img ref={ref} src={imgSrc} {...rest} alt={'image'} />
})
