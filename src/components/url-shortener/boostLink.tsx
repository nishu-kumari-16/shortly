import BoostLinkImage from "../../assets/url-shortner/bg-boost-desktop.svg";

const BoostLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[15.625rem] gap-6 relative bg-darkViolet ">
      <div className="text-white font-extrabold text-[2rem] z-10 text-center">
        Boost your links today
      </div>
      <button
        className="text-white text-sm bg-cyan border-none rounded-[3rem] px-10 py-3
             font-medium hover: cursor-pointer hover:opacity-[0.8] z-10"
      >
        Get Started
      </button>
      <img
        src={BoostLinkImage}
        alt="boostLink"
        className="absolute top-0 left-0 bottom-0 right-0 h-full w-full"
      />
    </div>
  );
};
export default BoostLinks;
