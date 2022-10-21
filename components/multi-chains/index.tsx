import { MainTitle, MobileBGIcon, MobileWrap, vw } from "styles/globals";
import { useMediaQuery } from "react-responsive";
import CardLayout from "components/common/card-wrap/card-layout";
import Chains from "./chains";
import Icon from "icons/multi-chain.svg";
import MultiChain from "icons/multi-chain-mobile.svg";
import Card from "components/common/card-wrap";

const MultiChains = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  return isMobile ? <Mobile /> : <Desktop />;
};

export default MultiChains;

const Desktop = () => {
  return (
    <Card>
      <CardLayout
        title={
          <>
            Central Hub for
            <br />
            your Digital Assets
          </>
        }
        backgroundIcon={{
          svg: <Icon name="multi-chain" />,
          size: {
            width: "32.7rem",
            height: "21.6rem",
          },
        }}
        text={[
          `You have at your finger tips the ability to view, manage and aggregate all your digital assets across various blockchains with Zecrey's wallet. Gone are the days where you need to go through different websites and wallets to see all of your digital assets.`,
        ]}
      >
        <Chains />
      </CardLayout>
    </Card>
  );
};

export const Mobile = () => {
  return (
    <MobileWrap>
      <div className="title-1">
        <MainTitle>
          Central Hub for
          <br />
          your Digital Assets
        </MainTitle>
      </div>
      <Chains />
      <div className="title-2">
        You have at your finger tips the ability to view, manage and aggregate
        all your digital assets across various blockchains with Zecrey&#39;s
        wallet. Gone are the days where you need to go through different
        websites and wallets to see all of your digital assets.
      </div>
      <MobileBGIcon width={120} height={95}>
        <MultiChain />
      </MobileBGIcon>
    </MobileWrap>
  );
};
