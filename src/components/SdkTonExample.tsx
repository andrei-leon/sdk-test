import { useTonAddress } from "@tonconnect/ui-react";
import { getScoreData, isScoreHolder, mintScore } from "nomis-sdk";
import { useState } from "react";

function SDKTonExample() {
  const [mintingData, setMintingData] = useState<any>();
  const address = useTonAddress(true);

  const [isScoring, setIsScoring] = useState(false);
  const [isMinting, setIsMinting] = useState(false);

  const getScore = async () => {
    setIsScoring(true);
    const { mintData } = await getScoreData({ address });

    console.log(mintData);
    setMintingData(mintData);
    setIsScoring(false);
  };

  const mint = async () => {
    console.log(mintingData);
    if (mintingData) {
      setIsMinting(true);
      const tx = await mintScore(mintingData);
      setIsMinting(false);
      console.log(tx);
    }
  };

  return (
    <div>
      <div className="my-[20px]">
        <button onClick={getScore}>getScore</button>
        <button onClick={mint}>Mint</button>
      </div>
      {isScoring && "Scoring.."}
      {isMinting && "Minting.."}
    </div>
  );
}

export default SDKTonExample;
