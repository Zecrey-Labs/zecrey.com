import { DeveloperWarp, TextWrap } from "./styles";
import Img from "icons/legend-developer-bg.svg";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import ImgBox from "components/common/img";

const Developer = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });

  return (
    <DeveloperWarp className={classNames({ mobile: isMobileView })}>
      <TextWrap className={classNames({ mobile: isMobileView })}>
        <div className="main">Powerful SDK components for Web3 games.</div>
        <div className="sub">
          Simple and easy to use API/SDK, developers could integrate NFT into
          Web3 Games in minutes.
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
    </DeveloperWarp>
  );
};

export default Developer;
