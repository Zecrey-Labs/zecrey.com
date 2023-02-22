import {ContainerCenter} from "@/styles/globals";
import SecTitle from "@/components/title";
import {BackersStyle} from "./styles";

export default function Backers() {

    return (
        <BackersStyle>
            <ContainerCenter>
                <SecTitle title={'Backers'} description={'Follow us and join our community'} />
                <img src={'/static/img/backersLogos.png'}/>
            </ContainerCenter>
        </BackersStyle>
    );
};
