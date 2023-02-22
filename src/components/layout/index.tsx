import { ReactNode } from "react";
import Header from "@/components/layout/header";
import Screen1 from "@/components/screen/screen1";
import Footer from "@/components/layout/footer";

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
