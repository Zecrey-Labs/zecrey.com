import ImgBox from "components/common/img";
import { AndroidWrap, Card, Info } from "./styles";

const IOS = () => {
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
              Zecrey Mobile(Beta) for iOS<i>(unavailable)</i>
            </div>
            <div className="sub">
              Easily manage two-layers assets, even NFTs.
            </div>
          </div>
          <div className="divider" />
          <div className="details">
            <span>Size: 31.4M</span>
            <span>
              Version: <i>unavailable for now</i>
            </span>
            <span>OS: iOS 12.2</span>
            <span>Updated at: 10-31-2022</span>
          </div>
          <div className="divider" />
          <div className="logos">
            <a className="disabled">
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
