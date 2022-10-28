import classNames from "classnames";
import { ReactNode, useState } from "react";
import { FlatBtn } from "styles/globals";
import { Content, Indicator, Labels } from "./styles";

const Slider = (props: { items: { label: string; img: ReactNode }[] }) => {
  const [page, setPage] = useState(0);

  return (
    <>
      <Labels className="labels move13to0">
        {props.items
          .map((i) => i.label)
          .map((i, index) => (
            <FlatBtn
              key={index}
              className={classNames({ ac: page === index })}
              onClick={() => setPage(index)}
            >
              {i}
            </FlatBtn>
          ))}
        <Indicator className="indicator" index={page} />
      </Labels>
      <Content className="contents move13to0">
        {props.items
          .map((i) => i.img)
          .map((i, index) => (
            <div
              className={classNames("content-wrap", {
                ac: page === index,
                "be-left": page > index,
                "be-right": page < index,
              })}
              key={index}
            >
              {i}
            </div>
          ))}
      </Content>
    </>
  );
};

export default Slider;

export const MobileSlider = (props: {
  items: { label: string; img: ReactNode }[];
}) => {
  const [page, setPage] = useState(0);
  return (
    <>
      <Labels className="labels mobile">
        {props.items
          .map((i) => i.label)
          .map((i, index) => (
            <FlatBtn
              key={index}
              className={classNames({ ac: page === index })}
              onClick={() => setPage(index)}
            >
              {i}
            </FlatBtn>
          ))}
        {/* <Indicator className="indicator mobile" index={page} /> */}
      </Labels>
      <Content className="contents mobile">
        {props.items
          .map((i) => i.img)
          .map((i, index) => (
            <div
              className={classNames("content-wrap", {
                ac: page === index,
                "be-left": page > index,
                "be-right": page < index,
              })}
              key={index}
            >
              {i}
            </div>
          ))}
      </Content>
    </>
  );
};
