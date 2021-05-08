import { META } from '@/constant'
import React from 'react'

const Img = props => (
  <img
    src={`${META.basePath}${props.src}`}
    alt={props.alt}
    className={props.className}
  />
)

export default Img
