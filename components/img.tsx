/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'

const Img = ({ src, ...props }) => (
  <img src={src} {...props} alt={props.alt || ''} />
)

export default Img
