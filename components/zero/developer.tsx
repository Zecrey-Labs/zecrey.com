import { TextWrap } from "components/legend/styles";
import Img from "icons/zero-developer-bg.svg";
import { DeveloperWrap } from "./styles";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import ImgBox from "components/common/img";

const Developer = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });

  return (
    <DeveloperWrap className={classNames({ mobile: isMobileView })}>
      <TextWrap className={classNames({ mobile: isMobileView })}>
        <div className="main">
          Privacy payment integration
          <br /> within minutes.
        </div>
        <div className="sub">
          Zecrey Zero enables privacy features, driving broad adoption in more
          business scenarios.
        </div>
        <button disabled>Learn More</button>
        {/* <a href="#" target="_blank" rel="noreferrer">
          Learn More
        </a> */}
      </TextWrap>
      {isMobileView ? (
        <ImgBox
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666937277/legend-developer-bg-mobile.svg"
          alt=""
        />
      ) : (
        <Img className="img" />
      )}
    </DeveloperWrap>
  );
};

export default Developer;
