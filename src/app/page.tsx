"use client";
import Image from 'next/image'
import {Header} from "../components/header/index";
import {Content} from "../components/content/index";
import {Footer} from "../components/footer/index";
import {useEffect, useState} from "react";
import {load} from "./preload";

// const Header = () => {
//   const isMobile = useMediaQuery({ maxWidth: 780 });
//   return isMobile ? <Mobile /> : <Desktop />;
// };

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (() => {
      load();
      setIsReady(true)
    })();

  }, []);

  if (!isReady) return null
  return (
    <div>
      <Header/>
      <Content />
      <Footer />
    </div>
  )
}
