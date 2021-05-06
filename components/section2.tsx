import React from 'react'
import styled from 'styled-components'
import icon1 from '@/public/section2/icon1.svg'
import icon2 from '@/public/section2/icon2.svg'
import icon3 from '@/public/section2/icon3.svg'

const Style = styled.div`
  h2 {
    background: #e4e4e4 0% 0% no-repeat padding-box;
    border-radius: 5px;
    width: 925px;
    height: 75px;
  }
`

export const Section2 = () => {
  return (
    <Style>
      <h2>Keep Privacy in a Smart Contract World</h2>
      <p>
        Problems of the privacy of blockchain right now are that used only as
        privacy cash, in other words, it's non-programmable. In addition, if the
        user wants to achieve asset privacy, it's not easy to use and will cost
        a lot.
      </p>
      <p>
        Zecrey is such a protocol that makes it easy to bring your assets into a
        private world with high efficiency and low cost.
      </p>
      <ul className='features'>
        <li>
          <img src={icon1} alt='' />
          <span>Public Scenes</span>
        </li>
        <li>
          <img src={icon2} alt='' />
          <span>Inefficient</span>
        </li>
        <li>
          <img src={icon3} alt='' />
          <span>High Cost</span>
        </li>
      </ul>
    </Style>
  )
}
