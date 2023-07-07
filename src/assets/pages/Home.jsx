import { useState } from "react";
import { ButtonConnect } from "../components/button-connect-wallet/ButtonConnect";
import { Perso } from "../components/perso/Perso";
import { MintInformations } from "../components/mint-informations/mintInformations";
import { MintCounter } from "../components/mint-counter/MintCounter";
import { MintButton } from "../components/mint-button/MintButton";
import "../styles/home.css";

export const Home = () => {
  const [counter, setCounter] = useState(1);
  const [web3Error, setWeb3Error] = useState("");

  const incrementCounter = () => setCounter((current) => current + 1);

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter((current) => current - 1);
    }
  };

  return (
    <div className="flex-col h-screen">
      <ButtonConnect />
      <div className="lg:flex lg:pt-20 lg:relative lg:h-2/3">
        <Perso />
        <div className="flex-col pt-4 lg:absolute lg:end-52 lg:pt-20 xl:end-96 xl:pt-28">
          <MintInformations counter={counter} />
          <MintCounter
            counter={counter}
            incrementCounter={incrementCounter}
            decrementCounter={decrementCounter}
          />
          <MintButton counter={counter} setWeb3Error={setWeb3Error} />
        </div>
      </div>
      <div className="flex justify-center lg:pt-8 xl-pt-16">
        {web3Error != "" && (
          <div className="flex pt-4 p-4 lg:text-lg">{web3Error}</div>
        )}
      </div>
    </div>
  );
};
