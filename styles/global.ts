import styled from 'styled-components'
import theme from 'styled-theming'

export const highlight = theme('mode', {
  light: '#01abb2',
  dark: '#2AD4D9'
})

export const CenterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FlatBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
`
