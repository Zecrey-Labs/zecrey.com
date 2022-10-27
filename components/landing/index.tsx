import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { isSafari } from "react-device-detect";
import {
  Bottom,
  Box,
  Img,
  Label,
  MobileWrap,
  Text,
  Text2,
  Video,
  Wrap,
} from "./styles";
import { useMediaQuery } from "react-responsive";
import Dots from "icons/dots.svg";
import Logo from "icons/logo.svg";
import MDots from "icons/dots-mobile.svg";
import MLogo from "icons/logo-mobile.svg";
import Dart from "icons/dart.svg";

const Landing = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Landing;

const Desktop = () => {
  useEffect(() => {
    setTimeout(() => {
      let body = document.querySelector("body");
      if (body) body.classList.add("enable-scroll");
    }, 5 * 1000);
  }, []);

  return (
    <Wrap className="landing">
      <div className="container">
        <Box>
          <Dots className="dots" name="dots" />
          <Logo className="logo" name="logo" />
        </Box>
        <Label>Zecrey Protocol</Label>
        <Text>
          zkRollup based
          <br /> Layer 2 protocol featuring
          <br /> privacy and scalability.
          {/* <Typing str='Bringing Cross-chain Privacy to Digital Assets.' /> */}
        </Text>
        <Text2>
          Zecrey aims to lower the entry barriers of blockchain by making it
          available for
          <br /> business and consumer use, while increasing privacy and
          security.
        </Text2>
        {isSafari ? (
          <Img
            src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666853125/Zecrey_3D_poster.webp"
            alt="Zecrey_3D_poster"
          />
        ) : (
          <Video
            src="https://res.cloudinary.com/drntjojig/video/upload/q_auto:eco/v1666852991/Zecrey_3D.webm"
            autoPlay
            loop
            muted
            poster="https://res.cloudinary.com/drntjojig/image/upload/c_scale,h_649,q_auto:low/v1666853125/Zecrey_3D_poster.png"
            onContextMenu={(e) => e.preventDefault()}
          />
        )}
      </div>
      <Bottom>
        <div>Learn More</div>
        <Dart name="dart" />
      </Bottom>
    </Wrap>
  );
};

// const Typing = (props: { str: string }) => {
//   const [mutedFrom, setMutedFrom] = useState(0);

//   useEffect(() => {
//     let count = 0;
//     let timer = setInterval(() => {
//       count++;
//       setMutedFrom(count);
//       if (count >= props.str.length) {
//         clearInterval(timer);
//       }
//     }, 80);
//     return () => {
//       if (timer) clearInterval(timer);
//     };
//   }, []);

//   return (
//     <>
//       {Array.from(props.str).map((i, index) => (
//         <span key={index} className={classNames({ muted: index > mutedFrom })}>
//           {i}
//         </span>
//       ))}
//     </>
//   );
// };

const Mobile = () => {
  const [longer, setLonger] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const dom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let body = document.querySelector("body");
    if (body) body.classList.add("enable-scroll");
    let handleResize = () => {
      if (!wrap?.current || !dom?.current) return;
      let [wrapTop, wrapHeight, domTop] = [
        wrap.current.getBoundingClientRect().top,
        wrap.current.getBoundingClientRect().height,
        dom.current.getBoundingClientRect().top,
      ];
      setLonger(domTop < wrapTop || wrapHeight > window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileWrap ref={wrap} className={classNames("landing-mobile", { longer })}>
      <Box ref={dom}>
        <Text>
          zkRollup based Layer 2 protocol featuring privacy and scalability.
        </Text>
        <Text2>
          Zecrey aims to lower the entry barriers of blockchain by making it
          available for business and consumer use, while increasing privacy and
          security.
        </Text2>
        <MDots className="dots" />
        <MLogo className="logo" />
        <Img
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666853125/Zecrey_3D_poster.webp"
          alt="Zecrey_3D_poster"
        />
      </Box>
      <Bottom>
        <div>Learn More</div>
        <Dart name="dart" />
      </Bottom>
    </MobileWrap>
  );
};
