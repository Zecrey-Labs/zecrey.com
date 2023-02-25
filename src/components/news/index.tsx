import {ContainerCenter} from "@/styles/globals";
import {NewsContentBtnWrap, NewsContentLine, NewsContentStyle} from "./styles";
import CardNews from "@/components/card/news";
import Button from "@/components/button";
import {useMediaQuery} from "react-responsive";
import {MOBILE_WIDTH} from "@/config";
import { useQuery, gql } from "@apollo/client";
import {fmDate} from "@/utils/inedx";

const GET_ARTICLE_LIST = gql`
  query getArticleList {
    porter(limit: 3, order_by: { timestamp: desc }) {
      banner
      heading
      timestamp
      link
  }
}`;

const atclArr = [
    {
        ico: "/static/img/atcl.png",
        title: "Zecrey’s Yearly Brief Summary 2022",
        time: "2023-01-01",
        url: "https://awesomenear.com/zecrey",
    },
    {
        ico: "/static/img/atcl2.png",
        title: "Zecrey Legend Testnet Phase 1 is now LIVE!",
        time: "2023-01-01",
        url: "https://awesomenear.com/zecrey",
    },
    {
        ico: "/static/img/atcl3.png",
        title: "Apply for Zecrey Legend Pre-Testnet Whitelist!",
        time: "2023-01-01",
        url: "https://awesomenear.com/zecrey",
    },
]

export default function News() {
    const isMobile = useMediaQuery({maxWidth: MOBILE_WIDTH});
    const { data } = useQuery(GET_ARTICLE_LIST);

    return (
        <ContainerCenter>
            <NewsContentStyle>
                {data?.porter.map((item: any, index:number) => {
                    return <CardNews url={item.link} key={index} img={item.banner} title={item.heading} time={fmDate(item.timestamp)}
                    />
                })}
            </NewsContentStyle>
            <NewsContentBtnWrap>
                <Button text={'More Posts >'}/>
            </NewsContentBtnWrap>
            {
                !isMobile
                &&
                <NewsContentLine/>
            }

        </ContainerCenter>
    );
};
