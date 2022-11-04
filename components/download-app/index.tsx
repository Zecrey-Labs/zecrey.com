import ImgBox from "components/common/img";
import Slider from "components/common/slider";
import { useEffect, useMemo } from "react";
import { isIOS, isSafari } from "react-device-detect";
import { useMediaQuery } from "react-responsive";
import { MainTitle, vw } from "styles/globals";
import Android from "./Android";
import Extension from "./Extension";
import IOS from "./IOS";
import { MobileBox, Wrap } from "./styles";
import GooglePlay from "icons/googleplay.svg";
import Andr from "icons/android.svg";
import Apple from "icons/apple.svg";
import { useRouter } from "next/router";
import { APK_URL } from "config";

export const DownloadApp = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default DownloadApp;

const items = [
  {
    label: "Android",
    img: <Android />,
  },
  {
    label: "iOS",
    img: <IOS />,
  },
  {
    label: "Extension",
    img: <Extension />,
  },
];

const Desktop = () => {
  return (
    <Wrap>
      <Slider items={items} />
    </Wrap>
  );
};

const Mobile = () => {
  const router = useRouter();
  const { os } = router.query;
  const ios = useMemo(() => (os ? os === "iOS" : isSafari || isIOS), [os]);

  return (
    <MobileBox>
      <MainTitle className="title-1">
        Zecrey Mobile(Beta)
        <br />
        for {ios ? "iOS" : "Android"}
      </MainTitle>
      <div className="title-2">Easily manage two-layers assets, even NFTs.</div>
      <div className="image-wrap">
        <ImgBox
          src={
            ios
              ? "https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667549086/iPhone_13_Pro_Silver.png"
              : "https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667450678/mobile-app-all.png"
          }
          alt=""
          fit="contain"
        />
      </div>
      {ios ? (
        <button disabled>
          <Apple />
          Download from App Store
        </button>
      ) : (
        <>
          <button>
            <GooglePlay />
            Google Play Download
          </button>
          <a href={APK_URL} style={{ marginTop: vw(10) }}>
            <Andr />
            Android APK Download
          </a>
        </>
      )}
    </MobileBox>
  );
};
