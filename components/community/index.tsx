import { ReactNode } from "react";
import Twitter from "icons/twitter.svg";
import Telegram from "icons/telegram.svg";
import Medium from "icons/medium.svg";
import Discord from "icons/discord.svg";
import { useMediaQuery } from "react-responsive";
import { Media, MobileWrap, Wrap } from "./styles";
import Card from "components/common/card-wrap";
import BubbleButton from "components/common/bubble-button";
import ImgBox from "components/common/img";
import { MainTitle } from "styles/globals";

const items: {
  icon: ReactNode;
  label: string;
  tip?: string;
  linkLabel?: string;
  link?: string;
  size?: { width: string; height: string };
}[] = [
  {
    label: "twitter",
    icon: <Twitter name="twitter" />,
    tip: "Follow @zecreyprotocol for latest annoucements.",
    linkLabel: "Join",
    link: "https://twitter.com/zecreyprotocol",
    size: { width: "6.7rem", height: "5.4rem" },
  },
  {
    label: "telegram",
    icon: <Telegram name="telegram" />,
    tip: "Join Zecrey community for discussion.",
    linkLabel: "Join",
    link: "https://t.me/zecrey",
    size: { width: "6.7rem", height: "5.6rem" },
  },
  {
    label: "medium",
    icon: <Medium name="medium" />,
    tip: "Learn Zecrey news, progress and technological paper.",
    linkLabel: "Join",
    link: "https://medium.com/@zecrey",
    size: { width: "5.6rem", height: "5.6rem" },
  },
  {
    label: "discord",
    icon: <Discord name="discord" />,
    tip: "Chat with Zecrey members, surf in the privacy world.",
    linkLabel: "Join",
    link: "https://discord.com/invite/MdajwkVZE4",
    size: { width: "5.6rem", height: "6.4rem" },
  },
];

const Communtity = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default Communtity;

const Desktop = () => {
  return (
    <Card>
      <Wrap>
        <ImgBox
          className="earth-bg move06to0"
          src="https://res.cloudinary.com/drntjojig/image/upload/q_auto:eco/v1666854837/earth.png"
          alt="bg"
          width={384}
          height={172}
        />
        <MainTitle className="headline move13to0">Join Community</MainTitle>
        <div className="introduce  move13to0">
          Zecrey team is dedicated to globalization development of the project.
          In our communities, developers and users are at liberty to communicate
          with each other about Zecrey, acquire the latest progress of the
          project, get knowledge of the technology background, and even discuss
          the technical details with the development team.
        </div>
        <Media className="move13to0">
          {items.map((i, index) => (
            <BubbleButton key={index} {...i}>
              {i.icon}
            </BubbleButton>
          ))}
        </Media>
      </Wrap>
    </Card>
  );
};

const Mobile = () => {
  return (
    <Card>
      <MobileWrap>
        <label className="title-1">Join Communtity</label>
        <label className="title-2">
          Zecrey team is dedicated to globalization
          <br />
          development of the project.
        </label>
        <div className="grid">
          <div className="grid-1">
            <a href={items[0].link} target="_blank" rel="noreferrer">
              {items[0].icon}
              <span>{items[0].label}</span>
            </a>
          </div>
          <div className="grid-2">
            <a href={items[1].link} target="_blank" rel="noreferrer">
              {items[1].icon}
              <span>{items[1].label}</span>
            </a>
          </div>
        </div>
        <div className="grid">
          <div className="grid-1">
            <a href={items[2].link} target="_blank" rel="noreferrer">
              {items[2].icon}
              <span>{items[2].label}</span>
            </a>
          </div>
          <div className="grid-2">
            <a href={items[3].link} target="_blank" rel="noreferrer">
              {items[3].icon}
              <span>{items[3].label}</span>
            </a>
          </div>
        </div>
      </MobileWrap>
    </Card>
  );
};
