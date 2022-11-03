import { useMediaQuery } from "react-responsive";

export const DownloadApp = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default DownloadApp;

const Desktop = () => {
  return <></>;
};

const Mobile = () => {
  return <></>;
};
