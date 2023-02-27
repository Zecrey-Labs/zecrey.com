import {ContainerCenter} from "@/styles/globals";
import {Screen4Wrap, SecBg, SecIntroduce} from "./styles";
import Button from "@/components/button";

export default function Screen4() {

    return (
        <Screen4Wrap>
            <ContainerCenter className={'container'}>
                <SecBg>
                    <img src={'/static/img/bg3.png'}/>
                </SecBg>
                <div className={'content'}>
                    <SecIntroduce>
                        <p className={'p1'}>Universal access to blockchain</p>
                        <p className={'p2'}>The first zkRollup L2 scaling solution on the BNB chain and NFT engine of
                            Web3 games.It offers instant trading, massive scalability, and low gas fees for minting and
                            trading NFTs without compromising security.</p>
                        <div className={'btn'}>
                            <Button text={"Learn More >"}/>
                        </div>
                    </SecIntroduce>
                </div>
            </ContainerCenter>
        </Screen4Wrap>
    );
};
