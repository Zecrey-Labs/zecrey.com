import { ReactNode } from "react";
import BG from "./BG";
import Footer from "./footer";
import Header from "./header";
import { Container, Wrap } from "./styles";

const Layout = (props: { children: ReactNode | undefined }) => {
  return (
    <Wrap className="layout">
      <Header />
      <BG />
      <Container className="layout-container">{props.children}</Container>
      <div id="account-ctrl-renderer" />
      <div id="modal-renderer" />
      <Footer />
    </Wrap>
  );
};

export default Layout;
