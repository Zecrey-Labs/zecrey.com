// import Scenarios from "components/application-scenarios";
// import Backers from "components/backers";
// import Communtity from "components/community";
// import Extension from "components/extension";
// import Layout from "components/layout";
// import Landing from "components/landing";
// import Layer2 from "components/layer2";
// import Layout from "components/layout";
// import Legend from "components/legend";
// import MobileApp from "components/mobile";
// import MultiChains from "components/multi-chains";
// import Ecosystem from "components/multi-ecosystem";
// import MultiPurpose from "components/multi-purpose";
// import RoadMap from "components/roadmap";
// import WebApp from "components/web-app";
// import Zero from "components/zero";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("components/layout"), { ssr: false });
const Landing = dynamic(() => import("components/landing"), { ssr: false });
const Layer2 = dynamic(() => import("components/layer2"), { ssr: false });
const Legend = dynamic(() => import("components/legend"), { ssr: false });
const Zero = dynamic(() => import("components/zero"), { ssr: false });
const Scenarios = dynamic(() => import("components/application-scenarios"), {
  ssr: false,
});
const MultiChains = dynamic(() => import("components/multi-chains"), {
  ssr: false,
});
const MultiPurpose = dynamic(() => import("components/multi-purpose"), {
  ssr: false,
});
const Ecosystem = dynamic(() => import("components/multi-ecosystem"), {
  ssr: false,
});
const Extension = dynamic(() => import("components/extension"), { ssr: false });
const WebApp = dynamic(() => import("components/web-app"), { ssr: false });
const MobileApp = dynamic(() => import("components/mobile"), { ssr: false });
const RoadMap = dynamic(() => import("components/roadmap"), { ssr: false });
const Backers = dynamic(() => import("components/backers"), { ssr: false });
const Communtity = dynamic(() => import("components/community"), {
  ssr: false,
});

const Home = () => {
  return (
    <Layout>
      <Landing />
      <Layer2 />
      <Legend />
      <Zero />
      <Scenarios />
      <MultiChains />
      <MultiPurpose />
      <Ecosystem />
      <Extension />
      <WebApp />
      <MobileApp />
      <RoadMap />
      <Backers />
      <Communtity />
    </Layout>
  );
};

export default Home;
