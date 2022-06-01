import classNames from 'classnames'
import { debounce } from 'lodash'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { CSSProperties } from 'styled-components'
import {
  BackgoundIcon,
  Box,
  Content,
  IconWrap,
  MobileWrap,
  Text,
  Title
} from './styles'

const CardWrap = (props: {
  title: string
  backgroundIcon: {
    svg: ReactNode // svg element
    size: { width: string; height: string }
  }
  styles?: CSSProperties
  text: string[]
  children?: ReactNode // sub component
}) => {
  const isMobile = useMediaQuery({ maxWidth: 780 })
  useEffect(() => console.log('is mobile: ', isMobile), [isMobile])
  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
}

export default CardWrap

const Desktop = (props: {
  title: string
  backgroundIcon: {
    svg: ReactNode // svg element
    size: { width: string; height: string }
  }
  styles?: CSSProperties
  text: string[]
  children?: ReactNode // sub component
}) => {
  const [visible, setVisible] = useState(false)
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
    <Box
      ref={dom}
      className={classNames('content-box', 'show', { visible })}
      style={props.styles}>
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

const Mobile = (props: {
  title: string
  backgroundIcon: {
    svg: ReactNode // svg element
    size: { width: string; height: string }
  }
  styles?: CSSProperties
  text: string[]
  children?: ReactNode
}) => {
  return (
    <MobileWrap className='content-box-mobile'>
      <IconWrap>
        <BackgoundIcon size={props.backgroundIcon.size}>
          {props.backgroundIcon.svg}
        </BackgoundIcon>
      </IconWrap>
      <Title className='title'>{props.title}</Title>
      <div className='content'>{props.children}</div>
      <Text>
        {props.text.map((i, index) => (
          <p key={index}>{i}</p>
        ))}
      </Text>
    </MobileWrap>
  )
}
