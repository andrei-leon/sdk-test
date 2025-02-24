import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import {
  linea,
  polygon,
  polygonZkEvm,
  opBNB,
  manta,
  zkFair,
  scroll,
  gnosis,
  kroma,
  coreDao,
  neonMainnet,
  moonbeam,
  metis,
  cronos,
  rootstock,
  base,
  fantom,
  zora,
  bsc,
  blast,
  mode,
  cyber,
  astarZkEVM,
  blastSepolia,
  lightlinkPhoenix,
  zkSync,
} from "viem/chains";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    linea,
    polygon,
    polygonZkEvm,
    opBNB,
    manta,
    zkFair,
    scroll,
    gnosis,
    kroma,
    coreDao,
    neonMainnet,
    moonbeam,
    metis,
    cronos,
    rootstock,
    base,
    fantom,
    zora,
    bsc,
    blast,
    mode,
    cyber,
    astarZkEVM,
    blastSepolia,
    lightlinkPhoenix,
    zkSync,
  ],
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TonConnectUIProvider
      manifestUrl={`https://telegram.nomis.cc/tonconnect-manifest.json`}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <App />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </TonConnectUIProvider>
  </React.StrictMode>
);
