/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React, { useState } from 'react'
import Img from 'components/img'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { validateEmail } from '@/utils'
import { DOCS_URL, DOWNLOAD_URL } from '@/constant'
import { EmailSubscribe, Message, Style } from '@/components/Footer/style'

library.add(fab)

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = React.useState(null)

  React.useEffect(() => {
    let timeoutID
    if (message) {
      timeoutID = setTimeout(() => {
        setMessage(null)
      }, 1000)
    }
    return () => {
      timeoutID && clearTimeout(timeoutID)
    }
  }, [message])

  const subscribe = async () => {
    if (validateEmail(email)) {
      try {
        const response = await fetch('/api/subscribe?address=' + email)
        const result = await response.json()
        if (result.message === 'subscribed') setEmail('')
        setMessage(
          result.message === 'subscribed'
            ? 'Subscribe Successfully'
            : result.error
        )
      } catch (error) {
        setMessage('Failed to subscribe')
      }
    } else {
      setMessage('Invalid Email')
    }
  }

  return (
    <Style>
      <Img className='wave' src='/footer/wave.svg' />
      <div className='content desktop'>
        <div className='section1'>
          <Img className='icon' src={'/logo1.svg'} alt='' />
          <div className='subsection'>
            <a href='https://docsend.com/view/ntcsmt7meu84gcqk' target='_blank'>
              White paper
            </a>
            <a
              href={DOWNLOAD_URL}
              className='downloadapp'
              target='_blank'
              rel='noreferrer'>
              Privacy Wallet App
            </a>
          </div>
          <div className='email-subscribe'>
            <EmailSubscribe ac={email ? true : false}>
              <label>Subscribe:</label>
              <input
                type='text'
                placeholder='Send us your email address'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button onClick={subscribe}>Okay</button>
            </EmailSubscribe>
          </div>
        </div>
        <div className='section2'>
          <div className='subsection1'>
            <a
              className='twitter'
              href='https://twitter.com/zecreyprotocol'
              target='_blank'>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a
              className='medium'
              href='https://medium.com/@zecrey'
              target='_blank'>
              <FontAwesomeIcon icon={['fab', 'medium']} />
            </a>
            <a
              className='github'
              href='https://github.com/Zecrey-Labs'
              target='_blank'>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className='telegram' href='https://t.me/zecrey' target='_blank'>
              <FontAwesomeIcon icon={['fab', 'telegram']} />
            </a>
            <a
              className='discord'
              href='https://discord.com/invite/U98ghQsJE5'
              target='_blank'>
              <FontAwesomeIcon icon={['fab', 'discord']} />
            </a>
          </div>
          <div className='subsection2'>
            <div className='contact'>
              <em>Contact:</em>
              <span>bd@zecrey.com</span>
            </div>
            <span className='bar' />
            <div className='copyright'>
              Copyright © 2021 Zecrey. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <div className='content mobile'>
        <div className='row1'>
          <div>
            <div className='left'>
              <Img className='icon' src={'/logo1.svg'} alt='' />
              <div className='nav'>
                <a
                  href='https://docsend.com/view/ntcsmt7meu84gcqk'
                  target='_blank'>
                  White paper
                </a>
                <a
                  href={DOWNLOAD_URL}
                  className='downloadapp'
                  target='_blank'
                  rel='noreferrer'>
                  App
                </a>
                {/* <a href={DOCS_URL} target='_blank'>
                  Document
                </a> */}
              </div>
            </div>
            <div className='right'>
              <a href='https://twitter.com/zecreyprotocol' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href='https://medium.com/@zecrey' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'medium']} />
              </a>
              <a href='https://github.com/Zecrey-Labs' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
              <a href='https://t.me/zecrey' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'telegram']} />
              </a>
              <a href='https://discord.com/invite/U98ghQsJE5' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'discord']} />
              </a>
            </div>
          </div>
          <div className='email-subscribe'>
            <EmailSubscribe ac={email ? true : false}>
              <label>Subscribe:</label>
              <input
                type='text'
                placeholder='email address'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button onClick={subscribe}>Okay</button>
            </EmailSubscribe>
          </div>
        </div>
        <div className='row2'>
          Copyright © 2021 Zecrey. All rights reserved.
        </div>
      </div>
      {message && <Message className='message'>{message}</Message>}
    </Style>
  )
}
