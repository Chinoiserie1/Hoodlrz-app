// import { Web3Button } from "@web3modal/react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
// import styles from "./buttonConnect.module.css";

export const ButtonConnect = () => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  const displayAddress =
    address != null ? address.slice(0, 4) + " . . . " + address.slice(-2) : "";

  const p = address == undefined ? "CONNECT WALLET" : displayAddress;

  return (
    <div className="flex place-content-end p-3">
      <button
        className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white rounded"
        onClick={() => open()}
      >
        {p}
      </button>
    </div>
  );
};
