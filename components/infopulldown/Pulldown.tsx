import React from 'react'
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Wrap = styled.div`
  .ant-dropdown-link{
    width: 7.8rem;
    height: 3rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #444555;
    background: #00adb1;
    text-align: center;
    border-radius: 1rem;
  }
  .ant-dropdown-link:hover{
    background:rgba(255, 255, 255, 0.3);
    color: rgba(42, 212, 217, 1);
  }
  .ant-dropdown{
    display: block;
    width: 13.8rem !important;
    height: 13.3rem !important;
    background: #444555 !important;
  }
  .deop{
    :global{
      .ant-menu-item-only-child{
        background: red !important;
      }
    }
  }

`
function Pulldown() {
  const menu = (
    <Menu  className='deop'>
        <Menu.Item key="0">
          <a className='drop-down-a' href="">Overview</a>
        </Menu.Item>
      <Menu.Item key="1">
        <a href="">Price</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="">Market Cap</a>
      </Menu.Item>
      {/* <Menu.Divider /> */}
      <Menu.Item key="3">Leaderboards</Menu.Item>
    </Menu>
  );

  return (
    <div>
       <Wrap>
         <Dropdown overlay={menu} trigger={['click']}>
           <span>
             <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               Info <DownOutlined />
             </a>
           </span>
         </Dropdown>
       </Wrap>
    </div>
  )
}

export default Pulldown

 


