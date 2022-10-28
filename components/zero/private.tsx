import { TextWrap } from "components/legend/styles";
import Img from "icons/zero-private-bg.svg";
import { PrivateWrap } from "./styles";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import ImgBox from "components/common/img";

const Private = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });

  return (
    <PrivateWrap className={classNames({ mobile: isMobileView })}>
      <TextWrap
        style={{ padding: "8rem 0 0 4rem" }}
        className={classNames({ mobile: isMobileView })}
      >
        <div className="main">Privacy by Default.</div>
        <div className="sub">
          All transactions are private on Zero by default. Zero conceals each
          transaction amount to protect your privacy.
        </div>
        <button disabled>Learn More</button>
        {/* <a href="#" target="_blank" rel="noreferrer">
          Learn More
        </a> */}
      </TextWrap>
      {isMobileView ? (
        <ImgBox src="/static/image/zero-private-bg-mobile.svg" alt="" />
      ) : (
        <Img className="img" />
      )}
    </PrivateWrap>
  );
};

export default Private;
