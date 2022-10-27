import { BetweenFlex, CenterFlex } from "styles/globals";
import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { ItemWrap, MobileWrap, Wrap } from "./styles";
import BubbleButton from "components/common/bubble-button";
import CornerLink from "components/common/corner-link";
import Swap from "icons/swap.svg";
import Transfer from "icons/transfer.svg";
import DeFi from "icons/defi.svg";
// import Lock from "icons/lock.svg";
import Withdraw from "icons/withdraw.svg";
import Deposit from "icons/deposit.svg";
import NFT from "icons/nft.svg";
import Check from "icons/shield-check.svg";

const items: {
  label: string;
  icon: ReactNode;
  tip?: string;
  link?: string;
  linkLabel?: string;
  size?: { width: string; height: string };
}[] = [
  {
    label: "swap",
    icon: <Swap name="swap" />,
    tip: "Create a Swap transaction in a private AMM DEX. Option to add liquidity as staking for rewards. Any assets on Layer 2 can be used as gas fee.",
  },
  {
    label: "transfer",
    icon: <Transfer name="transfer" />,
    tip: "Conduct transfers to multiple accounts in a single encrypted transaction with a high level of privacy and security.",
  },
  {
    label: "Stake",
    icon: <DeFi name="stake" />,
    tip: "Stake to earn rewards.",
  },
  // {
  //   label: "Lock&Unlock",
  //   icon: <Lock name="lock" />,
  //   tip: "Get rewarded by providing liquidity to bridges amongst various Layer 1 blockchains. Unlock assets with a few clicks.",
  // },
  {
    label: "withdraw",
    icon: <Withdraw name="withdraw" />,
    tip: "Securely reposition your digital assets from Layer 2 to Layer 1.",
  },
  {
    label: "deposit",
    icon: <Deposit name="deposit" />,
    tip: "Migrate digital assets from Layer 1 to Zecrey's Layer 2 to aggregate assets and benefit from lightining fast transactions, privacy features and much more while still retaining ownership of your digital assets.",
  },
  {
    label: "NFT",
    icon: <NFT name="nft" />,
    tip: "Manage your myriad collection of NFTs in one easy to use interface. Can be set as an avatar for your account.",
  },
];

const BubbleCard = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  return isMobile ? <Mobile /> : <Desktop />;
};

export default BubbleCard;

const Desktop = () => {
  return (
    <Wrap>
      <CenterFlex className="items-wrap">
        {items.map((i, index) => (
          <BubbleButton key={index} {...i}>
            {i.icon}
          </BubbleButton>
        ))}
      </CenterFlex>
      <CornerLink href="https://zecrey.medium.com/how-does-zecrey-protocol-protect-account-privacy-6291d897406b">
        <Check name="shield-check" />
        <span>How does Zecrey protect user privacy?</span>
      </CornerLink>
    </Wrap>
  );
};

const Mobile = () => {
  return (
    <MobileWrap>
      <BetweenFlex>
        {items.slice(0, 4).map((i, index) => (
          <Item key={index} icon={i.icon} label={i.label} />
        ))}
      </BetweenFlex>
      <BetweenFlex>
        {items.slice(4, 7).map((i, index) => (
          <Item key={index} icon={i.icon} label={i.label} />
        ))}
      </BetweenFlex>
    </MobileWrap>
  );
};

const Item = (props: { icon: ReactNode; label: string }) => {
  return (
    <ItemWrap>
      {props.icon}
      <label>{props.label}</label>
    </ItemWrap>
  );
};
