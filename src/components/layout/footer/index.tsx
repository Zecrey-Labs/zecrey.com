import {ContainerCenter} from "@/styles/globals";
import {FooterWrap, FooterContent, FooterLink, FooterLine, FooterBottom} from "./styles";
import Image from "next/image";
import {
    GOOGLE_PLAY,
    EXPLORER_URL,
    GITHUB_URL,
    MEDIUM_URL,
    WHITE_PAPER_URL,
    DOCS_URL,
    DOWNLOAD_URL,
    MOBILE_WIDTH,
    MAIN_ADDRESS
} from "@/config";
import {useMediaQuery} from "react-responsive";
import MenuContact from "@/components/layout/contact";

const linkArr = [
    {
        name: "Apps",
        arr: [
            {
                name: "Zecrey Wallet",
                url: DOWNLOAD_URL
            },
            {
                name: "Web App",
                url: "",
            }
            ,
            {
                name: "Zecrey Mobile",
                url: GOOGLE_PLAY
            }
        ]
    },
    {
        name: "Explorer",
        arr: [
            {
                name: "Blockchain Explorer",
                url: EXPLORER_URL
            },
            {
                name: "Info Explorer",
                url: ""
            },
        ]
    },
    {
        name: "Development",
        arr: [
            {
                name: "GitHub",
                url: GITHUB_URL
            },
            {
                name: "Medium",
                url: MEDIUM_URL
            },
        ]
    },
    {
        name: "Papers",
        arr: [
            {
                name: "White Paper",
                url: WHITE_PAPER_URL
            },
            {
                name: "Docs",
                url: DOCS_URL
            },
        ]
    }
]

export default function Footer() {
    const isMobile = useMediaQuery({maxWidth: MOBILE_WIDTH});

    return (
        <FooterWrap>
            <ContainerCenter className={'container'}>
                <FooterContent>
                    {
                        !isMobile &&
                        <Image priority={true} width={210} height={74} alt={''} src={"/static/img/logo.png"}/>
                    }

                    <FooterLink>
                        {linkArr.map((item, index) => (
                            <div className={'linkItem'} key={index}>
                                <p className={'title'}>{item.name}</p>
                                {
                                    item.arr.map((item, index1) => (
                                        <p className={'description'} key={index1}>
                                            <a
                                                target={item.url !== "" ? "_blank" : "_self"}
                                                href={item.url !== "" ? item.url : "javascript:void(0);"}
                                                style={{
                                                    cursor: item.url !== "" ? "pointer" : "not-allowed"
                                                }}
                                            >
                                                {item.name}
                                            </a>
                                        </p>
                                    ))
                                }
                            </div>
                        ))}
                    </FooterLink>
                </FooterContent>
                <FooterLine/>
                {
                    !isMobile ?
                        <FooterBottom>
                            <div className={'l'}>Zecrey Protocol</div>
                            <div className={'r'}>
                                <span>Privacy Policy</span>
                                <span className={'verticalLine'}>|</span>
                                <span>Contact: </span>
                                <a href={`mailto:${MAIN_ADDRESS}`} className={'s1'}>{MAIN_ADDRESS}</a>
                                <span className={'verticalLine'}>|</span>
                                <span className={'s2'}>Copyright © 2023 Zecrey. All rights reserved.</span>
                            </div>
                        </FooterBottom>
                        :
                        <MenuContact/>
                }
            </ContainerCenter>
        </FooterWrap>
    );
};
