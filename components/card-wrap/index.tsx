import { CenterFlex } from '@/styles/global'
import classNames from 'classnames'
import { debounce } from 'lodash'
import { ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 128rem;
  height: 41rem;
  background: rgba(56, 56, 56, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2.7rem);
  border-radius: 1rem;
  padding: 7rem 8rem 6rem 4rem;
  margin: 0 auto 4rem auto;
  z-index: 10;
  .text-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`
const Title = styled.div`
  display: inline-block;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3rem;
  width: 24rem;
  margin-left: 19px;
  background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateY(1.3rem);
  opacity: 0;
  &.title {
    width: 21rem;
  }
  .visible & {
    animation: move1 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
  }
`
const IconWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40rem;
  height: 100%;
  overflow: hidden;
  border-radius: 1rem;
  z-index: -10;
`
const BackgoundIcon = styled.div<{
  size: { width: string; height: string }
}>`
  width: 37.8rem;
  height: 26.5rem;
  overflow: hidden;
  position: absolute;
  width: ${props => props.size.width};
  height: ${props => props.size.height};
  left: 0;
  bottom: 0;
  color: rgba(255, 255, 255, 0.05);
  transform: translateY(0.6rem);
  opacity: 0;
  .visible & {
    animation: move3 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.3s forwards;
  }
  @keyframes move3 {
    0% {
      transform: translateY(0.6rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
const Text = styled.div`
  width: 79rem;
  p {
    font-family: 'IBM Plex Sans';
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #ffffff;
    transform: translateY(1.3rem);
    opacity: 0;
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
  .visible & {
    p {
      animation: move1 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
    }
  }

  @keyframes move1 {
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
const Content = styled(CenterFlex)`
  flex: 1;
  justify-content: flex-end;
  transform: translateY(1.3rem);
  opacity: 0;
  .visible & {
    animation: move1 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.2s forwards;
  }
`

const CardWrap = (props: {
  title: string
  backgroundIcon: {
    svg: ReactNode // svg element
    size: { width: string; height: string }
  }
  text: string[]
  children?: ReactNode // sub component
}) => {
  const [visible, setVisible] = useState(false)
  const dom = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let handleScroll = e => {
      if (dom.current && dom.current.getBoundingClientRect()) {
        let domTop = dom.current.getBoundingClientRect().top
        let domHeight = dom.current.getBoundingClientRect().height
        let height = window.innerHeight
        if (domTop > 0 && height - domTop >= domHeight / 5) {
          setVisible(true)
          document.removeEventListener('scroll', handleScroll)
        }
      }
    }
    const debouncedScrollEventHandler = debounce(handleScroll, 100)
    document.addEventListener('scroll', debouncedScrollEventHandler)
    return () => {
      document.removeEventListener('scroll', debouncedScrollEventHandler)
    }
  }, [])

  return (
    <Box ref={dom} className={classNames('show', { visible })}>
      <IconWrap>
        <BackgoundIcon size={props.backgroundIcon.size}>
          {props.backgroundIcon.svg}
        </BackgoundIcon>
      </IconWrap>
      <div className='text-wrap'>
        <Title
          className={classNames(
            props.title === 'Multiple Purposes' ? 'title' : ''
          )}>
          {props.title}
        </Title>
        <Text>
          {props.text.map((i, index) => (
            <p key={index}>{i}</p>
          ))}
        </Text>
      </div>
      <Content>{props.children}</Content>
    </Box>
  )
}

export default CardWrap
