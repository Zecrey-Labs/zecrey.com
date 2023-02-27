import {DOCS_URL, DOWNLOAD_URL, EXPLORER_URL, GOOGLE_PLAY, INFO_URL} from "@/config";
import {ContainerCenter} from "@/styles/globals";
import {
    HeaderLink,
    HeaderWrap,
    HeaderContent,
    HeaderSubMenu,
    HeaderLinkMob,
    MobMenuContent
} from "@/components/layout/header/styles";
import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {MOBILE_WIDTH} from "@/config";
import Image from "next/image";
import EleA from "@/components/elea";
import MenuContact from "@/components/layout/contact";

const navList = [
    {label: "Docs", url: DOCS_URL},
    {label: "Blog", url: ""},
    {
        label: "Ecosystem",
        url: "",
        sub: [
            {
                label: "Mobile",
                url: GOOGLE_PLAY,
            },
            {
                label: "Extension",
                url: DOWNLOAD_URL,
            },
            {
                label: "Explorer",
                url: EXPLORER_URL,
            },
        ]
    },
    {
        label: "Product",
        url: "",
        sub: [
            {
                label: "Zecrey 2.0",
                url: "",
            },
            {
                label: "Zecrey Legend",
                url: "",
            },
        ]
    },
];

export default function Header() {
    const isMobile = useMediaQuery({maxWidth: MOBILE_WIDTH});
    const [linkIndex, setLinkIndex] = useState(-1);
    const [scrollTop, setScrollTop] = useState(0);
    const [mobMenuOpen, setMobMenuOpen] = useState(false);
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
        <>
            <HeaderWrap
                style={{
                    background: `rgba(255, 255, 255, ${getCurrentStyleNum(gradientBackground, scrollTop)})`,
                    border: `1px solid rgba(0, 0, 0, ${getCurrentStyleNum(gradientBorder, scrollTop)})`,
                    backdropFilter: `blur(${getCurrentStyleNum(backdropFilter, scrollTop)}px)`,
                }}
                className={`${isMobile && "headerWrapMobile"}`}
            >
                <ContainerCenter className={'headerContainer'}>
                    <HeaderContent>
                        <Image priority={true} width={131} height={46} alt={''} src={"/static/img/logo.png"}/>
                        {
                            !isMobile
                                ?
                                <HeaderLink>
                                    {navList.map((item, index) => (
                                        <div
                                            className={`item ${item.sub && "itemSub"} ${index === linkIndex && "active"}`}
                                            key={index}
                                        >
                                            <EleA
                                                href={item.url}
                                            >
                                                {item.label}
                                                {
                                                    item.sub && <img className={'arrow arrowDefault'}
                                                                     src={"/static/svg/arrowHover.svg"}/>
                                                }
                                                {
                                                    item.sub &&
                                                    <img className={'arrow arrowHover'} src={"/static/svg/arrow.svg"}/>
                                                }
                                            </EleA>
                                            <span></span>
                                            {
                                                item.sub &&
                                                <HeaderSubMenu className={'subMenuWrap'}>
                                                    {
                                                        item.sub.map((item, index) => (
                                                            <EleA
                                                                key={index}
                                                                href={item.url}
                                                            >
                                                                {item.label}
                                                            </EleA>
                                                        ))
                                                    }
                                                </HeaderSubMenu>
                                            }
                                        </div>
                                    ))}
                                </HeaderLink>
                                :
                                <HeaderLinkMob onClick={() => {
                                    setMobMenuOpen(!mobMenuOpen);
                                }} className={`${mobMenuOpen && "open"}`}>
                                    <div className={'subIco'}>
                                        <Image priority={true} width={18} height={12} alt={''}
                                               src={"/static/svg/mobMenuIco.svg"}/>
                                    </div>
                                </HeaderLinkMob>
                        }
                    </HeaderContent>

                </ContainerCenter>
            </HeaderWrap>
            {
                isMobile
                &&
                <MobMenuContent style={{
                    height: mobMenuOpen ? "342px" : 0,
                    border: mobMenuOpen ? "1px solid rgba(0,0,0,0.05)" : "0px solid rgba(0,0,0,0.05)"
                }}>
                  <ul>
                      {navList.map((item, index) => (
                          <li key={index}>
                              <EleA
                                  href={item.url}
                              >
                                  {item.label}
                              </EleA>
                              {
                                  item.sub &&
                                  <div className={'subMenuWrap'}>
                                      {
                                          item.sub.map((item, index) => (
                                              <EleA
                                                  key={index}
                                                  href={item.url}
                                              >
                                                  {item.label}
                                              </EleA>
                                          ))
                                      }
                                  </div>
                              }
                          </li>
                      ))}
                  </ul>
                  <MenuContact/>
                </MobMenuContent>
            }
        </>

    );
};
