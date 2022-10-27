import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FlatBtn } from "styles/globals";
import classNames from "classnames";

const Wrap = styled.div<{ width: number; height: number }>`
  position: fixed;
  min-width: ${125600 / 1440}vw;
  z-index: 2224;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  .ecosystemmap {
    max-width: 125.6rem;
    max-height: 76.9rem;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background: rgba(56, 56, 56, 0.95);
    border: 0.1rem solid rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    z-index: 1000;
  }
  .map {
    width: 100%;
    height: 4.5rem;
    padding-top: 0.9rem;
    font-family: "Lexend";
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #2ad4d9;
  }
  .picture {
    width: calc(100% - 5rem);
    height: calc(100% - 13.9rem);
    margin: 0 auto;
    background: url(https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666857298/ecosystem.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .picture img {
    width: 100%;
    height: 100%;
  }
  .button-close {
    display: block;
    width: 12rem;
    height: 3.4rem;
    border: 0.1rem solid #2ad4d9;
    box-sizing: border-box;
    border-radius: 1.8rem;
    margin: 3rem auto;
    font-family: "Lexend";
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 3.4rem;
    text-align: center;
    color: #2ad4d9;
    cursor: pointer;
    &:hover {
      background: #01a2b3;
      color: white;
    }
  }
  &.scroll {
    display: block;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
    }
    .ecosystemmap {
      margin: 3rem auto;
    }
  }
`;

const ZecreyEcosystemMap = (props: { close: () => void }) => {
  const wrap = useRef<HTMLDivElement>(null);
  const modal = useRef<HTMLDivElement>(null);

  const [scroll, setScroll] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (!modal.current || !wrap.current) return;
      if (modal.current.clientHeight > wrap.current.clientHeight) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      // w/h = 1256/863
      let width = Math.min(
        window.innerWidth * 0.8722,
        (window.innerHeight * 0.9 * 1256) / 863
      );
      setWidth(width);
    };
    handler();
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <Wrap
      className={classNames({ scroll })}
      ref={wrap}
      width={width}
      height={(width * 863) / 1256}
    >
      <div className="ecosystemmap" ref={modal}>
        <div className="map">Zecrey Ecosystem Map</div>
        <div className="picture">
          {/* <img src='https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666857298/ecosystem.png' alt='' /> */}
        </div>
        <FlatBtn className="button-close" onClick={props.close}>
          Close
        </FlatBtn>
      </div>
    </Wrap>
  );
};

export default ZecreyEcosystemMap;
