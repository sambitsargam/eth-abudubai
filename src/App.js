import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { TopNav } from "./Components/TopNav";
import { DonationForm } from "./Components/DonationForm";
import { CoffeesData } from "./Components/CoffeesData";
import { BasicInfo } from "./Components/BasicInfo";

const pwr = {
  id: 31,
  name: "PWR EVM",
  network: "pwr",
  iconUrl:
    "https://evmexplorer.pwrlabs.io/images/pwr_logo-ee7ead8c34f712cf4076044276ccf618.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "pwr",
    symbol: "PWR",
  },
  rpcUrls: {
    public: { http: ["https://evmrpc.pwrlabs.io/"] },
    default: { http: ["https://evmrpc.pwrlabs.io/"] },
  },
  blockExplorers: {
    default: { name: "Blocksout", url: "https://evmexplorer.pwrlabs.io/" },
    etherscan: { name: "Blocksout", url: "https://evmexplorer.pwrlabs.io/" },
  },
  contracts: {
    multicall3: {
      address: "0xa9BD070381aaf9D73f7D20390A297CA4F76c37ec",
      blockCreated: 11_907_934,
    },
  },
  testnet: false,
};

const { chains, provider } = configureChains([pwr], [publicProvider()]);
const { connectors } = getDefaultWallets({
  appName: "CryptoCoffeeCart",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <TopNav />
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 sm:row-span-16">
            <DonationForm />
          </div>
          <div className="col-span-1">
            <BasicInfo/>
          </div>
          <div className="row-span-2 col-span-1">
            <CoffeesData />
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
