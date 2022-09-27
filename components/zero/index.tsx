import Card from "components/common/card-wrap";
import Slider from "components/common/slider";
import { Span } from "components/legend/styles";
import { useMediaQuery } from "react-responsive";
import { CenterFlex, MainTitle, MobileWrap } from "styles/globals";
import About from "./about";
import Developer from "./developer";
import Private from "./private";
import { Wrap } from "./styles";
import data from "./data.json";
import Animation from "components/legend/animation";

const items = [
  {
    label: "Privacy",
    img: <Private />,
  },
  {
    label: "About",
    img: <About />,
  },
  {
    label: "Developer",
    img: <Developer />,
  },
];

const Zero = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default Zero;

const Desktop = () => {
  return (
    <Card>
      <Wrap>
        <div className="left">
          <Animation data={data} delay />
          <div className="title move13to0">
            <MainTitle>Zecrey</MainTitle>
            <span>ZERO</span>
          </div>
        </div>
        <div className="right">
          <Slider items={items} />
        </div>
      </Wrap>
    </Card>
  );
};

const Mobile = () => {
  return (
    <MobileWrap>
      <CenterFlex>
        <MainTitle>Zecrey</MainTitle>
        <Span>ZERO</Span>
      </CenterFlex>
    </MobileWrap>
  );
};
