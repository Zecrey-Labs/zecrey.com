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
      <ImgBox className="bg bg_2" src="/static/image/bg_2.png" alt="bg_2" />
      <div
        className="bg bg_1"
        style={{ backgroundImage: `url(${"/static/image/bg_1.png"})` }}
      />
    </BGWrap>
  );
};

const Mobile = () => {
  return (
    <MobileBG>
      <ImgBox
        className="mobile-cubes"
        src="/static/image/mobile-bg.png"
        alt="background"
      />
    </MobileBG>
  );
};