import React from "react";
import { useMediaQuery } from "react-responsive";
import { MobileWrap, Wrap } from "./styles";
import ImgBox from "components/common/img";
import ZecreyWebApp from "icons/web-app.svg";
import Icon from "icons/web-app-alt.svg";
import { CenterFlex, FlatBtn, MainTitle } from "styles/globals";
import Card from "components/common/card-wrap";

const WebApp = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default WebApp;

function Desktop() {
  return (
    <Card>
      <Wrap>
        <ZecreyWebApp className="web-app move13to0" />
        <ImgBox
          src="/static/image/web-app.webp"
          className="web-app move13to0"
          alt="zecrey"
          width={814}
          height={473}
        />
        <div className="content-wrap">
          <CenterFlex className="title  move13to0">
            Zecrey Web Application <Icon />
          </CenterFlex>
          <MainTitle className="move13to0">
            Streamlined Experience
            <br />
            Simple, Yet Robust
          </MainTitle>
          <FlatBtn className="coming-soon">Coming Soon</FlatBtn>
        </div>
      </Wrap>
    </Card>
  );
}

const Mobile = () => {
  return (
    <MobileWrap className="ttt">
      <label className="title-1">
        Streamlined Experience
        <br />
        Simple, Yet Robust
      </label>
      <label className="title-2">
        <Icon /> Zecrey Web App
      </label>
      <ImgBox src="/static/image/web-app-mobile.png" alt="Extension" />
      <button disabled>Coming soon</button>
    </MobileWrap>
  );
};
