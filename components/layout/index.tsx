import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import { Container, Wrap } from "./styles";
import dynamic from "next/dynamic";

const BG = dynamic(() => import("./BG"), { ssr: false });

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
