import Card from "components/common/card-wrap";
import { useMediaQuery } from "react-responsive";
import { CenterFlex, MainTitle, MobileWrap } from "styles/globals";
import { LayerItem, Layers, MobileStyles, Wrap } from "./styles";
import Icon from "icons/layer2.svg";
import Dart from "icons/dart-alt.svg";
import ImgBox from "components/common/img";

const items = [
  {
    logo_url:
      "https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666854837/legend-logo.png",
    name: "LEGEND",
    sub: "NFT Engine for Web 3 Games",
    text: [
      "The first zkRollup L2 scaling solution on the BNB chain and NFT engine of Web3 games.",
      "It offers instant trading, massive scalability, and low gas fees for minting and trading NFTs without compromising security.",
    ],
  },
  {
    logo_url:
      "https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666854838/zero-logo.png",
    name: "ZERO",
    sub: "Efficient, Secure and Privacy",
    text: [
      "A lightweight, privacy-driven, and portable payment solution.",
      "And it provides users with a simple and intuitive interface that allows users to be able to conduct private transfer and swap transactions with ease of access.",
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
          <MainTitle className="move13to0">What is Zecrey?</MainTitle>
          <div className="sub sub1 move13to0">
            Zecrey is a layer 2 scaling protocol based on zkRollup technology to
            safeguard users&#39; ownership of their assets and ensure that the
            security of the system is as strong as the underlying mainchain.
          </div>
          <div className="sub sub2 move13to0">
            Now, we are proud to introduce two different L2s: Zecrey Zero &
            Zecrey Legend.
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
        <MainTitle>What&#39;s Zecrey?</MainTitle>
      </CenterFlex>
      <MobileStyles>
        <p>
          Zecrey is a layer 2 scaling protocol based on zkRollup technology to
          safeguard users&#39; ownership of their assets and ensure that the
          security of the system is as strong as the underlying mainchain.
        </p>
        <p>
          Now, we are proud to introduce two different L2s: Zecrey Zero & Zecrey
          Legend.
        </p>
        <ImgBox src="/static/zecrey-layers.svg" alt="layers" fit="contain" />
      </MobileStyles>
    </MobileWrap>
  );
};
