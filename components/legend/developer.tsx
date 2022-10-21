import { DeveloperWarp, TextWrap } from "./styles";
import Img from "icons/legend-developer-bg.svg";

const Developer = () => {
  return (
    <DeveloperWarp>
      <TextWrap>
        <div className="main">Powerful SDK components for Web3 games.</div>
        <div className="sub">
          Simple and easy to use API/SDK, developers could integrate NFT into
          Web3 Games in minutes.
        </div>
        <button>Learn More</button>
        {/* <a href="#" target="_blank" rel="noreferrer">
          Learn More
        </a> */}
      </TextWrap>
      <Img className="img" />
    </DeveloperWarp>
  );
};

export default Developer;
