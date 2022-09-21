import classNames from "classnames";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Close from "icons/close.svg";

const Wrap = styled.div<{ width: number; height: number }>`
  position: fixed;
  z-index: 2224;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .video {
    background: rgba(56, 56, 56, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    // max-width: 125.6rem;
    // max-height: 75.5rem;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    margin: 25px auto;
    padding-bottom: 3rem;
    position: relative;
    .header {
      width: 100%;
      font-family: "Lexend";
      font-weight: 800;
      font-size: 1.8rem;
      line-height: 4.5rem;
      color: #2ad4d9;
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
          opacity: 0.3;
          color: #fff;
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
      width: calc(100% - 5rem);
      height: calc(100% - 3.5rem);
    }
  }
  &.scroll {
    display: block;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const VideoModal = (props: {
  label: string;
  src: string;
  close: () => void;
}) => {
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
      // w/h = 1256/769
      let width = Math.min(
        window.innerWidth * 0.8722,
        (window.innerHeight * 0.9 * 1256) / 769
      );
      setWidth(width);
    };
    handler();
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return ReactDOM.createPortal(
    <Wrap
      className={classNames("video-mask", { scroll })}
      ref={wrap}
      width={width}
      height={(width * 769) / 1256}
    >
      <div className="video" ref={modal}>
        <div className="header">
          {props.label}
          <div onClick={props.close}>
            <Close name="close" />
          </div>
        </div>
        <video
          src={props.src}
          controls
          autoPlay
          onContextMenu={(e) => e.preventDefault()}
        ></video>
      </div>
    </Wrap>,
    document?.getElementById("__next") || document.body
  );
};
