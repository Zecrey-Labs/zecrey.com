import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { debounce } from 'lodash'
import { VideoModal } from '../video-modal'
import Icon from '../common/Icon'
import { MobileWrap, Wrap } from './styles'
import { useMediaQuery } from 'react-responsive'
import ImgBox from '../common/ImgBox'
import { isMobile } from 'react-device-detect'

const WalletDownload = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 })
  return isMobileView ? <Mobile /> : <Desktop />
}

export default WalletDownload

function Desktop() {
  const [visible, setVisible] = useState(false)
  const [video, setVideo] = useState(false)
  const dom = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let handleScroll = () => {
      if (dom.current) {
        let domTop = dom.current.getBoundingClientRect().top
        let domHeight = dom.current.getBoundingClientRect().height
        let height = window.innerHeight
        if (height - domTop >= domHeight / 5) {
          setVisible(true)
          document.removeEventListener('scroll', handleScroll)
        }
      }
    }
    const debouncedScrollEventHandler = debounce(handleScroll, 50)
    document.addEventListener('scroll', debouncedScrollEventHandler)
    return () => {
      document.removeEventListener('scroll', debouncedScrollEventHandler)
    }
  }, [])
  return (
    <>
      <Wrap ref={dom} className={classNames({ visible })}>
        <div className='outermostlayer'>
          <img
            src='/walletdownload/Extension.svg'
            alt=''
            className='extensionwallet'
          />
          <div className='img-span'>
            <span className='privacy'>Privacy Wallet Extension</span>
            <img src='/walletdownload/smallcircle.png' alt='' />
          </div>
          <div className='oneclick'>
            Your Privacy Matters <br /> with One-Click
          </div>
          <a
            className='download'
            href='https://chrome.google.com/webstore/detail/zecrey/ojbpcbinjmochkhelkflddfnmcceomdi'
            target='_blank'
            rel='noreferrer'>
            Download
          </a>
          <button className='video' onClick={() => setVideo(true)}>
            <Icon name='play' /> Watch the video introduction
          </button>
          <div className='rightpicture'>
            <img
              src='/walletdownload/largeIcon.webp'
              className='cross'
              alt='zecrey'
            />
          </div>
        </div>
        {video && (
          <VideoModal
            label='Introduction'
            src='/video/wallet-video.mp4'
            close={() => setVideo(false)}
          />
        )}
      </Wrap>
    </>
  )
}

const Mobile = () => {
  const [video, setVideo] = useState(false)
  const dom = useRef<HTMLVideoElement>(null)
  return (
    <MobileWrap>
      <label className='title-1'>
        Your Privacy Matters <br /> with One-Click
      </label>
      <label className='title-2'>Privacy Wallet Extension</label>
      <ImgBox src='/walletdownload/largeIcon.webp' alt='Extension' />
      <a
        className='download'
        href='https://chrome.google.com/webstore/detail/zecrey/ojbpcbinjmochkhelkflddfnmcceomdi'
        target='_blank'
        rel='noreferrer'>
        Download
      </a>
      <button
        className='video'
        onClick={() => {
          isMobile ? dom.current.play() : setVideo(true)
        }}>
        <Icon name='play' /> Watch the video introduction
      </button>
      {video && (
        <VideoModal
          label='Introduction'
          src='/video/wallet-video.mp4'
          close={() => setVideo(false)}
        />
      )}
      {isMobile && (
        <video
          className='video-on-mobile'
          ref={dom}
          src='/video/wallet-video.mp4'
          controls
          onContextMenu={e => e.preventDefault()}></video>
      )}
    </MobileWrap>
  )
}
