import { CenterFlex } from "styles/globals";
import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { ItemWrap, MobileItemWrap } from "./styles";
import Dashed from "icons/dashed.svg";
import DashedHighlight from "icons/dashed-highlight.svg";

const Item = (props: {
  name: string;
  icon: ReactNode;
  opacity?: number;
  bottom: string;
  left: string;
  smaller?: boolean;
  index?: number;
}) => {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
};

export default Item;

const Desktop = (props: {
  name: string;
  icon: ReactNode;
  opacity?: number;
  bottom: string;
  left: string;
  smaller?: boolean;
}) => {
  return (
    <ItemWrap
      opacity={props.opacity}
      bottom={props.bottom}
      left={props.left}
      smaller={props.smaller}
    >
      <div className="icon">{props.icon}</div>
      <CenterFlex className="line">
        <label>{props.name}</label>
        <div className="svg-wrap">
          <Dashed className="normal" />
          <DashedHighlight className="highlight" />
        </div>
        <div className="dot"></div>
      </CenterFlex>
    </ItemWrap>
  );
};

const Mobile = (props: { index?: number; icon: ReactNode; name: string }) => {
  // const posi = useMemo(() => {
  //   return getPosi(props.index || 0);
  // }, [props.index]);

  return (
    <MobileItemWrap>
      <div className="indicator" /> {props.icon} <label>{props.name}</label>
    </MobileItemWrap>
  );
};

// const getPosi = (index: number) => {
//   switch (index) {
//     case 0:
//       return { top: 5, left: 40 };
//     case 1:
//       return { top: 53, left: 11 };
//     case 2:
//       return { top: 98, left: 0 };
//     case 3:
//       return { top: 144, left: -1 };
//     case 4:
//       return { top: 189, left: 8 };
//     case 5:
//       return { top: 236, left: 32 };
//     default:
//       return { top: 0, left: 0 };
//   }
// };
