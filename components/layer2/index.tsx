import Card from "components/common/card-wrap";
import { useMediaQuery } from "react-responsive";
import { CenterFlex, MainTitle, MobileWrap } from "styles/globals";
import { LayerItem, Layers, MobileLayerItem, Wrap } from "./styles";
import Icon from "icons/layer2.svg";
import Dart from "icons/dart-alt.svg";
import ImgBox from "components/common/img";

const items = [
  {
    logo_url: "/static/image/legend-logo.png",
    name: "LEGEND",
    sub: "NFT Engine for Web 3",
    text: [
      "The First zkRollup solution on BNB Chain & NFT Engine of Web3 Games.",
      "Thanks to efficient architecture design, the NFT Market based on Zecrey Legend has become faster than ever.",
    ],
  },
  {
    logo_url: "/static/image/zero-logo.png",
    name: "ZERO",
    sub: "Efficient, Secure and Privacy",
    text: [
      "The First zkRollup solution on BNB Chain & NFT Engine of Web3 Games.",
      "Thanks to efficient architecture design, the NFT Market based on Zecrey Legend has become faster than ever.",
    ],
  },
];

const Layer2 = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default Layer2;

const Desktop = () => {
  return (
    <Card>
      <Wrap>
        <div className="left move13to0">
          <Icon />
        </div>
        <div className="right">
          <MainTitle className="move13to0">
            zkRollup based Layer-2 Network.
          </MainTitle>
          <div className="sub sub1 move13to0">
            As a Layer-2 network based on the zkRollup, we are committed to
            finding safe, efficient and low-cost solutions, and continuously
            optimizing the user experience.
          </div>
          <div className="sub sub2 move13to0">
            Now, we are proud to introduce two different Layer-2 networks, which
            will bring a whole new blockchain experience to everyone.
          </div>
          <Layers className="move13to0">
            {items.map((i, index) => (
              <LayerItem key={index}>
                <div className="info">
                  <ImgBox
                    src={i.logo_url}
                    alt={i.name}
                    width={55}
                    height={55}
                  />
                  <div className="name">
                    <label>{i.name}</label>
                    <span>{i.sub}</span>
                  </div>
                </div>
                <button>
                  <Dart />
                </button>
                <div className="desc">
                  {i.text.map((el, idx) => (
                    <div key={idx} className="text">
                      {el}
                    </div>
                  ))}
                </div>
              </LayerItem>
            ))}
          </Layers>
        </div>
      </Wrap>
    </Card>
  );
};

const Mobile = () => {
  return (
    <MobileWrap>
      <CenterFlex style={{ textAlign: "center" }}>
        <MainTitle>
          zkRollup based
          <br />
          Layer-2 Network
        </MainTitle>
      </CenterFlex>
      <div>
        {items.map((i, index) => (
          <MobileLayerItem key={index}>
            <div className="info">
              <ImgBox src={i.logo_url} alt={i.name} width={55} height={55} />
              <div className="name">
                <label>{i.name}</label>
                <span>{i.sub}</span>
              </div>
            </div>
            <div className="desc">
              {i.text.map((el, idx) => (
                <div key={idx} className="text">
                  {el}
                </div>
              ))}
            </div>
          </MobileLayerItem>
        ))}
      </div>
    </MobileWrap>
  );
};
