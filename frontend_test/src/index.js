import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ModalProvider } from "@particle-network/connect-react-ui"; // @particle-network/connectkit to use Auth Core
import { WalletEntryPosition } from "@particle-network/auth";
import { Ethereum, ScrollSepolia } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connect";

const root = ReactDOM.createRoot(document.getElementById("root"));
const projectId = process.env.REACT_APP_PROJECT_ID;
const clientKey = process.env.REACT_APP_CLIENT_KEY;
const appId = process.env.REACT_APP_APP_ID;

root.render(
  <React.StrictMode>
    <ModalProvider
      options={{
        projectId: projectId,
        clientKey: clientKey,
        appId: appId,
        chains: [Ethereum, ScrollSepolia],
        particleWalletEntry: {
          //optional: particle wallet config
          displayWalletEntry: true, //display wallet button when connect particle success.
          defaultWalletEntryPosition: WalletEntryPosition.BR,
          supportChains: [Ethereum, ScrollSepolia],
          customStyle: {}, //optional: custom wallet style
        },
        securityAccount: {
          //optional: particle security account config
          //prompt set payment password. 0: None, 1: Once(default), 2: Always
          promptSettingWhenSign: 1,
          //prompt set master password. 0: None(default), 1: Once, 2: Always
          promptMasterPasswordSettingWhenLogin: 1,
        },
        wallets: evmWallets({
          projectId: "walletconnect projectId", //replace with walletconnect projectId
          showQrModal: false,
        }),
      }}
      theme={"auto"}
      language={"en"} //optional:localize, default en
      walletSort={["Particle Auth", "Wallet"]} //optional:walelt order
      particleAuthSort={[
        //optional:display particle auth items and order
        "email",
        "phone",
        "google",
        "apple",
        "facebook",
      ]}
    >
      <App />
    </ModalProvider>
  </React.StrictMode>
);
