import {ContainerCenter} from "@/styles/globals";
import {Screen1Wrap, SecIntroduce, SecCardWrap} from "./styles";
import {useEffect, useState} from "react";
import CardIntro from "@/components/card/cardIntro";
import Button from "@/components/button";
import {WHITE_PAPER_URL} from "@/config";

const boxInfoArr = [
    {
        ico: "/static/svg/ico1.svg",
        icoDark: "/static/svg/ico1Dark.svg",
        title: "Unified Web3<br /> Account Protocol",
        description: "A Zero-knowledge based Cross-chain Account Protocol",
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
    const [screenHeight, setScreenHeight] = useState(0)

    useEffect(() => {
        setScreenHeight(Math.min(window.innerHeight, window.innerWidth))
    }, [])

    return (
        <Screen1Wrap style={{height: screenHeight + "px"}}>
            <img className={'bg'} src={'/static/img/bg.png'}/>
            <ContainerCenter>
                <SecIntroduce>
                    <img className={'imgBox'} src={'/static/img/asset1.png'}/>
                    <h2>Unified Web3 Account Protocol</h2>
                    <p>A Zero-knowledge based Cross-chain Account Protocol</p>
                    <div className={'button'}>
                        <Button href={WHITE_PAPER_URL} text={"Zecrey 2.0 Whitepaper"} />
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