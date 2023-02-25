import {ContainerCenter} from "@/styles/globals";
import {CardIntroStyle, ContactContentStyle} from "./styles";
import {CONTACT_DISCORD, CONTACT_MEDIUM, CONTACT_TELERGRAM, CONTACT_TWITTER} from "@/config";

interface Props {
    ico: string;
    url: string;
}

export function ContactItem(props: Props) {

    return (
        <>
            {
                <CardIntroStyle>
                    <a target={"_blank"} href={props.url}>
                        <img src={props.ico}/>
                    </a>
                </CardIntroStyle>
            }
        </>
    );
};

const contactArr = [
    {
        ico: "/static/svg/menuContactTwitter.svg",
        url: CONTACT_TWITTER
    },
    {
        ico: "/static/svg/menuContactTelegram.svg",
        url: CONTACT_TELERGRAM,
    },
    {
        ico: "/static/svg/menuContactMail.svg",
        url: CONTACT_MEDIUM
    },
    {
        ico: "/static/svg/menuContactDiscord.svg",
        url: CONTACT_DISCORD
    }
]

export default function MenuContact() {

    return (
        <ContainerCenter>
            <ContactContentStyle className={'menuContactContent'}>
                {contactArr.map((item, index) => {
                    return <ContactItem url={item.url} key={index} ico={item.ico}/>
                })}
            </ContactContentStyle>

        </ContainerCenter>
    );
};
