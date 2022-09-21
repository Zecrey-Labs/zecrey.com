import { TextWrap } from "components/legend/styles";
import { WHITE_PAPER_URL } from "config";
import Img from "icons/zero-about-bg.svg";
import { AboutWrap } from "./styles";

const About = () => {
  return (
    <AboutWrap>
      <TextWrap>
        <div className="main">In Math We Trust.</div>
        <div className="sub">
          Zero utilizes cutting edge Sigma and zk-Snark technology to enable
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
