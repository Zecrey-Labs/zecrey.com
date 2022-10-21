import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { AnimWrap } from "./styles";

const Animation = (props: { data: any; delay?: boolean }) => {
  const dom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dom.current) {
      const animation = lottie.loadAnimation({
        container: dom.current,
        autoplay: props.delay ? false : true,
        loop: true,
        animationData: props.data,
      });
      if (props.delay) {
        setTimeout(() => {
          animation.play();
        }, 2000);
      }
    }
  }, [props.data, props.delay]);

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
