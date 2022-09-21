import { CenterFlex } from "styles/globals";
import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { MobileWrap, Wrap } from "./styles";
import CornerLink from "components/common/corner-link";
import BubbleButton from "components/common/bubble-button";
import Polygon from "icons/polygon.svg";
import BSC from "icons/bsc.svg";
import Ethereum from "icons/ethereum.svg";
import Near from "icons/near.svg";
import Avalanche from "icons/avalanche.svg";
import Spinner from "icons/spinner.svg";

const items: {
  label: string;
  icon: ReactNode;
  size?: {
    width: string;
    height: string;
    marginLeft?: string;
    marginRight?: string;
  };
}[] = [
  {
    label: "ethereum",
    icon: <Ethereum name="ethereum" />,
    size: { width: "4rem", height: "6rem", marginLeft: "24px" },
  },
  {
    label: "polygon",
    icon: <Polygon name="polygon" />,
    size: { width: "6rem", height: "6rem" },
  },
  {
    label: "BSC Chain",
    icon: <BSC name="bsc" />,
    size: { width: "5.2rem", height: "6rem" },
  },
  {
    label: "NEAR",
    icon: <Near name="near" />,
    size: { width: "5rem", height: "6rem" },
  },
  {
    label: "avalanche",
    icon: <Avalanche name="avalanche" />,
    size: { width: "6rem", height: "6rem", marginRight: "15px" },
  },
];

const Chains = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Chains;

const Desktop = () => {
  return (
    <Wrap>
      <CenterFlex className="item-wrap">
        {items.map((i, index) => (
          <BubbleButton key={index} {...i}>
            {i.icon}
          </BubbleButton>
        ))}
      </CenterFlex>
      <CornerLink href="https://zecrey.medium.com/introduction-to-the-usage-of-zecrey-multi-chain-l1-wallet-48dd2b5ad132">
        <Spinner name="spinner" />
        <span>How to use Zecrey Multi-chain Wallet?</span>
      </CornerLink>
    </Wrap>
  );
};

const Mobile = () => {
  return <MobileWrap>{items.map((i) => i.icon)}</MobileWrap>;
};
