import Card from "components/common/card-wrap";
import Slider, { MobileSlider } from "components/common/slider";
import { useMediaQuery } from "react-responsive";
import { CenterFlex, FlatBtn, MainTitle } from "styles/globals";
import About from "./about";
import Developer from "./developer";
import NftMarket from "./nft-market";
import { MobileStyles, MoreText, Wrap } from "./styles";
import Animation from "./animation";
import data from "./data.json";
import ImgBox from "components/common/img";
import { useState } from "react";

const items = [
  {
    label: "NFT Marketplace",
    img: <NftMarket />,
  },
  {
    label: "About Legend",
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
          <Animation data={data} />
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

const m_items = [
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

const Mobile = () => {
  const [ac, setAc] = useState(false);
  return (
    <MobileStyles>
      <CenterFlex className="label">
        <ImgBox
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666854837/legend-logo.png"
          alt="logo"
        />
        <span>LEGEND</span>
      </CenterFlex>
      <MoreText ac={ac}>
        <p className="top">
          The first zkRollup L2 scaling solution on the BNB chain and NFT engine
          of Web3 games.
        </p>
        {!ac ? (
          <FlatBtn onClick={() => setAc(true)}>more</FlatBtn>
        ) : (
          <p className="bottom">
            It offers instant trading, massive scalability, and low gas fees for
            minting and trading NFTs without compromising security.
          </p>
        )}
      </MoreText>
      <MobileSlider items={m_items} />
    </MobileStyles>
  );
};
