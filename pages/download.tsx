import DownloadApp from "components/download-app";
import Banner from "components/download-app/Banner";
import Layout from "components/layout";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    let body = document.querySelector("body");
    if (body) body.classList.add("enable-scroll");
  }, []);

  return (
    <Layout>
      <Banner />
      <DownloadApp />
    </Layout>
  );
};

export default Page;
