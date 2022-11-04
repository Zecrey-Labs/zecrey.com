import React from "react";
import { useMediaQuery } from "react-responsive";
import { MobileWrap, Wrap } from "./styles";
import Card from "components/common/card-wrap";
import MobileIcon from "icons/mobile.svg";
import MobileAlt from "icons/mobile-alt.svg";
import ImgBox from "components/common/img";
import { CenterFlex, FlatBtn, MainTitle } from "styles/globals";
import { useRouter } from "next/router";

const MobileApp = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default MobileApp;

const Desktop = () => {
  const router = useRouter();

  return (
    <Card>
      <Wrap className="move13to0">
        <MobileIcon className="mobile-app" />
        <CenterFlex className="title">
          Zecrey Mobile <MobileAlt />
        </CenterFlex>
        <MainTitle className="">
          Abilities at Your
          <br />
          Fingertips
        </MainTitle>
        <FlatBtn className="download" onClick={() => router.push("/download")}>
          Download
        </FlatBtn>
        <ImgBox
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666854445/mobile-app.webp"
          className=""
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
  const router = useRouter();

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
      <button onClick={() => router.push("/download")}>Download</button>
    </MobileWrap>
  );
};
