import classNames from "classnames";
import { debounce } from "lodash";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { CardWrap, MobileWrap } from "./styles";

const Card = (props: { children?: ReactNode }) => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? (
    <Mobile>{props.children}</Mobile>
  ) : (
    <Desktop>{props.children}</Desktop>
  );
};

export default Card;

const Desktop = (props: { children?: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const dom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handleScroll = () => {
      if (dom.current) {
        let domTop = dom.current.getBoundingClientRect().top;
        let domHeight = dom.current.getBoundingClientRect().height;
        let height = window.innerHeight;
        if (height - domTop >= domHeight / 5) {
          setVisible(true);
          document.removeEventListener("scroll", handleScroll);
        }
      }
    };
    const debouncedScrollEventHandler = debounce(handleScroll, 50);
    document.addEventListener("scroll", debouncedScrollEventHandler);
    return () => {
      document.removeEventListener("scroll", debouncedScrollEventHandler);
    };
  }, []);

  return (
    <CardWrap ref={dom} className={classNames({ visible })}>
      {props.children}
    </CardWrap>
  );
};

const Mobile = (props: { children?: ReactNode }) => {
  return <MobileWrap>{props.children}</MobileWrap>;
};
