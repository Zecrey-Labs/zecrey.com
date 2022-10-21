import { NftMarketWrap, TextWrap } from "./styles";
import Img1 from "icons/NFT-1.svg";
import Img2 from "icons/NFT-2.svg";
import Img3 from "icons/NFT-3.svg";

const NftMarket = () => {
  return (
    <NftMarketWrap>
      <TextWrap>
        <div className="main">Create and own thousands of NFTs</div>
        <div className="sub">
          There are thousands of NFTs to explore, and in the NFT Marketplace
          based on the Zecrey Legend system, you can create, buy, and sell
          different NFTs.
        </div>
        <button disabled>Explore {">"}</button>
        {/* <a
          href="https://nft-marketplace-frontend-delta.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Explore {">"}
        </a> */}
      </TextWrap>
      <Img1 className="img img-1" />
      <Img2 className="img img-2" />
      <Img3 className="img img-3" />
    </NftMarketWrap>
  );
};

export default NftMarket;
