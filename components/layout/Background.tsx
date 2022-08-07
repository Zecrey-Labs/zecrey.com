import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Lottie, { LottiePlayer } from 'lottie-web'
import classNames from 'classnames'
import ImgBox from '../common/ImgBox'
import { CenterFlex } from '../../styles/global'
import Dark from './dark.json'
import { useMediaQuery } from 'react-responsive'

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  margin-top: -0.2rem;
  pointer-events: none;
`
const Div = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 7.8rem);
  top: 7.8rem;
  transform: translateY(10%);
`

const Background = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 })
  return isMobile ? <Mobile /> : <Desktop />
}

export default Background

const Desktop = () => {
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)
  const dom = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLottie(Lottie)
  }, [])
  useEffect(() => {
    if (!lottie || !dom.current) return
    lottie.destroy()
    lottie.loadAnimation({
      container: dom.current,
      renderer: 'svg',
      loop: false, // todo: stop for now
      autoplay: false, // todo: stop for now
      animationData: Dark,
      rendererSettings: {
        preserveAspectRatio: 'xMaxYMid slice'
      }
    })
  }, [lottie])

  return (
    <Wrap className='background'>
      <Div className={classNames('layout-animation-wrap')} ref={dom}></Div>
      <Cubes />
    </Wrap>
  )
}

const CubesWrap = styled(CenterFlex)<{ dark: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* z-index: -10; */
  opacity: ${props => (props.dark ? 1 : 0)};
  .cubes {
    transform: translateY(10%);
    width: 127.7vw;
    height: 58.7vw;
    margin-left: -13.8vw;
    margin-right: -13.8vw;
    -webkit-backface-visibility: hidden;
    filter: blur(1.5rem);
  }
  .cubes.darker {
    opacity: 0.6;
  }
  .cubes.go-lighter {
    animation: ${props => (props.dark ? 'shineUp 1s ease forwards' : 'none')};
  }
  .cubes.go-darker {
    animation: ${props => (props.dark ? 'shineDown 1s ease forwards' : 'none')};
  }
  @keyframes shineUp {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes shineDown {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`
const Cubes = (props: {
  // darkBG?: boolean;
  // BGTurn: "none" | "darker" | "lighter";
}) => {
  return (
    <CubesWrap dark>
      <ImgBox
        className={classNames(
          'cubes'
          // { darker: props.darkBG },
          // { 'go-darker': props.BGTurn === 'darker' },
          // { 'go-lighter': props.BGTurn === 'lighter' }
        )}
        src='/dark-layout/cubes-background.png'
        alt='background'
      />
    </CubesWrap>
  )
}

const MobileBG = styled(CenterFlex)`
  position: fixed;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  top: 0;
  .img-box {
    width: 100vw;
    height: ${73800 / 529}vw;
  }
`

const Mobile = () => {
  return (
    <MobileBG>
      <ImgBox
        className='mobile-cubes'
        src='/mobile/mobile-bg.png'
        alt='background'
      />
    </MobileBG>
  )
}
