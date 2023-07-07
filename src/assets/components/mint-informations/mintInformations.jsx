export const MintInformations = ({ counter }) => {
  const price = 0.03 * counter;
  return (
    <>
      <p className="flex-col pt-4 text-center text-3xl">MINT UR HOODLRZ !</p>
      <p className="flex-col pt-4 shrink-0 text-center text-2xl">
        TOTAL SUPPLY: 400
      </p>
      <p className="flex-col pt-4 shrink-0 text-center text-2xl">
        {price > 0 ? `PRICE: ${price} e` : "PRICE: 0.03 e"}
      </p>
    </>
  );
};
