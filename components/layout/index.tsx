import { ReactNode } from "react";
import Header from "./header";
import { Container, Wrap } from "./styles";
import dynamic from "next/dynamic";
import BG from "./BG";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

const Footer = dynamic(() => import("./footer"), { ssr: false });

const Layout = (props: { children: ReactNode | undefined }) => {
  const isMobile = useMediaQuery({ maxWidth: 780 });

  return (
    <Wrap className="layout">
      <Header />
      <BG />
      <Container
        className={classNames("layout-container", { mobile: isMobile })}
      >
        {props.children}
        <Footer />
      </Container>
      <div id="account-ctrl-renderer" />
      <div id="modal-renderer" />
    </Wrap>
  );
};

export default Layout;
