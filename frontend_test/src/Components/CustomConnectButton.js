import React from "react";
import { ConnectButton } from "@particle-network/connect-react-ui";
import "@particle-network/connect-react-ui/dist/index.css";

export default function CustomConnectButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        openChainModal,
        accountLoading,
      }) => {
        return (
          <div>
            {!account && (
              <button onClick={openConnectModal} disabled={!!account}>
                Connect Wallet
              </button>
            )}
            {account && (
              <div className="ConnectButton__options">
                <button onClick={openAccountModal} disabled={!account}>
                  Open Account
                </button>
                <button onClick={openChainModal} disabled={!account}>
                  Open Switch Network
                </button>
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
