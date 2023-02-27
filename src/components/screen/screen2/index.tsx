import {ContainerCenter} from "@/styles/globals";
import {Screen2Wrap, SecMember, SecIntroduce} from "./styles";

export default function Screen2() {

    return (
        <Screen2Wrap>
            <ContainerCenter className={'container'}>
                <div className={'content'}>
                    <SecMember>
                        <img src={'/static/img/member.png'}/>
                    </SecMember>
                    <SecIntroduce>
                        <p className={'p1'}>Universal Web3<br/>Account Protocol</p>
                        <p className={'p2'}>Benefit from a unified and standardized approach to managing your digital
                            assets and identities across multiple blockchain networks.Enjoy enhanced security and
                            interoperability features that are built into the Zecrey 2.0 protocol.</p>
                    </SecIntroduce>
                </div>
            </ContainerCenter>
        </Screen2Wrap>
    );
};
