import { TextWrap } from "components/legend/styles";
import { WHITE_PAPER_URL } from "config";
import Img from "icons/zero-about-bg.svg";
import { AboutWrap } from "./styles";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import ImgBox from "components/common/img";

const About = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });

  return (
    <AboutWrap className={classNames({ mobile: isMobileView })}>
      <TextWrap className={classNames({ mobile: isMobileView })}>
        {isMobileView ? (
          <div className="main">
            High Efficiency
            <br /> Private Payment Solution.
          </div>
        ) : (
          <div className="main">High Efficiency Private Payment Solution.</div>
        )}
        {isMobileView ? (
          <div className="sub" style={{ width: "45rem" }}>
            Zero utilizes cutting edge Sigma and
            <br /> zk-Snark technology to enable secure, fast
            <br /> and cheap transactions with privacy protection.
          </div>
        ) : (
          <div className="sub" style={{ width: "45rem" }}>
            Zero utilizes cutting edge Sigma and zk-Snark technology to enable
            <br />
            secure, fast and cheap transactions with privacy protection.
          </div>
        )}
        <a href={WHITE_PAPER_URL} target="_blank" rel="noreferrer">
          White Paper
        </a>
      </TextWrap>
      {isMobileView ? (
        <ImgBox
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666937278/zero-about-bg-mobile.svg"
          alt=""
        />
      ) : (
        <Img className="img" />
      )}
    </AboutWrap>
  );
};

export default About;
