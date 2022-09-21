import { useMediaQuery } from "react-responsive";
import { MainTitle, MobileBGIcon, MobileWrap, vw } from "styles/globals";
import MBoxes from "icons/boxes-mobile.svg";
import Boxes from "icons/boxes.svg";
import BubbleCard from "./bubble-card";
import CardLayout from "components/common/card-wrap/card-layout";
import Card from "components/common/card-wrap";

export const MultiPurpose = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  return isMobile ? <Mobile /> : <Desktop />;
};

export default MultiPurpose;

const Desktop = () => {
  return (
    <Card>
      <CardLayout
        title={
          <>
            Multiple
            <br />
            Purposes
          </>
        }
        backgroundIcon={{
          svg: <Boxes />,
          size: {
            width: "35.2rem",
            height: "25.2rem",
          },
        }}
        text={[
          "Not just a wallet. With Zecrey you can transfer, swap, stake, and much more across different blockchains with a high level of privacy and transaction speed thanks to a layer-2 architecture based on zk-rollup.",
        ]}
      >
        <BubbleCard />
      </CardLayout>
    </Card>
  );
};

const Mobile = () => {
  return (
    <MobileWrap>
      <div className="title-1">
        <MainTitle>Multiple Purposes</MainTitle>
      </div>
      <BubbleCard />
      <div className="title-2">
        Not just a wallet. With Zecrey you can transfer, swap, stake, and much
        more across different blockchains with a high level of privacy and
        transaction speed thanks to a layer-2 architecture based on zk-rollup.
      </div>
      <MobileBGIcon width={100} height={96}>
        <MBoxes />
      </MobileBGIcon>
    </MobileWrap>
  );
};
