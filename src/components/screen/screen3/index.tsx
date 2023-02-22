import {ContainerCenter} from "@/styles/globals";
import {Screen3Wrap, SecMember, SecIntroduce} from "./styles";
import Button from "@/components/button";

export default function Screen3() {

    return (
        <Screen3Wrap>
            <ContainerCenter style={{height: "100%"}} className={'container'}>
                <div className={'content'}>
                    <SecIntroduce>
                        <p className={'p1'}>A senseless full-chain<br/> interactive experience</p>
                        <p className={'p2'}>The first zkRollup L2 scaling solution on the BNB chain and NFT engine of
                            Web3 games.It offers instant trading, massive scalability, and low gas fees for minting and
                            trading NFTs without compromising security.</p>
                        <Button text={"Learn More >"}/>
                    </SecIntroduce>
                    <SecMember>
                        <img src={'/static/img/member.png'}/>
                    </SecMember>
                </div>
            </ContainerCenter>
        </Screen3Wrap>
    );
};
