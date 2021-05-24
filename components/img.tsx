import { META } from '@/constant'
import React from 'react'

const Img = ({ src, ...props }) => (
  <img src={`${META.basePath}${src}`} {...props} />
)

export default Img