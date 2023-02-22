import {APP_URL, EXPLORER_URL, INFO_URL} from "@/config";
import {ContainerCenter} from "@/styles/globals";
import {HeaderLink, HeaderWrap, HeaderContent} from "@/components/layout/header/styles";
import {useEffect, useState} from "react";
import classNames from "classnames";
import Image from "next/image";
// import { useRouter } from "snext/router";

const navList = [
    {label: "Home", url: "/"},
    {label: "App", url: APP_URL, disabled: true},
    {label: "Explorer", url: EXPLORER_URL},
    {label: "Info", url: INFO_URL, disabled: true},
    {label: "NFT"},
];

export default function Header() {
    const [linkIndex, setLinkIndex] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const gradientStartDistance = 0;
    const gradientEndDistance = 600;
    const gradientBackground = {
        min: 0,
        max: 0.75
    }
    const gradientBorder = {
        min: 0,
        max: 0.05
    }
    const backdropFilter = {
        min: 0,
        max: 40
    }

    const getCurrentStyleNum = (
        iGradient: {
            min: number,
            max: number
        }, scrollTop: number) => {
        let currentScrollTop = scrollTop > gradientEndDistance ? gradientEndDistance : scrollTop;
        return (iGradient.max - iGradient.min) / (gradientEndDistance - gradientStartDistance) * (currentScrollTop - gradientStartDistance)
    }

    const scrollRun = (e: any) => {
        setScrollTop(e.srcElement.documentElement.scrollTop)
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollRun, true)
    }, [])

    return (
        <HeaderWrap
            style={{
                background: `rgba(255, 255, 255, ${getCurrentStyleNum(gradientBackground, scrollTop)})`,
                border: `1px solid rgba(0, 0, 0, ${getCurrentStyleNum(gradientBorder, scrollTop)})`,
                backdropFilter: `blur(${getCurrentStyleNum(backdropFilter, scrollTop)}px)`,
            }}>
            <ContainerCenter>
                <HeaderContent>
                    <Image priority={true} width={131} height={46} alt={''} src={"/static/img/logo.png"}/>
                    <HeaderLink>
                        {navList.map((item, index) => (
                            <div
                                className={classNames([{
                                    active: index === linkIndex
                                }])}
                                key={index}
                            >
                                <a
                                    href={item.disabled ? "" : item.url}
                                    target="_blank"
                                    style={{cursor: item.disabled ? "not-allowed" : "pointer"}}
                                >
                                    {item.label}
                                </a>
                                <span></span>
                            </div>
                        ))}
                    </HeaderLink>
                </HeaderContent>

            </ContainerCenter>
        </HeaderWrap>
    );
};
