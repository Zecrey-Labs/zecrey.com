import Card from "components/common/card-wrap";
import CardLayout from "components/common/card-wrap/card-layout";
import { useMediaQuery } from "react-responsive";
import { CenterFlex, MainTitle } from "styles/globals";
import Icon from "icons/scenarios.svg";
import Chats from "icons/chats.svg";
import NFTs from "icons/items.svg";
import {
  EngineMobile,
  ItemCard,
  MobileItemCard,
  MobileStyles,
  PaymentMobile,
  Wrap,
} from "./styles";
import { NftEngine, PrivatePayment } from "./descriptions";
import { useState } from "react";
import classNames from "classnames";
import ImgBox from "components/common/img";

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
  const [type, setType] = useState("");

  const trigger = (index: number) => {
    // setUpper(true);
    setType(!index ? "payment" : "engine");
  };
  const reset = () => {
    // setUpper(false);
    setType("");
  };

  return (
    <MobileStyles>
      <CenterFlex>
        <MainTitle>
          Application
          <br />
          Scenarios
        </MainTitle>
      </CenterFlex>
      {type === "" && (
        <div>
          {items.map((i, index) => (
            <MobileItemCard key={index}>
              <CenterFlex className="icon">{i.icon}</CenterFlex>
              <div className="name">{i.name}</div>
              <div className="sub">{i.sub}</div>
              <button onClick={() => trigger(index)}>Learn more</button>
            </MobileItemCard>
          ))}
        </div>
      )}
      {type === "payment" && (
        <PaymentMobile>
          <ImgBox
            src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666937277/payment-chart.svg"
            alt=""
          />
          <p>
            Zecrey Zero will provide a multi-terminal collaborative privacy
            payment system. With Zecrey Zero as the core, we create different
            user terminals, such as Zecrey Mobile and Zecrey Web App.
          </p>
          <p>
            This means you can experience powerful privacy features wherever you
            are.
          </p>
          <button onClick={() => setType("")}>{"<"}</button>
        </PaymentMobile>
      )}
      {type === "engine" && (
        <EngineMobile>
          <ImgBox
            src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666937277/engine-chart.svg"
            alt=""
          />
          <p style={{ width: "91%" }}>
            Users can operate NFTs in low gas (even zero gas) in Zecrey Legend
            and withdraw the layer 2 NFT to the underlying layer 1 network.
          </p>
          <p>
            NFT transactions on Zecrey NFT Marketplace are advantageous with
            faster speed, low even no gas fee and the sound security shared with
            BNB chain. And royalty can be set by NFT artists to incentivize the
            creative genius.
          </p>
          <button onClick={() => setType("")}>{"<"}</button>
        </EngineMobile>
      )}
    </MobileStyles>
  );
};
