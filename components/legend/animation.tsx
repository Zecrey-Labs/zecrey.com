import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { AnimWrap } from "./styles";

const Animation = (props: { data: any }) => {
  const dom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dom.current)
      lottie.loadAnimation({
        container: dom.current,
        autoplay: true,
        loop: true,
        animationData: props.data,
      });
  }, [props.data]);

  return (
    <AnimWrap className="move13to0">
      <div
        className="renderer"
        ref={dom}
        style={{ width: "50rem", height: "50rem" }}
      />
    </AnimWrap>
  );
};

export default Animation;
