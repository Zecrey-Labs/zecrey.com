import Card from "components/common/card-wrap";
import Slider, { MobileSlider } from "components/common/slider";
import { useMediaQuery } from "react-responsive";
import { CenterFlex, FlatBtn, MainTitle, MobileWrap } from "styles/globals";
import About from "./about";
import Developer from "./developer";
import Private from "./private";
import { Wrap } from "./styles";
import data from "./data.json";
import Animation from "components/legend/animation";
import { useState } from "react";
import { MobileStyles, MoreText } from "components/legend/styles";
import ImgBox from "components/common/img";

const items = [
  {
    label: "Privacy",
    img: <Private />,
  },
  {
    label: "About Zero",
    img: <About />,
  },
  {
    label: "Broad Adoption",
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

const m_items = [
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

const Mobile = () => {
  const [ac, setAc] = useState(false);
  return (
    <MobileStyles>
      <CenterFlex className="label">
        <ImgBox
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666854837/zero-logo.png"
          alt="logo"
        />
        <span>ZERO</span>
      </CenterFlex>
      <MoreText ac={ac}>
        <p className="top">
          A lightweight, privacy-driven, and portable payment solution.
        </p>
        {!ac ? (
          <FlatBtn onClick={() => setAc(true)}>more</FlatBtn>
        ) : (
          <p className="bottom">
            And it provides users with a simple and intuitive interface that
            allows users to be able to conduct private transfer and swap
            transactions with ease of access.
          </p>
        )}
      </MoreText>
      <MobileSlider items={m_items} />
    </MobileStyles>
  );
};
