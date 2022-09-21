import { ReactNode, useEffect, useRef } from "react";
import { Link, Tip, TipWrap, Trigger, Wrap } from "./styles";
import Dart from "icons/dart-alt.svg";
import classNames from "classnames";

const BubbleButton = (props: {
  children: ReactNode;
  label: string;
  className?: string;
  tip?: string;
  linkLabel?: string;
  link?: string;
  size?: {
    width: string;
    height: string;
    marginLeft?: string;
    marginRight?: string;
  };
}) => {
  const dom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (dom.current) {
        let diff =
          dom.current.getBoundingClientRect().right -
          (document.querySelector("#__next")?.getBoundingClientRect().right ||
            0);
        if (diff > 0) {
          dom.current.style.marginLeft = `calc(-18.25rem - ${diff}px)`;
        }
      }
    };
    handler();
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <Wrap
      className={classNames("bubble-button", props.className)}
      size={props.size}
    >
      {props.tip && (
        <TipWrap ref={dom} className="tip-wrap">
          <Tip className="tip">{props.tip}</Tip>
          {props.link && props.linkLabel && (
            <Link
              href={props.link}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {props.linkLabel} <Dart name="dart-2" />
            </Link>
          )}
        </TipWrap>
      )}
      <Trigger className="trigger" size={props.size}>
        <div className="icon-wrap">{props.children}</div>
        <label>{props.label}</label>
      </Trigger>
    </Wrap>
  );
};

export default BubbleButton;
