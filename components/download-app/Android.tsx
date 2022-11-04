import ImgBox from "components/common/img";
import { AndroidWrap, Card, Info } from "./styles";
import QR from "icons/QR.svg";
import { CenterFlex } from "styles/globals";

const Android = () => {
  return (
    <Card>
      <AndroidWrap className="android">
        <ImgBox
          className="app"
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667444771/android.png"
          alt=""
          width={330}
          height={466}
        />
        <Info top="10.9rem" left="60.4rem">
          <div className="title">
            <div className="main">Zecrey Mobile(Beta) for Android</div>
            <div className="sub">
              Easily manage two-layers assets, even NFTs.
            </div>
          </div>
          <div className="divider" />
          <div className="details">
            <span>Size: 31.4M</span>
            <span>Version: Zecrey for Android V 1.0 Beta</span>
            <span>OS: Android 4.1</span>
            <span>Updated at: 10-31-2022</span>
          </div>
          <div className="divider" />
          <div className="logos">
            <a aria-disabled className="disabled">
              <ImgBox
                src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667447413/Google_Play_Badge_US.png"
                alt=""
                width={135}
                height={40}
              />
            </a>
            <a href="https://dsmkna22gzqmg.cloudfront.net/app-production-release-0.0.1.apk">
              <ImgBox
                src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667447508/apk-file.png"
                alt=""
                width={137}
                height={41}
              />
            </a>
          </div>
        </Info>
        <CenterFlex className="qr-button">
          <QR />
          <div className="hover-up">
            <ImgBox
              src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667530266/qrcode.png"
              alt=""
              width={76}
              height={76}
            />
            <div className="text">
              Scan to <br />
              Download
            </div>
          </div>
        </CenterFlex>
      </AndroidWrap>
    </Card>
  );
};

export default Android;
