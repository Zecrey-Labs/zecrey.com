import {ContainerCenter} from "@/styles/globals";
import {Screen1Wrap, SecIntroduce, SecCardWrap} from "./styles";
import CardIntro from "@/components/card/intro/index";
import Button from "@/components/button";
import {WHITE_PAPER_URL} from "@/config";
import {useEffect} from "react";


const boxInfoArr = [
    {
        ico: "/static/svg/ico1.svg",
        icoDark: "/static/svg/ico1Dark.svg",
        title: "Universal Web3<br /> Account Protocol",
        description: "Enjoy enhanced security and interoperability features that are built into the Zecrey 2.0 protocol."
    },
    {
        ico: "/static/svg/ico2.svg",
        icoDark: "/static/svg/ico2Dark.svg",
        title: "Seamless Interoperability Across All Blockchains",
        description: "Use your Zecrey 2.0 account to seamlessly interact with any blockchain network.",
    },
    {
        ico: "/static/svg/ico3.svg",
        icoDark: "/static/svg/ico3Dark.svg",
        title: "Your Gateway to Blockchain Multiverse",
        description: "Zecrey 2.0 is your secure and seamless gateway to the blockchain multiverse.",
    }
]

export default function Screen1() {

    useEffect(() => {
        const arrImg1 = document.querySelectorAll('img[data-src]')
        arrImg1.forEach((item: any) => {
            item.setAttribute('src', item.getAttribute('data-src'));
            item.onload = function () {
                item.removeAttribute('data-src');
            };
        })
    }, [])

    return (
        <Screen1Wrap>
            <img className={'bg com'} data-src={'/static/svg/bg_index.svg'}/>
            <img className={'bg mob'} data-src={'/static/img/bg1.png'}/>
            <ContainerCenter className={"container"}>
                <SecIntroduce>
                    <img className={'imgBox'} data-src={'/static/img/asset1.png'}/>
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
