import { AboutWrap, TextWrap } from "./styles";
import Img from "icons/legend-about.svg";

const About = () => {
  return (
    <AboutWrap>
      <TextWrap>
        <div className="main">Secure, Instant, Reliable.</div>
        <div className="sub">
          Highly Scalable NFT Platform Legend is the first zkRollup based NFT
          Marketplace on BNB Chain. Fully customized by Zecrey team, enabling
          thousands of TPS.
        </div>
      </TextWrap>
      <Img className="img" />
    </AboutWrap>
  );
};

export default About;
