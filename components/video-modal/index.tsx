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
  .video {
    background: rgba(56, 56, 56, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    width: 1256px;
    height: 705px;
    margin: 25px auto;
    padding: 9px 25px 30px;
    position: relative;
    .meet1 {
      width: 100%;
      position: absolute;
      top: 9px;
      left: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-family: 'Lexend';
        font-weight: 800;
        font-size: 18px;
        line-height: 22px;
        color: #2ad4d9;
      }
      div {
        position: absolute;
        top: -4px;
        right: 16px;
        width: 32px;
        height: 32px;
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
      margin-top: 35px;
      object-fit: fill;
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
          style={{ width: '1205px', height: '631px' }}
          controls
          autoPlay
          onContextMenu={e => e.preventDefault()}></video>
      </div>
    </Wrap>
  )
}
