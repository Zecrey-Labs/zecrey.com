import ImgBox from "components/common/img";
import Slider from "components/common/slider";
import { useEffect, useMemo, useState } from "react";
import { isIOS, isSafari } from "react-device-detect";
import { useMediaQuery } from "react-responsive";
import { MainTitle } from "styles/globals";
import Android from "./Android";
import Extension from "./Extension";
import IOS from "./IOS";
import { MobileBox, Wrap } from "./styles";
import GooglePlay from "icons/googleplay.svg";
import Apple from "icons/apple.svg";
import { useRouter } from "next/router";
import { GOOGLE_PLAY } from "config";
import { DateTime } from "luxon";
import { AppInfo } from "./types";

const getApkInfo = async (): Promise<AppInfo | null> => {
  try {
    const res = await fetch(
      "/update/api/v1/appVersion/checkForUpdate?version=100204&platform=1&channel=Production",
      { method: "post" }
    );

    const { downloadUrl, createTime, size, androidVersionName, androidVersionCode } =
      await res.json();
    const date =
      createTime > 0
        ? DateTime.fromMillis(createTime * 1000).toFormat("LL-dd-yyyy")
        : "";

    return {
      url: downloadUrl,
      date,
      version: androidVersionName,
      versionCode: androidVersionCode,
      size: `${(size / (1024 * 1024)).toFixed(1)}Mb`,
    };
  } catch (err) {
    return null;
  }
};

const getIpaInfo = async (version: number = 1): Promise<AppInfo | null> => {
  try {
    const res = await fetch(
      `/update/api/v1/appVersion/checkForUpdate?version=${version}&platform=2&channel=AppStore`,
      { method: "post" }
    );

    const { downloadUrl, createTime, size, iosVersionName, iosVersionCode } =
      await res.json();
    const date =
      createTime > 0
        ? DateTime.fromMillis(createTime * 1000).toFormat("LL-dd-yyyy")
        : "";

    return {
      url: downloadUrl,
      date,
      version: iosVersionName,
      versionCode: iosVersionCode,
      size: `${(size / (1024 * 1024)).toFixed(1)}Mb`,
    };
  } catch (err) {
    return null;
  }
};

export const DownloadApp = () => {
  const [apkInfo, setApkInfo] = useState<AppInfo | null>(null);
  const [ipaInfo, setIpaInfo] = useState<AppInfo | null>(null);

  useEffect(() => {
    getApkInfo().then((res) => setApkInfo(res));
    getIpaInfo().then((res) => setIpaInfo(res));
  }, []);

  const isMobileView = useMediaQuery({ maxWidth: 780 });

  return isMobileView ? (
    <Mobile apkInfo={apkInfo} ipaInfo={ipaInfo} />
  ) : (
    <Desktop apkInfo={apkInfo} ipaInfo={ipaInfo} />
  );
};

export default DownloadApp;

const items = (apkInfo: AppInfo | null, ipaInfo: AppInfo | null) => [
  {
    label: "Android",
    img: <Android info={apkInfo} />,
  },
  {
    label: "iOS",
    img: <IOS info={ipaInfo} />,
  },
  {
    label: "Extension",
    img: <Extension />,
  },
];

interface Props {
  apkInfo: AppInfo | null;
  ipaInfo: AppInfo | null;
}

const Desktop = (props: Props) => {
  const els = useMemo(
    () => items(props.apkInfo, props.ipaInfo),
    [props.apkInfo, props.ipaInfo]
  );

  return (
    <Wrap>
      <Slider items={els} />
    </Wrap>
  );
};

const Mobile = (props: Props) => {
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
          {/* {props.info?.url ? (
            <a href={props.info.url} style={{ marginTop: vw(10) }}>
              <Andr />
              Android APK Download
            </a>
          ) : null} */}
        </>
      )}
    </MobileBox>
  );
};
