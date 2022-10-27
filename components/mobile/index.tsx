import React from "react";
import { useMediaQuery } from "react-responsive";
import { MobileWrap, Wrap } from "./styles";
import Card from "components/common/card-wrap";
import MobileIcon from "icons/mobile.svg";
import MobileAlt from "icons/mobile-alt.svg";
import ImgBox from "components/common/img";
import { CenterFlex, FlatBtn, MainTitle } from "styles/globals";

const MobileApp = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default MobileApp;

const Desktop = () => {
  return (
    <Card>
      <Wrap>
        <MobileIcon className="mobile-app move13to0" />
        <CenterFlex className="title move13to0">
          Zecrey Mobile <MobileAlt />
        </CenterFlex>
        <MainTitle className="move13to0">
          Abilities at Your
          <br />
          Fingertips
        </MainTitle>
        <FlatBtn className="coming-soon move13to0">Coming Soon</FlatBtn>
        <ImgBox
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666854445/mobile-app.webp"
          className="move13to0"
          alt=""
          width={558}
          height={743}
          priority
        />
      </Wrap>
    </Card>
  );
};

export const Mobile = () => {
  return (
    <MobileWrap>
      <CenterFlex>
        <MainTitle className="title-1">
          Abilities at Your
          <br />
          Fingertips
        </MainTitle>
      </CenterFlex>
      <label className="title-2">
        <MobileAlt /> Zecrey Mobile
      </label>
      <ImgBox
        src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666854445/mobile-app-mobile.png"
        alt="Extension"
      />
      <button disabled>Coming soon</button>
    </MobileWrap>
  );
};
