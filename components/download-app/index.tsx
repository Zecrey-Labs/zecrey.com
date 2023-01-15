import ImgBox from "components/common/img";
import Slider from "components/common/slider";
import { useEffect, useMemo, useState } from "react";
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
import { GOOGLE_PLAY } from "config";
import { DateTime } from "luxon";

const getApkInfo = async (): Promise<{
  url: string;
  date: string;
  version: string;
  versionCode: number;
} | null> => {
  try {
    const res = await fetch(
      "/update/api/v1/appVersion/checkForUpdate?version=100204&platform=1&channel=Production",
      { method: "post" }
    );
    const { downloadUrl, createTime, androidVersionCode } = await res.json();
    const date =
      createTime > 0
        ? DateTime.fromMillis(createTime * 1000).toFormat("LL-dd-yyyy")
        : "";
    return {
      url: downloadUrl,
      date,
      version: downloadUrl.split("-")[1].replace("v", ""),
      versionCode: androidVersionCode,
    };
  } catch (err) {
    return null;
  }
};

export const DownloadApp = () => {
  const [info, setInfo] = useState<{
    url: string;
    date: string;
    version: string;
    versionCode: number;
  } | null>(null);

  useEffect(() => {
    getApkInfo().then((res) => setInfo(res));
  }, []);

  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile info={info} /> : <Desktop info={info} />;
};

export default DownloadApp;

const items = (
  info: {
    url: string;
    date: string;
    version: string;
    versionCode: number;
  } | null
) => [
  {
    label: "Android",
    img: <Android info={info} />,
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

const Desktop = (props: {
  info: {
    url: string;
    date: string;
    version: string;
    versionCode: number;
  } | null;
}) => {
  const els = useMemo(() => items(props.info), [props.info]);
  return (
    <Wrap>
      <Slider items={els} />
    </Wrap>
  );
};

const Mobile = (props: {
  info: {
    url: string;
    date: string;
    version: string;
    versionCode: number;
  } | null;
}) => {
  const router = useRouter();
  const { os } = router.query;
  const ios = useMemo(() => (os ? os === "ios" : isSafari || isIOS), [os]);

  return (
    <MobileBox>
      <MainTitle className="title-1">
        Zecrey Mobile(Beta)
        <br />
        for {ios ? "iOS" : "Android"}
      </MainTitle>
      <div className="title-2">Easily manage two-layers assets, even NFTs.</div>
      {/* {!ios && (
        <div className="title-3">
          (The Google Glay version is under review now, please download the apk
          file.)
        </div>
      )} */}
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
          {/* <button disabled>
            <GooglePlay />
            Google Play Download
          </button> */}
          <a href={GOOGLE_PLAY}>
            <GooglePlay />
            Google Play Download
          </a>
          {props.info?.url ? (
            <a href={props.info.url} style={{ marginTop: vw(10) }}>
              <Andr />
              Android APK Download
            </a>
          ) : null}
        </>
      )}
    </MobileBox>
  );
};
