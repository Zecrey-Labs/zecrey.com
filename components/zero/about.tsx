import { TextWrap } from "components/legend/styles";
import { WHITE_PAPER_URL } from "config";
import Img from "icons/zero-about-bg.svg";
import { AboutWrap } from "./styles";

const About = () => {
  return (
    <AboutWrap>
      <TextWrap>
        <div className="main">High Efficiency Private Payment Solution.</div>
        <div className="sub" style={{ width: "45rem" }}>
          Zero utilizes cutting edge Sigma and zk-Snark technology to enable
          <br />
          secure, fast and cheap transactions with privacy protection.
        </div>
        <a href={WHITE_PAPER_URL} target="_blank" rel="noreferrer">
          White Paper
        </a>
      </TextWrap>
      <Img className="img" />
    </AboutWrap>
  );
};

export default About;
