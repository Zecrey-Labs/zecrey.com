import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
  .partners{
    width: 128rem;
    height: 41rem;
    /* background: rgba(56, 56, 56, 0.5);
    border: 0.1rem solid rgba(255, 255, 255, 0.1); */
    box-sizing: border-box;
    backdrop-filter: blur(27.1828px);
    border-radius: 1rem;
    position: absolute;
  }
  .partner{
    width: 78.9rem;
    height: 18.163rem;
    /* background: #444999; */
    position: absolute;
    top: 16.82rem;
    left: 40.1rem;
    display:flex;  
    /* justify-content: space-between; */
    flex-wrap: wrap;
    /* align-content: space-between;  */
  }
  .peer{
    width: 19.725rem;
    height: 6.054rem;
    /* background: #222000; */
  }
  .peer img{
    display: block;
    margin: 0 auto;
  }
  .partner5 img,
  .partner6 img,
  .partner7 img,
  .partner8 img{
    display: block;
    margin-top: 2rem;
  }
  .partner9 img, .partner10 img{
    display: block;
    margin-top: 2.5rem;
  }
  .partner1 img{
    width: 12.624rem;
    height: 3.987rem;
  }
  .partner2 img{
    width: 10.573rem;
    height: 3.987rem;
  }
  .partner3 img{
    width: 10.573rem;
    height: 2.86rem;
  }
  .partner4 img{
    width: 13.1rem;
    height: 3.6rem;
  }
  .partner5 img{
    width: 16.355rem;
    height: 1.942rem;
  }
  .partner6 img{
    width: 11.5rem;
    height: 3.6rem;
  }
  .partner7 img{
    width: 7.533rem;
    height: 3.263rem;
  }
  .partner8 img{
    width: 14.061rem;
    height: 2.486rem;
  }
  .partner9 img{
    width: 10.231rem;
    height: 2.874rem;
  }
  .partner10 img{
    width: 5.869rem;
    height: 3.962rem;
  }
`

function Partners() {

  return (
    <>
      <Wrap>
        {/* <div className='partners'> */}
          <div>
            <ul className='partner'>
              <li className='partner1 peer'>
                <img src="/Partners/DoraHacksVentures.png" alt="" />
              </li>
              <li className='partner2 peer'>
                <img src="/Partners/bubit.png" alt="" />
              </li>
              <li className='partner3 peer'>
                <img src="/Partners/sevenx.png" alt="" />
              </li>
              <li className='partner4 peer'>
                <img src="/Partners/looprlnc.png" alt="" />
              </li>
              <li className='partner5 peer'>
                <img src="/Partners/cmccgloba.png" alt="" />
              </li>
              <li className='partner6 peer'>
                <img src="/Partners/cypherpunn.png" alt="" />
              </li>
            
              <li className='partner7 peer'>
                <img src="/Partners/stake.png" alt="" />
              </li>
              <li className='partner8 peer'>
                <img src="/Partners/crasolum.png" alt="" />
              </li>
              <li className='partner9 peer'>
                <img src="/Partners/block0.png" alt="" />
              </li>
              <li className='partner10 peer'>
                <img src="/Partners/snz.png" alt="" />
              </li>
            </ul>
          </div>
        {/* </div> */}
      </Wrap>
    </>
  )
}

export default Partners