import { TextWrap } from "components/legend/styles";
import Img from "icons/zero-developer-bg.svg";
import { DeveloperWrap } from "./styles";

const Developer = () => {
  return (
    <DeveloperWrap>
      <TextWrap>
        <div className="main">
          Privacy payment integration
          <br /> within minutes.
        </div>
        <div className="sub">
          Zecrey Zero enables privacy features, driving broad adoption in more
          business scenarios.
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
