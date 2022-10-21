import { vw, CenterFlex, FlatBtn } from "styles/globals";
import classnames from "classnames";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MobileWrap, Brands, BrandsWrap, Wrap } from "./styles";
import { brands } from "./brands";
import Users from "icons/users.svg";
import Dart from "icons/dart-alt.svg";
import CardLayout from "components/common/card-wrap/card-layout";
import Card from "components/common/card-wrap";
import ImgBox from "components/common/img";

const Backers = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default Backers;

function Desktop() {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <Card>
      <Wrap className={classnames({ isShow })}>
        <CardLayout
          title="Backers"
          backgroundIcon={{
            svg: <Users name="users" />,
            size: { width: "31.3rem", height: "24rem" },
          }}
          text={[]}
        >
          <Brands className="brands">
            <BrandsWrap className="brands-wrap">
              {brands.slice(0, 4).map((i, index) => (
                <CenterFlex
                  key={index}
                  className={classnames(...i.classnames, {
                    left: index === 0,
                    right: index === 3,
                  })}
                >
                  <ImgBox
                    src={`/static/brands/${i.src}`}
                    alt=""
                    width={i.width || 0}
                    height={i.height || 0}
                  />
                </CenterFlex>
              ))}
            </BrandsWrap>
            <BrandsWrap className="brands-wrap">
              {brands.slice(4, 8).map((i, index) => (
                <CenterFlex
                  key={index}
                  className={classnames(...i.classnames, {
                    left: index === 0,
                    right: index === 3,
                  })}
                >
                  <ImgBox
                    src={`/static/brands/${i.src}`}
                    alt=""
                    width={i.width || 0}
                    height={i.height || 0}
                  />
                </CenterFlex>
              ))}
            </BrandsWrap>
            <BrandsWrap className="brands-wrap">
              {brands.slice(8, 12).map((i, index) => (
                <CenterFlex
                  key={index}
                  className={classnames(...i.classnames, {
                    left: index === 0,
                    right: index === 3,
                  })}
                >
                  <ImgBox
                    src={`/static/brands/${i.src}`}
                    alt=""
                    width={i.width || 0}
                    height={i.height || 0}
                  />
                </CenterFlex>
              ))}
            </BrandsWrap>
            {!isShow && (
              <BrandsWrap className="brands-wrap">
                {brands.slice(12, 15).map((i, index) => (
                  <CenterFlex
                    key={index}
                    className={classnames(...i.classnames, {
                      left: index === 0,
                      right: index === 3,
                    })}
                  >
                    <ImgBox
                      src={`/static/brands/${i.src}`}
                      alt=""
                      width={i.width || 0}
                      height={i.height || 0}
                    />
                  </CenterFlex>
                ))}
                <CenterFlex>
                  <FlatBtn onClick={() => setIsShow(true)}>
                    View More <Dart name="dart-2" />
                  </FlatBtn>
                </CenterFlex>
              </BrandsWrap>
            )}
            {isShow && (
              <>
                <BrandsWrap className="brands-wrap">
                  {brands.slice(12, 16).map((i, index) => (
                    <CenterFlex
                      key={index}
                      className={classnames(...i.classnames, {
                        left: index === 0,
                        right: index === 3,
                      })}
                    >
                      <ImgBox
                        src={`/static/brands/${i.src}`}
                        alt=""
                        width={i.width || 0}
                        height={i.height || 0}
                      />
                    </CenterFlex>
                  ))}
                </BrandsWrap>
                <BrandsWrap className="brands-wrap">
                  {brands.slice(16, 20).map((i, index) => (
                    <CenterFlex
                      key={index}
                      className={classnames(...i.classnames, {
                        left: index === 0,
                        right: index === 3,
                      })}
                    >
                      <ImgBox
                        src={`/static/brands/${i.src}`}
                        alt=""
                        width={i.width || 0}
                        height={i.height || 0}
                      />
                    </CenterFlex>
                  ))}
                </BrandsWrap>
                <BrandsWrap className="brands-wrap">
                  {brands.slice(20, 24).map((i, index) => (
                    <CenterFlex
                      key={index}
                      className={classnames(...i.classnames, {
                        left: index === 0,
                        right: index === 3,
                      })}
                    >
                      <ImgBox
                        src={`/static/brands/${i.src}`}
                        alt=""
                        width={i.width || 0}
                        height={i.height || 0}
                      />
                    </CenterFlex>
                  ))}
                </BrandsWrap>
                <BrandsWrap className="brands-wrap">
                  {brands.slice(24, 28).map((i, index) => (
                    <CenterFlex
                      key={index}
                      className={classnames(...i.classnames, {
                        left: index === 0,
                        right: index === 3,
                      })}
                    >
                      {!i.src ? null : (
                        <ImgBox
                          src={`/static/brands/${i.src}`}
                          alt=""
                          width={i.width || 0}
                          height={i.height || 0}
                        />
                      )}
                    </CenterFlex>
                  ))}
                </BrandsWrap>
              </>
            )}
          </Brands>
        </CardLayout>
      </Wrap>
    </Card>
  );
}
const Mobile = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <MobileWrap>
      <label className="title-1">Backers</label>
      <div className="grid">
        <div className="grid-1">
          <img src="/static/brands/binance.svg" alt="" />
        </div>
        <div className="grid-2">
          <img src="/static/brands/spartan.svg" alt="" />
        </div>
      </div>
      <div className="grid">
        <div className="grid-1">
          <img
            src="/static/brands/captical.svg"
            alt=""
            style={{ height: vw(25) }}
          />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/shima.svg"
            alt=""
            style={{ height: vw(51), marginRight: vw(14) }}
          />
        </div>
      </div>
      <div className="grid">
        <div className="grid-1">
          <img src="/static/brands/you.svg" alt="" />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/amber.svg"
            alt=""
            style={{ height: vw(14), marginRight: vw(14) }}
          />
        </div>
      </div>
      <div className="grid">
        <div className="grid-1">
          <img
            src="/static/brands/avatvr.svg"
            alt=""
            style={{ height: vw(15) }}
          />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/maplebl.svg"
            alt=""
            style={{ height: vw(23) }}
          />
        </div>
      </div>
      {isShow ? null : (
        <button onClick={() => setIsShow(true)}>
          View More
          <img src="/static/brands/arrow.svg" alt="" />
        </button>
      )}
      <div className={classnames("grid", { hide: !isShow })}>
        <div className="grid-1">
          <img
            src="/static/brands/cmtd.svg"
            alt=""
            style={{ height: vw(24) }}
          />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/sevenx.svg"
            alt=""
            style={{ height: vw(23) }}
          />
        </div>
      </div>
      <div className={classnames("grid", { hide: !isShow })}>
        <div className="grid-1">
          <img
            src="/static/brands/cmccgloba.svg"
            alt=""
            style={{ height: vw(16), marginLeft: vw(6) }}
          />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/bubit.svg"
            alt=""
            style={{ height: vw(25), marginRight: vw(23) }}
          />
        </div>
      </div>
      <div className={classnames("grid", { hide: !isShow })}>
        <div className="grid-1">
          <img
            src="/static/brands/looprlnc.svg"
            alt=""
            style={{ height: vw(25), marginLeft: vw(11) }}
          />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/crasolum.svg"
            alt=""
            style={{ height: vw(18), marginRight: vw(10) }}
          />
        </div>
      </div>
      <div className={classnames("grid", { hide: !isShow })}>
        <div className="grid-1">
          <img
            src="/static/brands/DoraHacksVentures.svg"
            alt=""
            style={{ height: vw(33), marginLeft: vw(10) }}
          />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/block0.svg"
            alt=""
            style={{ height: vw(21), marginRight: vw(21) }}
          />
        </div>
      </div>
      <div className={classnames("grid", { hide: !isShow })}>
        <div className="grid-1">
          <img
            src="/static/brands/cypherpunn.svg"
            alt=""
            style={{ height: vw(30), marginLeft: vw(7) }}
          />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/stratified.png"
            alt=""
            style={{ height: vw(27), marginRight: vw(14) }}
          />
        </div>
      </div>
      <div className={classnames("grid", { hide: !isShow })}>
        <div className="grid-1">
          <img
            src="/static/brands/stake.svg"
            alt=""
            style={{ marginLeft: vw(24) }}
          />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/snz.svg"
            alt=""
            style={{ height: vw(25), marginRight: vw(35) }}
          />
        </div>
      </div>
      <div className={classnames("grid", { hide: !isShow })}>
        <div className="grid-1">
          <img
            src="/static/brands/labs.svg"
            alt=""
            style={{ marginLeft: vw(24) }}
          />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/20.svg"
            alt=""
            style={{ height: vw(21), marginRight: vw(8) }}
          />
        </div>
      </div>
      <div className={classnames("grid", { hide: !isShow })}>
        <div className="grid-1">
          <img
            src="/static/brands/21.svg"
            alt=""
            style={{ height: vw(22), marginLeft: vw(12) }}
          />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/spark.svg"
            alt=""
            style={{ marginRight: vw(12) }}
          />
        </div>
      </div>
      <div className={classnames("grid", { hide: !isShow })}>
        <div className="grid-1">
          <img
            src="/static/brands/mulana.png"
            alt=""
            style={{ height: vw(39), marginLeft: vw(19) }}
          />
        </div>
        <div className="grid-2">
          <img
            src="/static/brands/gate.io.svg"
            alt=""
            style={{ height: vw(39), marginRight: vw(12) }}
          />
        </div>
      </div>
    </MobileWrap>
  );
};
