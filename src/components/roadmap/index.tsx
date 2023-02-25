import {ContainerCenter} from "@/styles/globals";
import SecTitle from "@/components/title";
import {BackersDotStyle, BackersStageStyle, BackersStyle} from "./styles";

const stepArr = [
    {
        time: "2022 Q3",
        description: "Zecrey App Chain Mainnet<br />Private Payment Integration"
    },
    {
        time: "2022 Q4",
        description: "Zecrey Legend Testnet Phase I"
    },
    {
        time: "2023 Q1",
        description: "Zecrey Legend Testnet Phase II <br />Game SDK Release"
    },
    {
        time: "2023 Q2",
        description: "Zecrey Legend<br />Mainnet Launch"
    },
]

export default function Roadmap() {

    return (
        <BackersStyle>
            <ContainerCenter>
                <SecTitle title={'Roadmap'} description={'Follow us and join our community'} />
                <div className={'content com'}>
                    <div className={'route'}>
                        <img className={'bg'} src={'/static/img/roudmapRoute.png'}/>

                        {
                            stepArr.map((item, index) => (
                                <BackersStageStyle className={`stage stage${index}`} key={index}>
                                    <p className={'p1'}>{item.time}</p>
                                    <p className={'p2'} dangerouslySetInnerHTML={{
                                        __html: item.description
                                    }} />
                                    <BackersDotStyle className={'dot'}>
                                        <div></div>
                                    </BackersDotStyle>
                                </BackersStageStyle>
                            ))
                        }

                    </div>

                </div>
                <div className={'contentMob mob'}>
                    <div className={'route'}>
                        <div className={'bgWrap'}>
                            <img className={'bg'} src={'/static/svg/roadmapRouteMob.svg'} />
                            <BackersDotStyle className={'dot'}>
                                <div></div>
                            </BackersDotStyle>
                        </div>
                        {
                            stepArr.map((item, index) => (
                                <BackersStageStyle className={`stage stage${index}`} key={index}>
                                    <p className={'p1'}>{item.time}</p>
                                    <p className={'p2'} dangerouslySetInnerHTML={{
                                        __html: item.description
                                    }} />
                                </BackersStageStyle>
                            ))
                        }
                    </div>
                </div>
            </ContainerCenter>
        </BackersStyle>
    );
};
