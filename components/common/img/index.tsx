import Image from "next/image";
import { Wrap } from "./styles";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fit?: "contain" | "cover";
  bg?: boolean;
  priority?: boolean;
}
const ImgBox = (props: Props) => {
  return (
    <Wrap
      className={`img-box ${props.className}`}
      width={props.width || 40}
      height={props.height || 40}
    >
      {props.bg && !props.src ? <div id="img-bg" /> : null}
      {!props.src ? null : ['""', "-"].includes(props.src) ? null : (
        <Image
          src={props.src}
          alt={props.alt}
          layout="fill"
          objectFit={props.fit || "cover"}
          priority={props.priority}
        />
      )}
    </Wrap>
  );
};

export default ImgBox;
