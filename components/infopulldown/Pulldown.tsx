import React, { useState ,useEffect} from 'react'
import 'antd/dist/antd.css';
import styled from 'styled-components';

const Wrap = styled.div`
  .info{
    width: 7.8rem;
    height: 3rem;
    mix-blend-mode: normal;
    border-radius: 1rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 3rem;
    color: #FFFFFF;
    text-align: center;
    position: absolute;
    top: 2.3rem;
    left: 71.9rem;
  }
  .info img{
    width: 1.1rem;
    height: 0.7rem;
    margin-left: 0.6rem;
  }
  .info:hover{
    background: #555665;
    color: #2AD4D8;
  }
  .menu{
    width: 13.8rem;
    height: 13.3rem;
    background: #383838;
    mix-blend-mode: normal;
    opacity: 0.95;
    border: 0.1rem solid rgba(255, 255, 255, 0.05);
    border-radius: 1rem; 
    margin-top: 20rem;
    z-index: 1000;
    position: absolute;
    top: -14rem;
    left: 71.9rem;
  }
  .menu ul{
    margin-top: 0.6rem;
  }
  .menu ul li{
    width: 12.8rem;
    height: 3rem;
    border-radius: 0.5rem;
    color: #FFFFFF;
    line-height: 3rem;
    margin-left: 0.4rem;
    text-indent:1.5rem;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
  }
  .menu ul li:hover{
    background: #2AD4D8;
    color: #282828;
  }
  .menu:hover{
    border: 0.1rem solid #2AD4D9;
  }
  .active {
    background: #2AD4D8;
  }
  .black{
    background: #282828;
  }
  .dot{
    width: 0.5rem;
    height: 0.5rem;
    background: #2AD4D8;
    border: 0.15rem solid rgba(42, 212, 216, 0.5);
    position: relative;
    top: -1.7rem;
    left: 10.8rem;
    border-radius: 50%;
  }
  .menu ul li:hover .dot{
    background: #080808;
    border: 0.15rem solid #080808;
  }
`
function Pulldown() {
  const [indexes, setIndexes] = useState(0);
  const [index, setIndex] = useState(true);
  const [dropdown, setdropdown] = useState(true);
    let data=[{
      name:"Overview",
      type:false
    },
    {
      name:"Price",
      type:false
    },
    {
      name:"Market Cap",
      type:false
    },
    {
      name:"Leaderboards",
      type:false
    },
  ]
  const [list, setList] = useState<any>(data);

  const btn=(e)=>{
    data[e].type=true
    setList(data)
  }
  useEffect(()=>{
    console.log("更改后的数据",list);
  },[list])

  return (
    <>
       <Wrap>
         {/* <div className={index == 1 ?'info active' : 'info'}
          onClick={() => setIndex(1)}> */}
         <div className='info' onClick={() => setdropdown(!dropdown)}>
           Info
           <img src="/Pulldown/Pulldown.png" alt="" />
         </div>
         <div className='menu' hidden={dropdown}>
           <ul>
           {list.map((item,index)=>(
              <li key={item.name} onClick={()=>btn(index)}>
              {item.name}
              {item.type===true?(
                <div className='dot'></div>
              ):null}
            </li>
           ))}
           </ul>
         </div>
       </Wrap>
    </>

  )
}

export default Pulldown
