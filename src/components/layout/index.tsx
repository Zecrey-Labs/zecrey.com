import { ReactNode } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Screen1 from "@/components/screen/screen1";

export default function RootLayout (props: { children: ReactNode | undefined }) {

  return (
      <>
          <Header />
          <Screen1 />
          {props.children}
          <Footer />
      </>
  );
};
