import ImgBox from "components/common/img";
import { APP_STORE } from "config";
import { AndroidWrap, Card, Info } from "./styles";

import { AppInfo } from './types';

interface Props {
  info: AppInfo | null;
}

const IOS = (props: Props) => {
  const { info } = props;

  return (
    <Card>
      <AndroidWrap className="android">
        <ImgBox
          className="app"
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667549086/iPhone_13_Pro_Silver.png"
          alt=""
          width={330}
          height={468}
          fit="contain"
        />
        <Info top="10.9rem" left="60.4rem">
          <div className="title">
            <div className="main">
              Zecrey Mobile(Beta) for iOS
            </div>
            <div className="sub">
              Easily manage two-layers assets, even NFTs.
            </div>
          </div>
          <div className="divider" />
          <div className="details">
            <span>Size: {info?.size}</span>
            {info?.version && info.versionCode ? (
              <span>
                Version: Zecrey for iOS V {info.version} Beta (
                {info.versionCode})
              </span>
            ) : null}
            <span>OS: iOS 12.2</span>
            {info?.date && <span>Updated at: {info?.date}</span>}
          </div>
          <div className="divider" />
          <div className="logos">
            <a href={APP_STORE}>
              <ImgBox
                src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667448193/App_Store_Badge_US_Black.png"
                alt=""
                width={120}
                height={40}
              />
            </a>
          </div>
        </Info>
      </AndroidWrap>
    </Card>
  );
};

export default IOS;
