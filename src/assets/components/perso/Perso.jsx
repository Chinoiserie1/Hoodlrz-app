import gif from "../../../../public/img/Hoodlrz.gif";

export const Perso = () => {
  return (
    <div className="flex justify-center lg:content-center lg:justify-start lg:absolute">
      <img
        src={gif}
        className="flex w-72 pt-2 lg:w-5/12 lg:pt-20 lg:pl-24 2xl:pt-40px 2xl:w-7/12"
      />
    </div>
  );
};
