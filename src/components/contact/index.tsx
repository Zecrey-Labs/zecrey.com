import {ContainerCenter} from "@/styles/globals";
import {CardIntroStyle, ContactContentStyle, ContactWrap} from "./styles";
import {CONTACT_DISCORD, CONTACT_MEDIUM, CONTACT_TELERGRAM, CONTACT_TWITTER, MOBILE_WIDTH} from "@/config";
import {useMediaQuery} from "react-responsive";

interface Props {
    ico: string;
    icoDark: string;
    title: string;
    description: string;
    url: string;
}

export function ContactItem(props: Props) {
    const isMobile = useMediaQuery({maxWidth: MOBILE_WIDTH});

    return (
        <CardIntroStyle>
            <a target={"_blank"} href={props.url}>
                <img className={'light'} src={props.ico}/>
                <img className={'dark'} src={props.icoDark}/>
                <p className={'title'} dangerouslySetInnerHTML={{
                    __html: props.title
                }}/>
                <p className={'description'}>
                    {props.description}
                </p>
            </a>
        </CardIntroStyle>
    );
};

const contactArr = [
    {
        ico: "/static/svg/discord.svg",
        icoDark: "/static/svg/discordDark.svg",
        title: "Discord",
        description: "Chat with Zecrey members, surf in the privacy world.",
        url: CONTACT_DISCORD
    },
    {
        ico: "/static/svg/telegram.svg",
        icoDark: "/static/svg/telegramDark.svg",
        title: "Telegram",
        description: "Join Zecrey community for discussion.",
        url: CONTACT_TELERGRAM,
    },
    {
        ico: "/static/svg/twitter.svg",
        icoDark: "/static/svg/twitterDark.svg",
        title: "Twitter",
        description: "Follow @zecreyprotocol for latest annoucements.",
        url: CONTACT_TWITTER
    },
    {
        ico: "/static/svg/medium.svg",
        icoDark: "/static/svg/mediumDark.svg",
        title: "Medium",
        description: "Learn Zecrey news, progress and technological paper.",
        url: CONTACT_MEDIUM
    }
]

export default function Contact() {

    return (
        <ContactWrap>
            <ContainerCenter className={'container'}>
                <ContactContentStyle>
                    {contactArr.map((item, index) => {
                        return <ContactItem url={item.url} key={index} ico={item.ico} title={item.title}
                                            description={item.description}
                                            icoDark={item.icoDark}/>
                    })}
                </ContactContentStyle>

            </ContainerCenter>
        </ContactWrap>
    );
};
