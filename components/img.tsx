import { META } from '@/constant'
import React from 'react'

const Img = props => (
  <img src={`${META.basePath}${props.src}`} alt={props.alt} />
)

export default Img
