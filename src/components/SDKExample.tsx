// import { useState } from "react";
// import { createNomisSDK } from "nomis-sdk-evm";
// import { scoresConfig } from "nomis-sdk-evm/dist/config/scoresConfig";
// import { useAccount, useConfig } from "wagmi";

// function SDKExample() {
//   const [mintingData, setMintingData] = useState<any>();
//   const config = useConfig();

//   const [isScoring, setIsScoring] = useState(false);
//   const [isMinting, setIsMinting] = useState(false);
//   const [scoreName, setScoreName] = useState("");
//   const { address } = useAccount();

//   const { getScoreData, getToken, mintScore } = createNomisSDK({
//     address,
//     scoreName,
//     config,
//   });

//   const getScore = async () => {
//     setIsScoring(true);
//     const { mintData } = await getScoreData();

//     console.log(mintData);
//     setMintingData(mintData);
//     setIsScoring(false);
//   };

//   const mint = async () => {
//     console.log(mintingData);
//     if (mintingData) {
//       setIsMinting(true);
//       const tx = await mintScore(mintingData);
//       setIsMinting(false);
//       console.log(tx);
//     }
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-4 gap-2">
//         {Object.keys(scoresConfig).map((name) => (
//           <button key={name} onClick={() => setScoreName(name)}>
//             {name}
//           </button>
//         ))}
//       </div>
//       <div className="my-[20px]">
//         <button onClick={getScore}>getScore</button>
//         <button onClick={mint}>Mint</button>
//       </div>
//       {isScoring && "Scoring.."}
//       {isMinting && "Minting.."}
//     </div>
//   );
// }

// export default SDKExample;
