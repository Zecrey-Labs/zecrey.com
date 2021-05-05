/*
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Fixed } from './Fixed'
import { PLATFORM } from '@/constant'

export const Layout = props => {
  const [gotGift, setGotGift] = React.useState(false)

  React.useEffect(() => {
    try {
      const temp = localStorage.getItem('gotGift')
      setGotGift(temp === 'true')
    } catch (e) {}
  }, [])

  return (
    <div style={{ backgroundColor: '#f8f9fb' }}>
      <Header />
      {props.children}
      {PLATFORM === 'yuansuan' && !gotGift && (
        <Fixed
          submit={() => {
            setGotGift(true)
            try {
              localStorage.setItem('gotGift', 'true')
            } catch (e) {}
          }}
        />
      )}
      <Footer />
    </div>
  )
}
