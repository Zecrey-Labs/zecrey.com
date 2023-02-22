import {ContainerCenter} from "@/styles/globals";
import {Screen2Wrap, SecMember, SecIntroduce} from "./styles";
import Button from "@/components/button";

export default function Screen2() {

    return (
        <Screen2Wrap>
            <img className={'bg'} src={'/static/img/bg2.png'}/>
            <ContainerCenter style={{height: "100%"}} className={'container'}>
                <div className={'content'}>
                    <SecMember>
                        <img src={'/static/img/member.png'}/>
                    </SecMember>
                    <SecIntroduce>
                        <p className={'p1'}>Universal Web3<br/>Account Protocol</p>
                        <p className={'p2'}>The first zkRollup L2 scaling solution on the BNB chain and NFT engine of
                            Web3 games.It offers instant trading, massive scalability, and low gas fees for minting and
                            trading NFTs without compromising security.</p>
                        <Button text={"Learn More >"} />
                    </SecIntroduce>
                </div>
            </ContainerCenter>
        </Screen2Wrap>
    );
};
