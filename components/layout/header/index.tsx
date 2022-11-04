import classNames from "classnames";
import { useRouter } from "next/router";
import { BetweenFlex, CenterFlex, FlatBtn } from "styles/globals";
import { useEffect, useRef, useState } from "react";
import Bars from "icons/bars.svg";
import { useMediaQuery } from "react-responsive";
import {
  Brand,
  Container,
  Download,
  MobileBanner,
  MobileWrap,
  Nav,
  Wrap,
} from "./styles";
import ImgBox from "components/common/img";
import { APP_URL, EXPLORER_URL, INFO_URL, MEDIA } from "config";

const navList = [
  { label: "Home", url: "/" },
  { label: "App", url: APP_URL, disabled: true },
  { label: "Explorer", url: EXPLORER_URL },
  { label: "Info", url: INFO_URL, disabled: true },
];

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Header;

const Desktop = () => {
  const router = useRouter();

  return (
    <Container className="">
      <Wrap className="header">
        <Brand className="brand" onClick={() => router.push("/")}>
          <ImgBox
            src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666853253/zecrey-logo-dark.png"
            alt="logo"
            width={131}
            height={47}
          />
        </Brand>
        <Nav dark>
          {navList.map((i, index) => (
            <div
              key={index}
              className={classNames("link", {
                ac: i.url === "/",
              })}
            >
              <FlatBtn
                onClick={() =>
                  i.url === "/" ? router.push("/") : window.open(i.url)
                }
                disabled={i.disabled}
              >
                {i.label}
              </FlatBtn>
              <div
                className={classNames(
                  {
                    hover: i.label === "Explorer",
                  },
                  {
                    hover1: i.label === "Info",
                  }
                )}
              ></div>
            </div>
          ))}
        </Nav>
        <Download>
          <CenterFlex>
            <ImgBox
              src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666853252/wallet_logo.png"
              alt="Zecrey Wallet"
              width={145}
              height={33}
            />
          </CenterFlex>
          <div className="divider" />
          <a href={"/download"} target="_blank" rel="noreferrer">
            <span>Download</span>
          </a>
        </Download>
      </Wrap>
    </Container>
  );
};

const Mobile = () => {
  const [ac, setAc] = useState(false);
  const [top, setTop] = useState("");
  const router = useRouter();
  const dom = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!wrap.current?.contains(e.target as Element)) {
        setAc(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    setTop(`-${dom.current?.clientHeight || 0}px`);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setTop(`-${dom.current?.clientHeight || 0}px`);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ac]);

  return (
    <MobileWrap ref={wrap}>
      <BetweenFlex className="header">
        <FlatBtn className="brand" onClick={() => router.push("/")}>
          <ImgBox
            src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666853253/zecrey-logo-dark.png"
            alt="logo"
          />
        </FlatBtn>
        <FlatBtn
          className={classNames("ctrl", { ac })}
          onClick={() => setAc(!ac)}
        >
          <Bars />
        </FlatBtn>
      </BetweenFlex>
      <div
        className={classNames("menu", { ac })}
        ref={dom}
        style={{
          transform: `translateY(${ac ? "0" : top})`,
        }}
      >
        {navList.map((i, index) => (
          <FlatBtn
            key={index}
            className="link"
            onClick={() =>
              i.url === "/" ? router.push("/") : window.open(i.url)
            }
            disabled={i.disabled}
          >
            {i.label}
          </FlatBtn>
        ))}
        <CenterFlex className="media">
          {MEDIA.map((i, index) => (
            <a
              className={i.type}
              key={index}
              href={i.url}
              target="_blank"
              rel="noreferrer"
            >
              {i.icon}
            </a>
          ))}
        </CenterFlex>
      </div>
      <MobileB />
    </MobileWrap>
  );
};

const MobileB = () => {
  const router = useRouter();

  return (
    <MobileBanner className="banner-mobile">
      <ImgBox
        src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1667443048/logo-icon.svg"
        alt=""
      />
      <div className="text">Zecrey Mobile now available!</div>
      <button onClick={() => router.push("/download")}>Check</button>
    </MobileBanner>
  );
};
