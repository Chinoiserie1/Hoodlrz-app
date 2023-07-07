import blockButton from "../../../../public/img/block-button-supply.png";

export const MintCounter = ({
  counter,
  incrementCounter,
  decrementCounter,
}) => {
  const formatCounter = (value) => {
    if (value < 10) return "00" + value;
    if (value < 100) return "0" + value;
    return value;
  };

  return (
    <>
      <div className="flex pt-4 justify-center">
        <div className="relative w-44">
          <img src={blockButton} className="flex absolute shrink-0 w-44" />
          <button
            className="absolute right-2 -top-2 text-6xl"
            onClick={() => incrementCounter()}
          >
            +
          </button>
          <button
            className="absolute left-2 -top-2 text-6xl"
            onClick={() => decrementCounter()}
          >
            -
          </button>
          <p className="absolute text-3xl right-16 top-2">
            {formatCounter(counter)}
          </p>
        </div>
      </div>
    </>
  );
};
