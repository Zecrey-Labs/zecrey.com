import Image from 'next/image'
import styled from 'styled-components'

const Wrap = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${props => props.width / 10 + 'rem'};
  min-width: ${props => props.width / 10 + 'rem'};
  height: ${props => props.height / 10 + 'rem'};
  min-height: ${props => props.height / 10 + 'rem'};
  pointer-events: none;
`

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}
const ImgBox = (props: Props) => {
  return (
    <Wrap
      className={`img-box ${props.className}`}
      width={props.width || 40}
      height={props.height || 40}>
      {props.src ? (
        <Image src={props.src} alt={props.alt} layout='fill' />
      ) : null}
    </Wrap>
  )
}

export default ImgBox
