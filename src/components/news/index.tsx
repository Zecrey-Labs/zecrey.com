import {ContainerCenter} from "@/styles/globals";
import {NewsContentBtnWrap, NewsContentLine, NewsContentStyle} from "./styles";
import CardNews from "@/components/card/news";
import Button from "@/components/button";
import {useMediaQuery} from "react-responsive";
import {MOBILE_WIDTH} from "@/config";
import {useQuery, gql} from "@apollo/client";
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

export default function News() {
    const {data} = useQuery(GET_ARTICLE_LIST);

    return (
        <ContainerCenter>
            <NewsContentStyle>
                {data?.porter.map((item: any, index: number) => {
                    return <CardNews url={item.link} key={index} img={item.banner} title={item.heading}
                                     time={fmDate(item.timestamp)}
                    />
                })}
            </NewsContentStyle>
            <NewsContentBtnWrap>
                <Button text={'More Posts >'}/>
            </NewsContentBtnWrap>
            <NewsContentLine/>

        </ContainerCenter>
    );
};
