export const Background = ({ children }) => {
  return (
    <div>
      <div className="bg-[url('/img/background.png')] bg-no-repeat bg-cover h-screen w-screen">
        {children}
      </div>
    </div>
  );
};
