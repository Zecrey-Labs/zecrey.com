import Slider from "components/common/slider";
import { useMediaQuery } from "react-responsive";
import Android from "./Android";
import Extension from "./Extension";
import IOS from "./IOS";
import { Wrap } from "./styles";

export const DownloadApp = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default DownloadApp;

const items = [
  {
    label: "Android",
    img: <Android />,
  },
  {
    label: "iOS",
    img: <IOS />,
  },
  {
    label: "Extension",
    img: <Extension />,
  },
];

const Desktop = () => {
  return (
    <Wrap>
      <Slider items={items} />
    </Wrap>
  );
};

const Mobile = () => {
  return <></>;
};
