import Card from "components/common/card-wrap";
import Slider from "components/common/slider";
import { useMediaQuery } from "react-responsive";
import { CenterFlex, MainTitle, MobileWrap } from "styles/globals";
import About from "./about";
import Developer from "./developer";
import NftMarket from "./nft-market";
import { Span, Wrap } from "./styles";
import BG from "icons/legend.svg";

const items = [
  {
    label: "NFT Market",
    img: <NftMarket />,
  },
  {
    label: "About",
    img: <About />,
  },
  {
    label: "Developer",
    img: <Developer />,
  },
];

const Legend = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default Legend;

const Desktop = () => {
  return (
    <Card>
      <Wrap>
        <div className="left">
          <div className="bg move13to0">
            <BG />
          </div>
          <div className="title move13to0">
            <MainTitle>Zecrey</MainTitle>
            <span>LEGEND</span>
          </div>
        </div>
        <div className="right">
          <Slider items={items} />
        </div>
      </Wrap>
    </Card>
  );
};

const Mobile = () => {
  return (
    <MobileWrap>
      <CenterFlex>
        <MainTitle>Zecrey</MainTitle>
        <Span>LEGEND</Span>
      </CenterFlex>
    </MobileWrap>
  );
};
