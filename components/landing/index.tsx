import classNames from 'classnames'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Icon from '../common/Icon'
import { isSafari } from 'react-device-detect'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 7.8rem);
  min-height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(43, 43, 43, 1);
  margin-top: -4rem;
  margin-bottom: 7.8rem;
  animation: backgroundFadeOut 1.7s cubic-bezier(0.44, 0.01, 0.23, 0.97) 2.5s
    forwards;
  @keyframes backgroundFadeOut {
    0% {
      background: rgba(43, 43, 43, 1);
    }
    100% {
      background: rgba(43, 43, 43, 0);
    }
  }
  .container {
    position: relative;
    width: 128rem;
    height: 58.6rem;
    z-index: 100;
  }
`
const Box = styled.div`
  position: relative;
  width: 10.5rem;
  height: 32.6rem;
  background: rgba(56, 56, 56, 0.25);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  backdrop-filter: blur(2.7rem);
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 11.6rem;
  opacity: 0;
  animation: zoomIn1 1.7s cubic-bezier(0.44, 0.01, 0.23, 0.97) 4s forwards,
    zoomIn2 0.4s cubic-bezier(0.44, 0.01, 0.23, 0.97) 4s forwards;
  @keyframes zoomIn1 {
    0% {
      width: 10.5rem;
    }
    100% {
      width: 97.4rem;
    }
  }
  @keyframes zoomIn2 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.05;
    &.dots {
      width: 27.2rem;
      height: 26.6rem;
      color: #fff;
    }
    &.logo {
      width: 15.3rem;
      height: 16.4rem;
      color: #fffdfd;
    }
  }
`
const Label = styled.div`
  position: absolute;
  top: 18rem;
  left: 6rem;
  display: inline-block;
  height: 1.8rem;
  border: 0.1rem solid #2ad4d8;
  border-radius: 0.5rem;
  font-family: 'Lexend';
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #2ad4d8;
  padding: 0 0.7rem;
  transform: scale(0.92) translateY(1.3rem);
  transform-origin: left;
  opacity: 0;
  animation: fadeUp 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 4s forwards;
  @keyframes fadeUp {
    0% {
      transform: scale(0.92) translateY(1.3rem);
      opacity: 0;
    }
    100% {
      transform: scale(0.92) translateY(0);
      opacity: 1;
    }
  }
`
const Text = styled.div`
  position: absolute;
  width: 47.4rem;
  top: 21.2rem;
  left: 6rem;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 4.5rem;
  letter-spacing: 0.04rem;
  background: linear-gradient(90deg, #29e9f0 0%, #f5b6ff 99.86%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeUp2 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 1s forwards;
  transform: translateY(1.3rem);
  opacity: 0;
  span.muted {
    opacity: 0;
  }
`
const Text2 = styled.div`
  position: absolute;
  width: 56.6rem;
  top: 31.2rem;
  left: 6rem;
  font-family: 'IBM Plex Sans';
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.014rem;
  color: #ffffff;
  transform: translateY(1.3rem);
  opacity: 0;
  animation: fadeUp2 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 4s forwards;
  @keyframes fadeUp2 {
    0% {
      transform: translateY(1.3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
const Img = styled.img`
  position: absolute;
  top: 0;
  right: -4.5rem;
  width: 83.7rem;
  height: 58.6rem;
  opacity: 0;
  animation: imgFadeIn 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 5s forwards;
  @keyframes imgFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const Video = styled.video`
  position: absolute;
  top: 0;
  right: -4.5rem;
  width: 83.7rem;
  height: 58.6rem;
  opacity: 0;
  animation: fadeIn 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 5s forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const Bottom = styled.div`
  position: absolute;
  bottom: 4rem;
  opacity: 0;
  animation: fadeIn 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 5s forwards;
  div {
    font-family: 'Lexend';
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 2rem;
    color: #ffffff;
  }
  svg {
    display: block;
    width: 1.3rem;
    height: 0.8rem;
    margin: 0.8rem auto 1rem auto;
    color: #ffffff;
    animation: move 1.8s ease-out 5s infinite;
  }
  @keyframes move {
    0% {
      transform: translateY(-15%);
    }
    50% {
      transform: translateY(35%);
    }
    100% {
      transform: translateY(-15%);
    }
  }
`

const Landing = () => {
  useEffect(() => {
    setTimeout(() => {
      let body = document.querySelector('body')
      body.classList.add('enable-scroll')
    }, 5 * 1000)
  }, [])

  return (
    <Wrap className='landing'>
      <div className='container'>
        <Box>
          <Icon className='dots' name='dots' />
          <Icon className='logo' name='logo' />
        </Box>
        <Label>Zecrey Protocal</Label>
        <Text>
          A turn-key solution for Cross-chain and privacy
          {/* <Typing str='Bringing Cross-chain Privacy to Digital Assets.' /> */}
        </Text>
        <Text2>
          A turn-key, Layer 2 privacy solution for cross-chain transactions and
          asset management based on Zero-knowledge (zk) Roll-Ups. With Zecrey’s
          L2 protocol you can easily manage, swap and bridge assets across
          multiple chains, all while knowing your transactions are private and
          protected from malicious arbitrageurs.
        </Text2>
        {isSafari ? (
          <Img src='/Zecrey_3D_poster.png' alt='Zecrey_3D_poster' />
        ) : (
          <Video
            src='/Zecrey_3D.webm'
            autoPlay
            loop
            muted
            poster='/Zecrey_3D_poster.png'
            onContextMenu={e => e.preventDefault()}
          />
        )}
      </div>
      <Bottom>
        <div>Learn More</div>
        <Icon name='dart' />
      </Bottom>
    </Wrap>
  )
}

export default Landing

const Typing = (props: { str: string }) => {
  const [mutedFrom, setMutedFrom] = useState(0)

  useEffect(() => {
    let count = 0
    let timer = setInterval(() => {
      count++
      setMutedFrom(count)
      if (count >= props.str.length) {
        clearInterval(timer)
      }
    }, 80)
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [])

  return (
    <>
      {Array.from(props.str).map((i, index) => (
        <span key={index} className={classNames({ muted: index > mutedFrom })}>
          {i}
        </span>
      ))}
    </>
  )
}
