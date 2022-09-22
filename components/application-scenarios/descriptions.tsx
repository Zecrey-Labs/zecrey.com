import { ReactNode } from "react";
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
      <div className="text">{props.text}</div>
    </ContentWrap>
  );
};

export const PrivatePayment = (props: { ac: boolean; close: () => void }) => {
  return (
    <Content
      label="Private Payment"
      close={props.close}
      text="Zecrey Zero will provide a multi-terminal collaborative privacy payment system. With Zecrey Zero as the core, we create different user terminals, such as Zecrey Mobile and Zecrey Web App. This means you can experience powerful privacy features wherever you are."
      ac={props.ac}
    >
      <PaymentChart>
        <BubbleButton className="mobile" label="" tip="Zecrey Mobile">
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
        <BubbleButton className="payment" label="" tip="Private Payment">
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
        <BubbleButton className="web" label="" tip="Zecrey Web">
          <Desktop className="desktop" />
        </BubbleButton>
      </PaymentChart>
    </Content>
  );
};

export const NftEngine = (props: { ac: boolean; close: () => void }) => {
  return (
    <Content
      label="NFT Engine"
      close={props.close}
      text="The NFT engine is one of the core elements in Zecrey Legend. Not only creators or artists, we will build a platform dedicated to creating NFTs for every ordinary user. Proud to say that the NFT engine will create a multi-terminal experience . Whether you are using a PC or mobile device to create, explore, and purchase or sell, you will have an efficient experience."
      ac={props.ac}
    >
      <EngineChart>
        <CenterFlex className="users">
          <BubbleButton className="user" label="" tip="Creator">
            <User className="user" />
          </BubbleButton>
          <BubbleButton className="user" label="" tip="User">
            <User className="user" />
          </BubbleButton>
        </CenterFlex>
        <CenterFlex className="dash3 left">
          <Dashed3 className="dashed-3" />
          <Dashed3 className="dashed-3" />
        </CenterFlex>
        <BubbleButton className="mobile" label="" tip="Zecrey Mobile">
          <Phone className="phone" />
        </BubbleButton>
        <Dashed2 className="dashed-2" />
        <BubbleButton className="engine" label="" tip="NFT Engine">
          <NFTs className="nfts" />
        </BubbleButton>
        <Dashed2 className="dashed-2" />
        <BubbleButton className="web" label="" tip="Zecrey Web">
          <Desktop className="desktop" />
        </BubbleButton>
        <CenterFlex className="dash3 right">
          <Dashed3 className="dashed-3" />
          <Dashed3 className="dashed-3" />
        </CenterFlex>
        <CenterFlex className="users">
          <BubbleButton className="user" label="" tip="Creator">
            <User className="user" />
          </BubbleButton>
          <BubbleButton className="user" label="" tip="User">
            <User className="user" />
          </BubbleButton>
        </CenterFlex>
      </EngineChart>
    </Content>
  );
};
