import classNames from "classnames";
import CardLayout from "components/common/card-wrap/card-layout";
import { useMediaQuery } from "react-responsive";
import { Box, BoxGroup, MobileWrap, Wrap } from "./styles";
import Icon from "icons/roadmap.svg";
import Line from "icons/roadmap-line.svg";
import Flag from "icons/roadmap-flag.svg";
import Card from "components/common/card-wrap";

const card = [
  {
    label: "2022 Q1",
    span: ["Contract Auditing", "Layer-1 & Zero Testnet", "Layer-1 Mainnet"],
    width: "17.5rem",
  },
  {
    label: "2022 Q2",
    span: ["NFT Marketplace", "Development on BNB Chain"],
    width: "20rem",
  },
  {
    label: "2022 Q3",
    span: ["zkBNB Open Source Release", "Legend Testnet Development"],
    width: "21rem",
  },
  {
    label: "2022 Q4",
    span: ["Game-SDK Release", "Legend Mainnet"],
    width: "19.9rem",
  },
];

const RoadMap = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default RoadMap;

const Desktop = () => {
  return (
    <Card>
      <CardLayout
        title="Roadmap"
        backgroundIcon={{
          svg: <Icon name="roadmap" />,
          size: { width: "29rem", height: "25.3rem" },
        }}
        text={[
          `The Zecrey roadmap indicates our major milestones, including a summary of Zecrey development, a set of functionalities to be delivered.`,
        ]}
      >
        <Wrap>
          <BoxGroup>
            {card.map((i, index) => (
              <Box
                key={index}
                className={classNames({ ac: index === 3 })}
                width={i.width}
              >
                <label>{i.label}</label>
                <span>
                  {i.span.map((el, index) => (
                    <i key={index}>{el}</i>
                  ))}{" "}
                </span>
              </Box>
            ))}
          </BoxGroup>
          <Line className="line" />
          <Flag className="flag" />
        </Wrap>
      </CardLayout>
    </Card>
  );
};

const Mobile = () => {
  return (
    <MobileWrap>
      <label className="title-1">Road Map</label>
      <div className="map">
        <Line className="line" />
        <Flag className="flag" />
        {card.map((i, index) => (
          <div key={index} className={classNames(`card_${index + 1}`)}>
            <label>{i.label}</label>
            <span>{i.span}</span>
          </div>
        ))}
      </div>
      <label className="title-2">
        The Zecrey roadmap indicates our major milestones, including a summary
        of Zecrey development, a set of functionalities to be delivered.
      </label>
    </MobileWrap>
  );
};
