import { ReactNode } from "react";
import Header from "./header";
import { Container, Wrap } from "./styles";
import dynamic from "next/dynamic";
import BG from "./BG";

const Footer = dynamic(() => import("./footer"), { ssr: false });

const Layout = (props: { children: ReactNode | undefined }) => {
  return (
    <Wrap className="layout">
      <Header />
      <BG />
      <Container className="layout-container">
        {props.children}
        <Footer />
      </Container>
      <div id="account-ctrl-renderer" />
      <div id="modal-renderer" />
    </Wrap>
  );
};

export default Layout;
