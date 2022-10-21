import { TextWrap } from "components/legend/styles";
import Img from "icons/zero-private-bg.svg";
import { PrivateWrap } from "./styles";

const Private = () => {
  return (
    <PrivateWrap>
      <TextWrap style={{ padding: "8rem 0 0 4rem" }}>
        <div className="main">Privacy by Default.</div>
        <div className="sub">
          All transactions are private on Zero by default. Zero conceals each
          transaction amount to protect your privacy.
        </div>
        <button disabled>Learn More</button>
        {/* <a href="#" target="_blank" rel="noreferrer">
          Learn More
        </a> */}
      </TextWrap>
      <Img className="img" />
    </PrivateWrap>
  );
};

export default Private;
