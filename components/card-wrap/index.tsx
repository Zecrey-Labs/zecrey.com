import { ReactNode } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  position: relative;
  overflow: hidden;
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
  font-family: Lexend;
  font-style: normal;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3rem;
  width: 20rem;
  background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const BackgoundIcon = styled.div<{
  size: { width: string; height: string }
  position: { left: string; bottom: string }
}>`
  position: absolute;
  width: ${props => props.size.width};
  height: ${props => props.size.height};
  left: ${props => props.position.left};
  bottom: ${props => props.position.bottom};
  z-index: -10;
  color: rgba(255, 255, 255, 0.05);
`
const Text = styled.div`
  width: 80rem;
  p {
    font-family: IBM Plex Sans;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #ffffff;
  }
`
const Content = styled.div``

const CardWrap = (props: {
  title: string
  backgroundIcon: {
    svg: ReactNode // svg element
    size: { width: string; height: string }
    positon: { left: string; bottom: string }
  }
  text: string[]
  children?: ReactNode // sub component
}) => {
  return (
    <Box>
      <BackgoundIcon
        size={props.backgroundIcon.size}
        position={props.backgroundIcon.positon}>
        {props.backgroundIcon.svg}
      </BackgoundIcon>
      <div className='text-wrap'>
        <Title>{props.title}</Title>
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