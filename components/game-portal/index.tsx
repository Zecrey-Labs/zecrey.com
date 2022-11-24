import Card from "components/common/card-wrap";
import CardLayout from "components/common/card-wrap/card-layout";
import { useMediaQuery } from "react-responsive";
import { CenterFlex, MainTitle } from "styles/globals";
import Icon from "icons/game-handler.svg";
import Chats from "icons/chats.svg";
import NFTs from "icons/items.svg";
import {
  EngineMobile,
  MobileItemCard,
  MobileStyles,
  PaymentMobile,
} from "../application-scenarios/styles";
// import { NftEngine, PrivatePayment } from "./descriptions";
import { ReactNode, useState } from "react";
import ImgBox from "components/common/img";
import { Link, PortalCard, Wrap } from "./styles";
import CornerLink from "components/common/corner-link";
import Sdk from "icons/sdk.svg";
import BlockchainWar from "./blockchain_war.svg";
import Vote from "./vote.svg";

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

const GamePortal = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default GamePortal;

const Desktop = () => {
  return (
    <Card>
      <CardLayout
        title={
          <>
            Game Portal
            <br />
            for Web3
          </>
        }
        backgroundIcon={{
          svg: <Icon />,
          size: { width: "36rem", height: "29.3rem" },
        }}
        text={[
          "Zecrey provides a new Web3 gaming experience. Games and NFT assets in the LEGEND system will be tightly integrated, and developers can easily develop games by relying on the SDK we provide.",
        ]}
      >
        <Wrap>
          <Portal
            img="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1669284239/game-portal-1.png"
            title={<BlockchainWar />}
            subTitle={<Vote />}
          />
          <Portal
            img="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1669284239/game-portal-2.png"
            title={<BlockchainWar />}
            subTitle={<Vote />}
          />
          <Link disabled>
            <Sdk name="sdk" />
            <span>Check the SDK documentation</span>
          </Link>
        </Wrap>
      </CardLayout>
    </Card>
  );
};

const Portal = (props: {
  img: string;
  title: ReactNode;
  subTitle: ReactNode;
}) => {
  return (
    <PortalCard>
      <ImgBox width={390} height={143} src={props.img} alt="" />
      <div className="title">{props.title}</div>
      <div className="subtitle">{props.subTitle}</div>
      <button disabled>Start the demo</button>
    </PortalCard>
  );
};

const Mobile = () => {
  return (
    <MobileStyles>
      <CenterFlex>
        <MainTitle>
          Game Portal
          <br />
          for Web3
        </MainTitle>
      </CenterFlex>
      <Wrap>
        <Portal
          img="https://res.cloudinary.com/drntjojig/image/upload/v1669281950/game-portal-1.png"
          title={<BlockchainWar />}
          subTitle={<Vote />}
        />
        <Portal
          img="https://res.cloudinary.com/drntjojig/image/upload/v1669281951/game-portal-2.png"
          title={<BlockchainWar />}
          subTitle={<Vote />}
        />
      </Wrap>
    </MobileStyles>
  );
};
