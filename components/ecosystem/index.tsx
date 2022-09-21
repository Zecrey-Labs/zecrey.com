import React, { ReactNode } from "react";
import Itm from "components/ecosystem/item";
import { LogoDot, MobileLogo, Wrap } from "./styles";
import { useMediaQuery } from "react-responsive";
import ImgBox from "components/common/img";
import EcosystemIcon from "icons/ecosystem.svg";
import Wallet from "icons/wallet.svg";
import AppChain from "icons/app-chain.svg";
import Service from "icons/service.svg";
import Payment from "icons/payment.svg";
import NFTs from "icons/nfts.svg";
import Check from "icons/shield-check.svg";
import Icon from "icons/planet.svg";
import Modal from "./modal";
import CardLayout from "components/common/card-wrap/card-layout";
import Card from "components/common/card-wrap";
import { MainTitle, MobileBGIcon, MobileWrap } from "styles/globals";

const items: {
  name: string;
  icon: ReactNode;
  opacity: number;
  bottom: string;
  left: string;
  smaller?: boolean;
}[] = [
  {
    name: "Multi-chain Wallet",
    icon: <Wallet name="wallet" />,
    opacity: 1,
    bottom: "2.8rem",
    left: "15.5rem",
  },
  {
    name: "Zecrey app chain",
    icon: <AppChain name="app-chain" />,
    opacity: 0.6,
    bottom: "4.7rem",
    left: "24.8rem",
    smaller: true,
  },
  {
    name: "CEX/otc service",
    icon: <Service name="service" />,
    opacity: 0.4,
    bottom: "5.6rem",
    left: "34.3rem",
    smaller: true,
  },
  {
    name: "private payment",
    icon: <Payment name="payment" />,
    opacity: 0.4,
    bottom: "5.6rem",
    left: "61.7rem",
    smaller: true,
  },
  {
    name: "Nft Manage",
    icon: <NFTs name="nfts" />,
    opacity: 0.6,
    bottom: "4.7rem",
    left: "71.2rem",
    smaller: true,
  },
  {
    name: "Privacy protect",
    icon: <Check name="shield-check" />,
    opacity: 1,
    bottom: "3rem",
    left: "80.5rem",
  },
];

const Ecosystem = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Ecosystem;

const Desktop = () => {
  return (
    <Card>
      <CardLayout
        title={
          <>
            Multi-layer
            <br />
            Ecosystem
          </>
        }
        backgroundIcon={{
          svg: <Icon />,
          size: { width: "33.3rem", height: "21.1rem" },
        }}
        text={[
          "Supporting both Layer 1 & 2 Networks, users taking advantage of Zecrey's robust ecosystem will have all of their bases covered. Managing & aggregating multi-chain assets, NFTs, Blockchain games, DEX/OTC services, and Payment solutions are just a few clicks away.",
        ]}
      >
        <Wrap className="wrap">
          <Modal />
          <div className="items-wrap">
            <ImgBox
              className="dashed"
              src="/static/image/ecosystem-wire.png"
              alt="bg"
              width={955}
              height={66}
            />
            {items.map((i, index) => (
              <Itm key={index} {...i} index={index} />
            ))}
            <LogoDot />
            <ImgBox
              className="logo"
              src="/static/image/ecosystem-zecrey.png"
              alt="logo"
              width={136}
              height={155}
            />
          </div>
        </Wrap>
      </CardLayout>
    </Card>
  );
};

const Mobile = () => {
  return (
    <MobileWrap>
      <MobileBGIcon width={145} height={91}>
        <Icon />
      </MobileBGIcon>
      <div className="title-1">
        <MainTitle>
          Multi-layer
          <br />
          Ecosystem
        </MainTitle>
      </div>
      <EcosystemIcon className="ecosystem-icon" />
      <MobileLogo className="mobile-logo">
        <ImgBox
          className="logo"
          src="/static/image/ecosystem-zecrey.png"
          alt="logo"
        />
      </MobileLogo>
      <div className="title-2">
        Supporting both Layer 1 & 2 Networks, users taking advantage of
        Zecrey&#39;s robust ecosystem will have all of their bases covered.
        Managing & aggregating multi-chain assets, NFTs, Blockchain games,
        DEX/OTC services, and Payment solutions are just a few clicks away.
      </div>
    </MobileWrap>
  );
};
