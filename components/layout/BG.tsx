import ImgBox from "components/common/img";
import { useMediaQuery } from "react-responsive";
import { BGWrap, MobileBG } from "./styles";

const BG = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  return isMobile ? <Mobile /> : <Desktop />;
};

export default BG;

const Desktop = () => {
  return (
    <BGWrap className="bg-wrap">
      {/* <ImgBox
        className="bg bg_2"
        src="https://res.cloudinary.com/drntjojig/image/upload/c_scale,q_1:420,w_500/v1666850954/bg_2.webp"
        alt="bg_2"
      /> */}
      <div
        className="bg bg_2"
        style={{
          backgroundImage: `url(${"https://res.cloudinary.com/drntjojig/image/upload/c_scale,q_1:420,w_500/v1666850954/bg_2.webp"})`,
        }}
      />
      <div
        className="bg bg_1"
        style={{
          backgroundImage: `url(${"https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666850953/bg_1.webp"})`,
        }}
      />
    </BGWrap>
  );
};

const Mobile = () => {
  return (
    <MobileBG>
      <ImgBox
        className="mobile-cubes"
        src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666854838/mobile-bg.png"
        alt="background"
      />
    </MobileBG>
  );
};
