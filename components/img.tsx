import { META } from '@/constant'
import React from 'react'

const Img = ({ src, alt, className, ...props }) => (
  <img
    src={`${META.basePath}${src}`}
    alt={alt}
    className={className}
    {...props}
  />
)

export default Img
