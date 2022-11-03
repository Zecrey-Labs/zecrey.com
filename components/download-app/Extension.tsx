import ImgBox from "components/common/img";
import { ExtensionWrap, Card, Info } from "./styles";

const Extension = () => {
  return (
    <Card>
      <ExtensionWrap className="android">
        <ImgBox
          className="app"
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666854414/extension.webp"
          alt=""
          width={719}
          height={468}
        />
        <Info top="10.9rem" left="71.3rem">
          <div className="title">
            <div className="main">Zecrey Extension</div>
            <div className="sub">
              Easily manage two-layers assets, even NFTs.
            </div>
          </div>
          <div className="divider" />
          <div className="details">
            <span>Size: 31.4M</span>
            <span>Version: Zecrey Extension V 1.0 Beta</span>
            <span>OS: Google Chrome</span>
            <span>Updated at: 10-31-2022</span>
          </div>
          <div className="divider" />
          <div className="logos">
            <ImgBox
              src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667448420/Download_Button_for_Google_Chrome.png"
              alt=""
              width={190}
              height={50}
            />
          </div>
        </Info>
      </ExtensionWrap>
    </Card>
  );
};

export default Extension;
