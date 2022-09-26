import Card from "components/common/card-wrap";
import CardLayout from "components/common/card-wrap/card-layout";
import { useMediaQuery } from "react-responsive";
import {
  CenterFlex,
  MainTitle,
  MobileBGIcon,
  MobileWrap,
} from "styles/globals";
import Icon from "icons/scenarios.svg";
import Chats from "icons/chats.svg";
import NFTs from "icons/items.svg";
import { ItemCard, MobileItemCard, Wrap } from "./styles";
import { NftEngine, PrivatePayment } from "./descriptions";
import { useState } from "react";
import classNames from "classnames";

const items = [
  {
    icon: <Chats className="chats" />,
    name: "Private Payment",
    sub: "Multi-terminal private payment experience.",
  },
  {
    icon: <NFTs className="nfts" />,
    name: "NFT Engine",
    sub: "For creators, but also for everyone.",
  },
];

const Scenarios = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default Scenarios;

const Desktop = () => {
  const [upper, setUpper] = useState(false);
  const [type, setType] = useState("");

  const trigger = (index: number) => {
    setUpper(true);
    setType(!index ? "payment" : "engine");
  };
  const reset = () => {
    setUpper(false);
    setType("");
  };

  return (
    <Card>
      <CardLayout
        title={
          <>
            Application
            <br />
            Scenarios
          </>
        }
        backgroundIcon={{
          svg: <Icon />,
          size: { width: "24.7rem", height: "25.3rem" },
        }}
        text={[]}
      >
        <Wrap className="move13to0">
          <CenterFlex className={classNames("items-wrap", { upper })}>
            {items.map((i, index) => (
              <ItemCard key={index}>
                <CenterFlex className="icon">{i.icon}</CenterFlex>
                <div className="name">{i.name}</div>
                <div className="sub">{i.sub}</div>
                <button onClick={() => trigger(index)}>Learn More</button>
              </ItemCard>
            ))}
          </CenterFlex>
          <div className={classNames("description-wrap", { upper })}>
            <PrivatePayment ac={type === "payment"} close={reset} />
            <NftEngine ac={type === "engine"} close={reset} />
          </div>
        </Wrap>
      </CardLayout>
    </Card>
  );
};

const Mobile = () => {
  return (
    <MobileWrap>
      <CenterFlex>
        <MainTitle>Application Scenarios</MainTitle>
      </CenterFlex>
      <div>
        {items.map((i, index) => (
          <MobileItemCard key={index}>
            <CenterFlex className="icon">{i.icon}</CenterFlex>
            <div className="name">{i.name}</div>
            <div className="sub">{i.sub}</div>
          </MobileItemCard>
        ))}
      </div>
      <MobileBGIcon width={123} height={126}>
        <Icon />
      </MobileBGIcon>
    </MobileWrap>
  );
};
