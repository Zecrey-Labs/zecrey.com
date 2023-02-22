import { ReactNode } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RootLayout (props: { children: ReactNode | undefined }) {
  // const router = useRouter();

  return (
      <>
          <Header />
          {props.children}
          <Footer />
      </>
  );
};
