import { CSSProperties, ReactNode } from "react";
import { ContentWrap, EngineChart, PaymentChart } from "./styles";
import Close from "icons/close.svg";
import Phone from "icons/phone.svg";
import Chats from "icons/chats.svg";
import NFTs from "icons/items.svg";
import Desktop from "icons/desktop.svg";
import User from "icons/user.svg";
import Dashed from "icons/application-scenarios-dashed.svg";
import Dashed2 from "icons/application-scenarios-dashed-2.svg";
import Dashed3 from "icons/application-scenarios-dashed-3.svg";
import { CenterFlex } from "styles/globals";
import BubbleButton from "components/common/bubble-button";

const Content = (props: {
  label: string;
  close: () => void;
  text: string;
  textStyles?: CSSProperties;
  children?: ReactNode;
  ac: boolean;
}) => {
  return (
    <ContentWrap ac={props.ac}>
      <button className="close" onClick={props.close}>
        <Close />
      </button>
      <div className="header">{props.label}</div>
      {props.children}
      <div className="text" style={props.textStyles || {}}>
        {props.text}
      </div>
    </ContentWrap>
  );
};

export const PrivatePayment = (props: { ac: boolean; close: () => void }) => {
  return (
    <Content
      label="Private Payment"
      close={props.close}
      text="Zecrey Zero enables privacy features where users can conduct private transfer and swap transactions. With Zecrey Mobile App and Zecrey Web App, you can experience powerful privacy features wherever you are."
      textStyles={{ width: "73rem", paddingLeft: "1rem" }}
      ac={props.ac}
    >
      <PaymentChart>
        <BubbleButton
          className="mobile"
          label=""
          tip="Zecrey Mobile"
          size={{ width: "2.7rem", height: "4rem" }}
        >
          <Phone className="phone" />
        </BubbleButton>
        <CenterFlex className="features">
          <div>
            <span>Privacy Swap</span>
            <span>Privacy Wallet</span>
          </div>
          <Dashed />
          <div>
            <span>Defi</span>
            <span>Privacy Transfer</span>
          </div>
        </CenterFlex>
        <BubbleButton
          className="payment"
          label=""
          tip="Private Payment"
          size={{
            width: "5.4rem",
            height: "4.2rem",
          }}
        >
          <Chats className="chats" />
        </BubbleButton>
        <CenterFlex className="features">
          <div>
            <span>Privacy Wallet</span>
            <span>Privacy Swap</span>
          </div>
          <Dashed />
          <div>
            <span>Privacy Transfer</span>
            <span>Defi</span>
          </div>
        </CenterFlex>
        <BubbleButton
          className="web"
          label=""
          tip="Zecrey Web"
          size={{
            width: "3.8rem",
            height: "3.4rem",
          }}
        >
          <Desktop className="desktop" />
        </BubbleButton>
      </PaymentChart>
    </Content>
  );
};

export const NftEngine = (props: { ac: boolean; close: () => void }) => {
  return (
    <Content
      label="NFT Marketplace powered by zkRollup"
      close={props.close}
      text="Users can operate NFTs in low gas (even zero gas) in Zecrey Legend and withdraw the layer 2 NFT to the underlying layer 1 network. NFT transactions on Zecrey NFT Marketplace are advantageous with faster speed, low even no gas fee and the sound security shared with BNB chain. And royalty can be set by NFT artists to incentivize the creative genius."
      textStyles={{ fontSize: "1.4rem", width: "73rem" }}
      ac={props.ac}
    >
      <EngineChart>
        <CenterFlex className="users">
          <BubbleButton
            className="user"
            label=""
            tip="Creator"
            size={{ width: "1.6rem", height: "1.8rem" }}
          >
            <User className="user" />
          </BubbleButton>
          <BubbleButton
            className="user"
            label=""
            tip="User"
            size={{ width: "1.6rem", height: "1.8rem" }}
          >
            <User className="user" />
          </BubbleButton>
        </CenterFlex>
        <CenterFlex className="dash3 left">
          <Dashed3 className="dashed-3" />
          <Dashed3 className="dashed-3" />
        </CenterFlex>
        <BubbleButton
          className="mobile"
          label=""
          tip="Zecrey Mobile"
          size={{ width: "2.7rem", height: "4rem" }}
        >
          <Phone className="phone" />
        </BubbleButton>
        <Dashed2 className="dashed-2" />
        <BubbleButton
          className="engine"
          label=""
          tip="NFT Engine"
          size={{
            width: "5.4rem",
            height: "4.2rem",
          }}
        >
          <NFTs className="nfts" />
        </BubbleButton>
        <Dashed2 className="dashed-2" />
        <BubbleButton
          className="web"
          label=""
          tip="Zecrey Web"
          size={{
            width: "3.8rem",
            height: "3.4rem",
          }}
        >
          <Desktop className="desktop" />
        </BubbleButton>
        <CenterFlex className="dash3 right">
          <Dashed3 className="dashed-3" />
          <Dashed3 className="dashed-3" />
        </CenterFlex>
        <CenterFlex className="users">
          <BubbleButton
            className="user"
            label=""
            tip="Creator"
            size={{ width: "1.6rem", height: "1.8rem" }}
          >
            <User className="user" />
          </BubbleButton>
          <BubbleButton
            className="user"
            label=""
            tip="User"
            size={{ width: "1.6rem", height: "1.8rem" }}
          >
            <User className="user" />
          </BubbleButton>
        </CenterFlex>
      </EngineChart>
    </Content>
  );
};
