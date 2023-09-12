"use client";

import { handleConnect, isConnected } from "@/lib/web3";
import { useState, useEffect } from "react";

const WalletConnectButton = () => {
  const [wallet, setWallet] = useState<string | null>();

  useEffect(() => {
    (async function () {
      const walletAddress: string | null = await isConnected();
      setWallet(walletAddress);
    })();
  }, []);

  return (
    <button
      className="button"
      onClick={async () => {
        await handleConnect(setWallet);
      }}
    >
      {wallet
        ? wallet.substring(0, 4) + "..." + wallet.substring(5, 9)
        : "Connect Wallet"}
    </button>
  );
};

export default WalletConnectButton;
