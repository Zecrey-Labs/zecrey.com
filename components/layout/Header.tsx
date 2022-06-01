import classNames from 'classnames'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { BetweenFlex, CenterFlex, FlatBtn, vw } from '../../styles/global'
import ImgBox from '../common/ImgBox'
import { useCallback, useEffect, useRef, useState } from 'react'
import { DOWNLOAD_URL, EXPLORER_URL } from '@/constant'
import Bars from '../../assets/icons/bars.svg'
import { MEDIA } from '../bottom/config'
import { useMediaQuery } from 'react-responsive'

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 7.8rem;
  border-bottom: 0.1rem solid #4e4e4e;
  background: rgba(56, 56, 56, 0.8);
  z-index: 1000;
  backdrop-filter: blur(50px);
  /* position: relative; */
  &.header-container {
    border-bottom: 0.1rem solid#DADADA;
    background: #e7e7e7;
  }
`
const Wrap = styled(CenterFlex)`
  width: 144rem;
  height: 100%;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 0 3rem 0 3.6rem;
`
const Brand = styled(FlatBtn)``
const Nav = styled(CenterFlex)<{ dark: boolean }>`
  flex: 1;
  justify-content: flex-start;
  padding: 0 6.3rem;
  height: 7.8rem;
  position: relative;
  .link {
    margin-right: 7.3rem;
    height: 100%;
    border-top: 0.6rem solid transparent;
    border-bottom: 0.6rem solid transparent;
    &:last-child {
      margin-right: 0;
    }
    &:hover .hover,
    &:hover .hover1 {
      display: block;
      cursor: pointer;
    }

    ${FlatBtn} {
      height: 100%;
      font-family: 'Lexend';
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      color: #fff;
      &.nav-link {
        color: #222;
      }
    }

    &.ac {
      border-bottom-color: ${props => (props.dark ? '#2AD4D9' : '#01ABB2')};

      ${FlatBtn} {
        font-weight: 800;
        color: ${props => (props.dark ? '#2AD4D9' : '#01ABB2')};
      }
    }

    .hover {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      width: 9.5rem;
      height: 3rem;
      position: absolute;
      top: 2.4rem;
      left: 27.4rem;
      display: none;
      z-index: -1;
    }
    .hover1 {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      width: 7.8rem;
      height: 3rem;
      position: absolute;
      top: 2.4rem;
      left: 40.4rem;
      display: none;
      z-index: -1;
    }
  }
`
const Download = styled(CenterFlex)`
  .divider {
    width: 0.1rem;
    height: 3.1rem;
    background: #fff;
    margin: 0 3.7rem;
  }
  .divider-light {
    background: #999;
  }

  ${FlatBtn} {
    width: 17rem;
    height: 4rem;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    border: 0.2rem solid rgba(42, 212, 217, 0.15);
    border-radius: 3.5rem;
    font-family: 'Lexend';
    font-weight: bold;
    font-size: 1.8rem;
    color: #000;
    background-clip: padding-box;
    &.download {
      background: linear-gradient(180deg, #00b6ba 0%, #01abb2 100%);
      border: 0.2rem solid #00969c;
      color: #fff;
    }
  }
`
const MobileWrap = styled.div`
  position: fixed;
  width: 100%;
  height: ${vw(50)};
  top: 0;
  left: 0;
  z-index: 100;
  .header {
    height: 100%;
    border-bottom: 0.1rem solid #4e4e4e;
    backdrop-filter: blur(${vw(50)});
    border-bottom: ${vw(0.5)} solid rgba(255, 255, 255, 0.1);
    padding: 0 ${vw(20)};
    button.brand {
      width: ${vw(66)};
      height: ${vw(24)};
      .img-box {
        width: 100%;
        height: 100%;
      }
    }
    button.ctrl {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${vw(28)};
      height: ${vw(28)};
      border-radius: ${vw(5)};
      transition: background 250ms ease-out;
      svg {
        width: ${vw(18)};
        height: ${vw(12)};
        color: #d8d8d8;
        transition: transform 250ms cubic-bezier(0.25, 0.1, 0.25, 1);
      }
      &.ac {
        background: rgba(216, 216, 216, 0.15);
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
  .menu {
    position: absolute;
    opacity: 1;
    pointer-events: none;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(56, 56, 56, 0.3);
    border: ${vw(0.5)} solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(${vw(50)});
    border-radius: 0px 0px ${vw(10)} ${vw(10)};
    padding: ${vw(64)} ${vw(35)} 0 ${vw(35)};
    z-index: -100;
    transform: translateY(-100vh);
    transition: transform 250ms cubic-bezier(0.25, 0.1, 0.25, 1);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
    button.link {
      width: 100%;
      height: ${vw(31)};
      border-bottom: ${vw(0.5)} solid rgba(255, 255, 255, 0.5);
      text-align: left;
      font-family: 'Lexend';
      font-weight: 500;
      font-size: ${vw(12)};
      color: #fff;
      &:disabled {
        opacity: 0.5;
      }
    }
    .media {
      padding: ${vw(25)} 0 ${vw(28)} 0;
    }
    .media a {
      display: inline-block;
      margin-right: ${vw(20)};
      &:last-child {
        margin-right: 0;
      }
      &.twitter,
      &.telegram {
        width: ${vw(18)};
        height: ${vw(15)};
      }
      &.medium {
        width: ${vw(15)};
        height: ${vw(15)};
      }
      &.discord {
        width: ${vw(15)};
        height: ${vw(17)};
        transform: translateY(${vw(1.5)});
      }
      & svg {
        width: 100%;
        height: 100%;
      }
    }
    &.ac {
      pointer-events: auto;
    }
  }
`

const navList = [
  { label: 'Home', url: '/' },
  { label: 'App', url: 'https://www.zecrey.com/', disabled: true },
  { label: 'Explorer', url: EXPLORER_URL },
  { label: 'Info', url: 'https://info.zecrey.com/', disabled: true }
]

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 })
  return isMobile ? <Mobile /> : <Desktop />
}

export default Header

const Desktop = () => {
  const router = useRouter()

  const onClickDownload = useCallback(() => {
    window.open(DOWNLOAD_URL)
  }, [])

  return (
    <Container className=''>
      <Wrap className='header'>
        <Brand className='brand' onClick={() => router.push('/')}>
          <ImgBox
            src='/zecrey-logo-dark.png'
            alt='logo'
            width={131}
            height={47}
          />
        </Brand>
        <Nav dark>
          {navList.map((i, index) => (
            <div
              key={index}
              className={classNames('link', {
                ac: i.url === '/'
              })}>
              <FlatBtn
                onClick={() =>
                  i.url === '/' ? router.push('/') : window.open(i.url)
                }
                disabled={i.disabled}>
                {i.label}
              </FlatBtn>
              <div
                className={classNames(
                  {
                    hover: i.label === 'Explorer'
                  },
                  {
                    hover1: i.label === 'Info'
                  }
                )}></div>
            </div>
          ))}
        </Nav>
        <Download>
          <CenterFlex>
            <ImgBox
              src={`/Wallet_bar.png`}
              alt='Zecrey Wallet'
              width={154}
              height={33}
            />
          </CenterFlex>
          <div className='divider' />
          <FlatBtn onClick={onClickDownload} className=''>
            Download
          </FlatBtn>
        </Download>
      </Wrap>
    </Container>
  )
}

const Mobile = () => {
  const [ac, setAc] = useState(false)
  const [top, setTop] = useState('')
  const router = useRouter()
  const dom = useRef<HTMLDivElement>(null)
  const wrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!wrap.current?.contains(e.target as Element)) {
        setAc(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    setTop(`-${dom.current?.clientHeight || 0}px`)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setTop(`-${dom.current?.clientHeight || 0}px`)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ac])

  return (
    <MobileWrap ref={wrap}>
      <BetweenFlex className='header'>
        <FlatBtn className='brand' onClick={() => router.push('/')}>
          <ImgBox src='/zecrey-logo-dark.png' alt='logo' />
        </FlatBtn>
        <FlatBtn
          className={classNames('ctrl', { ac })}
          onClick={() => setAc(!ac)}>
          <Bars />
        </FlatBtn>
      </BetweenFlex>
      <div
        className={classNames('menu', { ac })}
        ref={dom}
        style={{
          transform: `translateY(${ac ? '0' : top})`
        }}>
        {navList.map((i, index) => (
          <FlatBtn
            key={index}
            className='link'
            onClick={() =>
              i.url === '/' ? router.push('/') : window.open(i.url)
            }
            disabled={i.disabled}>
            {i.label}
          </FlatBtn>
        ))}
        <CenterFlex className='media'>
          {MEDIA.map((i, index) => (
            <a
              className={i.type}
              key={index}
              href={i.url}
              target='_blank'
              rel='noreferrer'>
              {i.icon}
            </a>
          ))}
        </CenterFlex>
      </div>
    </MobileWrap>
  )
}
