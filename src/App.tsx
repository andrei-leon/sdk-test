import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { useState } from "react";
import SDKTonExample from "./components/SdkTonExample";

enum EWalletType {
  "evm",
  "ton",
}

function App() {
  const [walletType, setWalletType] = useState<EWalletType | null>(null);
  const [TonConnectUi] = useTonConnectUI();
  const connectTonWallet = () => TonConnectUi.openModal();
  const disconnectWallet = () => TonConnectUi.disconnect();

  return (
    <div className="h-full">
      {walletType ? (
        <div className="flex gap-2 mb-5">
          <button onClick={() => setWalletType(EWalletType.evm)}>
            Connect EVM Wallet
          </button>
          <button onClick={() => setWalletType(EWalletType.ton)}>
            Connect Ton Wallet
          </button>
        </div>
      ) : walletType === EWalletType.evm ? (
        <>
          <ConnectButton />
          {/* <SDKExample /> */}
        </>
      ) : (
        <>
          <button
            onClick={
              TonConnectUi.connected ? disconnectWallet : connectTonWallet
            }
          >
            {TonConnectUi.connected ? "Disconnect Ton" : "Connect Ton wallet"}
          </button>
          <SDKTonExample />
        </>
      )}
    </div>
  );
}

export default App;
