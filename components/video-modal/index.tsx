import styled from 'styled-components'
import Icon from '../common/Icon'

const Wrap = styled.div`
  position: fixed;
  z-index: 2224;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .video {
    background: rgba(56, 56, 56, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    max-width: 125.6rem;
    max-height: 75.5rem;
    width: ${125600 / 1440}vw;
    height: calc(${67781 / 1440}vw + 7.5rem);
    margin: 25px auto;
    padding-bottom: 3rem;
    position: relative;
    .meet1 {
      width: 100%;
      p {
        font-family: 'Lexend';
        font-weight: 800;
        font-size: 1.8rem;
        line-height: 4.5rem;
        color: #2ad4d9;
      }
      div {
        position: absolute;
        top: 0.4rem;
        right: 1.6rem;
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        svg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        &:hover {
          background: rgba(255, 255, 255, 0.15);
          cursor: pointer;
          svg {
            path {
              opacity: 1;
              fill: white;
            }
          }
        }
      }
    }
    video {
      object-fit: fill;
      max-width: 120.6rem;
      max-height: ${(120.6 * 1080) / 1920}rem;
      width: ${120500 / 1440}vw;
      height: ${67781 / 1440}vw;
    }
  }
`

export const VideoModal = (props: {
  label: string
  src: string
  close: () => void
}) => {
  return (
    <Wrap className='video-mask'>
      <div className='video'>
        <div className='meet1'>
          <p>{props.label}</p>
          <div onClick={props.close}>
            <Icon name='close' />
          </div>
        </div>
        <video
          src={props.src}
          controls
          autoPlay
          onContextMenu={e => e.preventDefault()}></video>
      </div>
    </Wrap>
  )
}
