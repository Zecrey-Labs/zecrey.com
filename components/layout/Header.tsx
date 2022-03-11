import classNames from 'classnames'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { CenterFlex, FlatBtn, highlight } from '../../styles/global'
import ImgBox from '../common/ImgBox'
import { useCallback } from 'react'

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 7.8rem;
  border-bottom: 0.1rem solid #4e4e4e;
  background: rgba(56, 56, 56, 0.8);
  z-index: 1000;
  backdrop-filter: blur(2rem);
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

    ${FlatBtn} {
      height: 100%;
      font-family: Lexend;
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      color: #fff;
      &.nav-link {
        color: #222;
      }
    }

    &.ac {
      border-bottom-color: ${props => (props.dark ? highlight : '#01ABB2')};

      ${FlatBtn} {
        font-weight: 800;
        color: ${props => (props.dark ? highlight : '#01ABB2')};
      }
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
    font-family: Lexend;
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

const navList = [
  { label: 'Home', url: 'https://www.zecrey.com/' },
  { label: 'App', url: 'https://www.zecrey.com/', disabled: true },
  { label: 'Explorer', url: 'https://www.google.com.hk/' },
  { label: 'Info', url: '/' }
]

const Header = () => {
  const router = useRouter()

  const onClickDownload = useCallback(() => {
    window.open(
      'https://chrome.google.com/webstore/detail/zecrey/ojbpcbinjmochkhelkflddfnmcceomdi'
    )
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
                className=''
                onClick={() =>
                  i.url === '/' ? router.push('/') : window.open(i.url)
                }
                disabled={i.disabled}>
                {i.label}
              </FlatBtn>
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

export default Header
