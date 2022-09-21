import Communtity from "components/community";
import Ecosystem from "components/ecosystem";
import Extension from "components/extension";
import Landing from "components/landing";
import Layout from "components/layout";
import MobileApp from "components/mobile";
import MultiChains from "components/multi-chains";
import MultiPurpose from "components/multi-purpose";
import Backers from "components/backers";
import RoadMap from "components/roadmap";
import WebApp from "components/web-app";
import Layer2 from "components/layer2";
import Legend from "components/legend";
import Zero from "components/zero";
import Scenarios from "components/application-scenarios";

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
