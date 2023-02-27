import {ContainerCenter} from "@/styles/globals";
import {Screen3Wrap, SecBg, SecIntroduce} from "./styles";
import Button from "@/components/button";

export default function Screen3() {

    return (
        <Screen3Wrap>
            <ContainerCenter className={'container'}>
                <SecBg>
                    <img src={'/static/img/bg4.png'}/>
                </SecBg>
                <div className={'content'}>
                    <SecIntroduce>
                        <p className={'p1'}>Seamless Interoperability<br/> Across All Blockchains</p>
                        <p className={'p2'}>Use your Zecrey 2.0 account to seamlessly interact with any blockchain
                            network.
                            Take advantage of advanced cross-chain technologies to unlock new possibilities and explore
                            the full potential of the blockchain multiverse.</p>
                    </SecIntroduce>
                </div>
            </ContainerCenter>
        </Screen3Wrap>
    );
};
