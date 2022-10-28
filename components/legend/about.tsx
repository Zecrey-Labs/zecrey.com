import { AboutWrap, TextWrap } from "./styles";
import Img from "icons/legend-about.svg";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import ImgBox from "components/common/img";

const About = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });

  return (
    <AboutWrap className={classNames({ mobile: isMobileView })}>
      <TextWrap className={classNames({ mobile: isMobileView })}>
        <div className="main">Secure, Instant, Reliable.</div>
        <div className="sub">
          Highly Scalable NFT Platform Legend is the first zkRollup based NFT
          Marketplace on BNB Chain. Fully customized by Zecrey team, enabling
          thousands of TPS.
        </div>
      </TextWrap>
      {isMobileView ? (
        <ImgBox
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666937277/legend-about-mobile.svg"
          alt=""
        />
      ) : (
        <Img className="img" />
      )}
    </AboutWrap>
  );
};

export default About;
