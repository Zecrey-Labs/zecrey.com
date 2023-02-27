import {ContainerCenter} from "@/styles/globals";
import {Screen1Wrap, SecIntroduce, SecCardWrap} from "./styles";
import CardIntro from "@/components/card/intro/index";
import Button from "@/components/button";
import {WHITE_PAPER_URL} from "@/config";


const boxInfoArr = [
    {
        ico: "/static/svg/ico1.svg",
        icoDark: "/static/svg/ico1Dark.svg",
        title: "Unified Web3<br /> Account Protocol",
        description: "Digital first marketing campaigns to drive awareness and customer acquisition."
    },
    {
        ico: "/static/svg/ico2.svg",
        icoDark: "/static/svg/ico2Dark.svg",
        title: "A senseless full-chain<br/> interactive experience",
        description: "Digital first marketing campaigns to drive awareness and customer acquisition.",
    },
    {
        ico: "/static/svg/ico3.svg",
        icoDark: "/static/svg/ico3Dark.svg",
        title: "Universal access to<br /> blockchain",
        description: "Custom digital systems and tools to enhance business performance.",
    }
]

export default function Screen1() {

    return (
        <Screen1Wrap>
            <img className={'bg com'} src={'/static/svg/bg_index.svg'}/>
            <img className={'bg mob'} src={'/static/img/bg1.png'}/>
            <ContainerCenter className={"container"}>
                <SecIntroduce>
                    <img className={'imgBox'} src={'/static/img/asset1.png'}/>
                    <h2>Unified Web3 Account Protocol</h2>
                    <p>A Zero-knowledge based Cross-chain Account Protocol</p>
                    <div className={'button'}>
                        <Button href={WHITE_PAPER_URL} text={"Zecrey 2.0 Whitepaper"}/>
                    </div>
                </SecIntroduce>
                <SecCardWrap>
                    {boxInfoArr.map((item, index) => {
                        return <CardIntro key={index} ico={item.ico} title={item.title} description={item.description}
                                          icoDark={item.icoDark}/>
                    })}
                </SecCardWrap>
            </ContainerCenter>
        </Screen1Wrap>
    );
};
