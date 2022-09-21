import { TextWrap } from "components/legend/styles";
import Img from "icons/zero-developer-bg.svg";
import { DeveloperWrap } from "./styles";

const Developer = () => {
  return (
    <DeveloperWrap>
      <TextWrap>
        <div className="main">High Efficiency for Developer.</div>
        <div className="sub">
          Simple and easy to use API/SDK, developers could easily access the
          Zerey Zero privacy system.
        </div>
        <a href="#" target="_blank" rel="noreferrer">
          Learn More
        </a>
      </TextWrap>
      <Img className="img" />
    </DeveloperWrap>
  );
};

export default Developer;
