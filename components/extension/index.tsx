import React, { useState } from "react";
import { MobileWrap, Wrap } from "./styles";
import { useMediaQuery } from "react-responsive";
import ImgBox from "components/common/img";
import Play from "icons/play.svg";
import Wallet from "icons/wallet-alt.svg";
import ExtensionWallet from "icons/extension-wallet.svg";
import Card from "components/common/card-wrap";
import { VideoModal } from "components/common/video-modal";
import { CenterFlex, FlatBtn, MainTitle } from "styles/globals";

const Extension = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default Extension;

const Desktop = () => {
  const [video, setVideo] = useState(false);
  return (
    <Card>
      <Wrap>
        <ExtensionWallet className="extension-wallet move13to0" />
        <CenterFlex className="title move13to0">
          Privacy Wallet Extension
          <Wallet />
        </CenterFlex>
        <MainTitle className="move13to0">
          Your Privacy Matters
          <br />
          with One-Click
        </MainTitle>
        <a
          className="download move13to0"
          href="https://chrome.google.com/webstore/detail/zecrey/ojbpcbinjmochkhelkflddfnmcceomdi"
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
        <FlatBtn className="video move13to0" onClick={() => setVideo(true)}>
          <Play name="play" /> Watch the video introduction
        </FlatBtn>
        <div className="img-wrap move13to0">
          <ImgBox
            src="/static/image/extension.webp"
            className="extension-image"
            alt="zecrey"
            width={800}
            height={520}
          />
        </div>
      </Wrap>
      {video && (
        <VideoModal
          label="Introduction"
          src="https://res.cloudinary.com/drntjojig/video/upload/v1666852947/wallet-video.mp4"
          close={() => setVideo(false)}
        />
      )}
    </Card>
  );
};

const Mobile = () => {
  const [video, setVideo] = useState(false);

  return (
    <MobileWrap>
      <CenterFlex>
        <MainTitle className="title-1">
          Your Privacy Matters <br /> with One-Click
        </MainTitle>
      </CenterFlex>
      <label className="title-2">
        <Wallet />
        Privacy Wallet Extension
      </label>
      <ImgBox src="/static/image/extension.webp" alt="Extension" />
      <a
        className="download"
        href="https://chrome.google.com/webstore/detail/zecrey/ojbpcbinjmochkhelkflddfnmcceomdi"
        target="_blank"
        rel="noreferrer"
      >
        Download
      </a>
      <button className="video" onClick={() => setVideo(true)}>
        <Play name="play" /> Watch the video introduction
      </button>
      {video && (
        <VideoModal
          label="Introduction"
          src="https://res.cloudinary.com/drntjojig/video/upload/v1666852947/wallet-video.mp4"
          close={() => setVideo(false)}
        />
      )}
      {/* {isMobile && video && (
        <video
          className="video-on-mobile"
          ref={dom}
          src="https://res.cloudinary.com/drntjojig/video/upload/v1666852947/wallet-video.mp4"
          controls
          onContextMenu={(e) => e.preventDefault()}
          autoPlay
        ></video>
      )} */}
    </MobileWrap>
  );
};
