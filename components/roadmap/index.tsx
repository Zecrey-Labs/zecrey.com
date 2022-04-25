import classNames from 'classnames'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  height: 100%;
  svg.line {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 83.2rem;
    right: -0.9rem;
  }
  svg.flag {
    position: absolute;
    width: 1.6rem;
    height: 2.2rem;
    right: 60rem;
    bottom: 0;
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 1rem;
    height: 0.5rem;
    border-radius: 35%;
    background: #2ad4d8;
    right: 61rem;
    bottom: -0.1rem;
  }
`
const BoxGroup = styled.div`
  position: absolute;
  bottom: 3.5rem;
  right: -1.6rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 83.7rem;
`
const Box = styled.div<{ width: string }>`
  width: ${props => props.width};
  padding: 1.4rem 2.3rem 0 2.5rem;
  border-radius: 1rem;
  transition: all 120ms ease-out;
  label {
    display: block;
    padding-bottom: 0.7rem;
    font-family: IBM Plex sans;
    font-style: italic;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.4rem;
    color: #fff;
    opacity: 0.3;
    transition: all 120ms ease-out;
    cursor: default;
  }
  span {
    display: block;
    height: 6rem;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #e9e9e9;
    transition: all 120ms ease-out;
    cursor: default;
    opacity: 0.4;
    i {
      display: block;
    }
  }
  &.ac {
    label,
    span {
      color: #2ad4d8;
      opacity: 1;
    }
    label {
      font-size: 3.6rem;
      line-height: 5.2rem;
    }
    span {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    label,
    span {
      opacity: 1;
    }
  }
`

const card = [
  {
    label: '2022 Q1',
    span: ['Contract Auditing Layer-1 Mainnet NFTs'],
    width: '15rem'
  },
  {
    label: '2022 Q2',
    span: ['Layer-2 Mainnet', 'Zecrey App Chain Testnet'],
    width: '22rem'
  },
  {
    label: '2022 Q3',
    span: ['Zecrey App Chain Mainnet Private Payment Integration'],
    width: '20.9rem'
  },
  { label: '2022 Q4', span: ['App Chain Ecosystem'], width: '17rem' }
]

const RoadMap = () => {
  return (
    <Wrap>
      <BoxGroup>
        {card.map((i, index) => (
          <Box
            key={index}
            className={classNames({ ac: index === 1 })}
            width={i.width}>
            <label>{i.label}</label>
            <span>
              {i.span.map((el, index) => (
                <i key={index}>{el}</i>
              ))}{' '}
            </span>
          </Box>
        ))}
      </BoxGroup>
      <Line />
      <Flag />
    </Wrap>
  )
}

export default RoadMap

const Line = () => (
  <svg
    className='line'
    viewBox='0 0 832 3'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      opacity='0.5'
      d='M1.5 1.5H830.5'
      stroke='url(#paint0_linear_3201_253)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeDasharray='5'
    />
    <defs>
      <linearGradient
        id='paint0_linear_3201_253'
        x1='831'
        y1='1'
        x2='1'
        y2='1'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='white' stopOpacity='0.01' />
        <stop offset='0.775428' stopColor='white' />
        <stop offset='1' stopColor='white' stopOpacity='0.01' />
      </linearGradient>
    </defs>
  </svg>
)

const Flag = () => (
  <svg
    className='flag'
    width='16'
    height='22'
    viewBox='0 0 16 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.000136971 1.44519C-0.000240376 1.15939 0.0133441 0.876921 0.110699 0.606806C0.256072 0.203819 0.567194 -0.014117 0.972558 0.000709897C1.38736 0.0158219 1.7248 0.214084 1.82819 0.672577C1.84555 0.749372 1.86923 0.825027 1.88149 0.902583C1.99903 1.64355 2.00356 1.66227 2.74071 1.46106C3.28277 1.31308 3.8152 1.12356 4.34188 0.925489C5.83665 0.363018 7.35518 0.384878 8.78419 1.0116C10.93 1.95263 12.986 1.7212 15.0589 0.856772C15.9864 0.470038 15.9896 0.477736 15.9896 1.46829C15.9897 4.96657 15.9803 8.46486 16.0001 11.963C16.0029 12.4585 15.8548 12.713 15.3732 12.8374C14.9057 12.9581 14.4571 13.1554 14.0031 13.3267C12.3224 13.9605 10.6605 13.8724 9.01664 13.1928C7.5781 12.598 6.11296 12.4848 4.61319 12.9197C4.20991 13.0366 3.86067 12.9412 3.60078 12.6158C3.37352 12.3312 3.3804 12.0068 3.53578 11.6813C3.66907 11.402 3.9151 11.2727 4.18547 11.1752C5.85315 10.5742 7.49687 10.669 9.12644 11.3348C10.6116 11.9415 12.1171 12.0794 13.6598 11.5367C13.9815 11.4236 14.0976 11.2609 14.0963 10.9237C14.0858 8.48121 14.0854 6.03867 14.0962 3.59623C14.0977 3.21966 13.9816 3.12376 13.6252 3.23411C12.0165 3.73157 10.4477 3.58045 8.90315 2.93843C7.19604 2.22883 5.48458 2.30258 3.78662 2.98234C3.34824 3.15779 2.90184 3.32051 2.44015 3.38285C1.99064 3.44368 1.89196 3.66209 1.89338 4.07677C1.90545 7.57487 1.90092 16.474 1.89847 19.9722C1.89838 20.1918 1.89753 20.4158 1.85715 20.6302C1.76414 21.1247 1.45405 21.3874 0.989256 21.4002C0.514837 21.4134 0.207677 21.1731 0.0695687 20.6907C0.00353309 20.4596 0.00136335 20.2246 0.00136335 19.988C0.00174069 17.7976 0.00164636 10.2066 0.00164636 8.01625C0.00164636 5.82587 0.00287273 3.63558 0.000136971 1.44519Z'
      fill='#2AD4D8'
    />
  </svg>
)
