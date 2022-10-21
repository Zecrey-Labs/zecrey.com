import classNames from "classnames";
import ImgBox from "components/common/img";
import { MEDIA } from "config";
import { useMediaQuery } from "react-responsive";
import { BetweenFlex, CenterFlex } from "styles/globals";
import { CONTACT, COPYRIGHT, FOOTER_LINKS, PRIVACY } from "./config";
import { DesktopWrap, MobileWrap } from "./styles";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 });

  return isMobile ? <Mobile /> : <Desktop />;
};

export default Footer;

const Desktop = () => {
  return (
    <DesktopWrap dark>
      <div className="wrap">
        <BetweenFlex className="sub-wrap-1">
          <CenterFlex className="brand-wrap">
            <ImgBox
              src="/static/zecrey-logo-dark.png"
              alt="zecrey"
              className="brand"
              width={209}
              height={75}
            />
          </CenterFlex>
          <div className="link-wrap">
            {FOOTER_LINKS.map((i, index) => (
              <div key={index} className="links">
                <label>{i.label}</label>
                {i.link_items.map((el, idx) => (
                  <a
                    key={idx}
                    className={classNames("link", { disabled: !el.url })}
                    href={el.url || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {el.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </BetweenFlex>
        <BetweenFlex className="sub-wrap-2">
          <div>Zecrey Protocol</div>
          <CenterFlex>
            <a className="privacy" href={PRIVACY.url}>
              {PRIVACY.label}
            </a>
            <div className="divider" />
            <div className="contact">
              Contact: <span>{CONTACT}</span>
            </div>
            <div className="divider" />
            <div className="copyright">Copyright @ {COPYRIGHT}</div>
          </CenterFlex>
        </BetweenFlex>
      </div>
    </DesktopWrap>
  );
};

const Mobile = () => {
  return (
    <MobileWrap dark>
      <div className="wrap">
        <div className="sub-wrap-1">
          {FOOTER_LINKS.map((i, index) => (
            <div
              key={index}
              className={classNames("links", { left: index % 2 === 0 })}
            >
              <label>{i.label}</label>
              {i.link_items.map((el, idx) => (
                <a
                  key={idx}
                  className={classNames("link", { disabled: !el.url })}
                  href={el.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  {el.label}
                </a>
              ))}
            </div>
          ))}
          <div className="links">
            <label>Contact</label>
            <span>{CONTACT}</span>
            <a
              className="link"
              href={PRIVACY.url}
              target="_blank"
              rel="noreferrer"
            >
              {PRIVACY.label}
            </a>
          </div>
        </div>
        <CenterFlex className="sub-wrap-2">
          {MEDIA.map((i, index) => (
            <a
              className={i.type}
              key={index}
              href={i.url}
              target="_blank"
              rel="noreferrer"
            >
              {i.icon}
            </a>
          ))}
        </CenterFlex>
      </div>
    </MobileWrap>
  );
};
