import { parseEther } from "viem";
import { useContractWrite, usePrepareContractWrite, useAccount } from "wagmi";
import mintButton from "../../../../public/img/button-mint.png";
import ABI from "../../contracts/HoodlrzABI.json";
import { useEffect } from "react";

export const MintButton = ({ counter, setWeb3Error }) => {
  const { address } = useAccount();
  const price = parseEther("0.03");
  const value = typeof counter == "number" ? price * BigInt(counter) : 0;
  const { config, isError, error } = usePrepareContractWrite({
    address: "0x6054e3483307fe791B2Db6cDD5f8b351Ff6f46E5",
    abi: ABI,
    functionName: "publicMint",
    args: [counter],
    value: value,
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const mint = () => {
    if (address == undefined) {
      setWeb3Error("CONNECT WALLET FIRST");
      return;
    } else {
      setWeb3Error("");
    }
    if (isError) {
      setWeb3Error(() => error.shortMessage);
    } else {
      if (counter > 0) write();
    }
  };

  useEffect(() => {
    setWeb3Error("");
  }, [counter, setWeb3Error]);

  return (
    <>
      <div className="flex justify-center pt-20">
        <button className="flex justify-center w-auto" onClick={() => mint()}>
          <img src={mintButton} className="w-36" />
        </button>
      </div>
      {isLoading && (
        <div className="flex justify-center pt-3">Check Wallet</div>
      )}
      {isSuccess && (
        <div className="flex justify-center pt-3">
          Transaction: {JSON.stringify(data)}
        </div>
      )}
    </>
  );
};
