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
                        <p className={'p1'}>Your Gateway to <br/>Blockchain Multiverse</p>
                        <p className={'p2'}>Zecrey 2.0 is your secure and seamless gateway to the blockchain multiverse.
                            Connect with millions of users and enjoy seamless secure interactions across all chains,
                            without the need for multiple wallets or technical configurations.</p>
                    </SecIntroduce>
                </div>
            </ContainerCenter>
        </Screen4Wrap>
    );
};
