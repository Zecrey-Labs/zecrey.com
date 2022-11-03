import DownloadApp from "components/download-app";
import Banner from "components/download-app/banner";
import Layout from "components/layout";

const Page = () => {
  return (
    <Layout>
      <Banner />
      <DownloadApp />
    </Layout>
  );
};

export default Page;
