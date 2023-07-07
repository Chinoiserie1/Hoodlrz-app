import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";

const chains = [mainnet, goerli];
const projectId = import.meta.env.VITE_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const WalletConnect = ({ children }) => {
  return (
    <div>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={
          {
            // "--w3m-font-family": "Roboto, sans-serif",
            // "--w3m-accent-color": "#242424",
            // "--w3m-overlay-background-color": "242424",
          }
        }
      />
    </div>
  );
};
