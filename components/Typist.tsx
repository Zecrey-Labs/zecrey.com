/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React, { useState, useMemo } from 'react'
import ReactTypist from 'react-typist'

interface Props {
  children: string[]
  className?: string
}

export function Typist({ children, className }: Props) {
  const [index, setIndex] = useState(0)
  const [typing, setTyping] = useState(true)

  return (
    <>
      {typing && (
        <ReactTypist
          className={className}
          avgTypingDelay={50}
          cursor={{ blink: true }}
          onTypingDone={() => {
            const newIndex = index + 1
            setIndex(newIndex > children.length - 1 ? 0 : newIndex)
            setTyping(false)
            setTyping(true)
          }}>
          {children[index]}
          <ReactTypist.Backspace count={children[index].length} delay={300} />
        </ReactTypist>
      )}
    </>
  )
}
