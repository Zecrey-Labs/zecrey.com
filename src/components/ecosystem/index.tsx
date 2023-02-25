import {ContainerCenter} from "@/styles/globals";
import SecTitle from "@/components/title";
import {BackersStyle} from "./styles";
import CardDownload from "@/components/card/download";
import {DOWNLOAD_URL, EXPLORER_URL, GOOGLE_PLAY} from "@/config";

const downloadInfoArr = [
    {
        ico: "/static/svg/zecreyExtension.svg",
        title: "Zecrey Extension",
        description: "Chat with Zecrey members, surf in the privacy world.",
        url: DOWNLOAD_URL
    },
    {
        ico: "/static/svg/zecreyMobile.svg",
        title: "Zecrey Mobile",
        description: "Chat with Zecrey members, surf in the privacy world.",
        url: GOOGLE_PLAY
    },
    {
        ico: "/static/svg/zecreyExplorer.svg",
        title: "Zecrey Legend",
        description: "Chat with Zecrey members, surf in the privacy world.",
        url: EXPLORER_URL
    }
]

export default function Ecosystem() {

    return (
        <BackersStyle>
            <ContainerCenter className={'container'}>
                <SecTitle title={'Ecosystem'} description={'Follow us and join our community'} />
                <div className={'content'}>
                    {downloadInfoArr.map((item, index) => {
                        return <CardDownload url={item.url} key={index} index={index} ico={item.ico} title={item.title} description={item.description}
                                      />
                    })}
                </div>
            </ContainerCenter>
        </BackersStyle>
    );
};
