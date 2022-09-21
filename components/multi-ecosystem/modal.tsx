import { FlatBtn } from "styles/globals";
import { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Img from "icons/img.svg";
import ZecreyEcosystemMap from "./zecreyEcosystemMap";

const Trigger = styled(FlatBtn)`
  cursor: pointer;
  svg {
    width: 1.1rem;
    height: 1.5rem;
    color: #2ad4d8;
    margin-right: 0.6rem;
    vertical-align: middle;
    pointer-events: none;
  }
  span {
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 1.2rem;
    color: #2ad4d8;
    vertical-align: middle;
    pointer-events: none;
  }
  &:hover span {
    text-decoration: underline;
  }
`;

/* */
const Modal = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Trigger onClick={() => setShow(!show)}>
        <Img name="img" />
        <span>View Zecrey-Eco Map</span>
      </Trigger>
      {show &&
        ReactDOM.createPortal(
          <ZecreyEcosystemMap close={() => setShow(false)} />,
          document?.getElementById("__next") || document.body
        )}
    </div>
  );
};

export default Modal;
