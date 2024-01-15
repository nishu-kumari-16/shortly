import HeroImage from "../../assets/url-shortner/illustration-working.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse tablet:flex-row relative py-[8rem]  text-center tablet:text-left gap-4">
      <div className="flex flex-col gap-4 flex-1 justify-center items-center tablet:items-start tablet:pr-0 pr-[1.5rem] pl-[1.5rem] tablet:pl-[6rem]">
        <motion.div
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-veryDarkBlue text-[2rem] tablet:text-[4rem] font-semibold leading-[2.25rem] tablet:leading-[5rem]">
            More than just shorter links
          </div>
          <div className="text-darkGray text-md font-medium w-[80%]">
            Build your brand's recognition and get detailed insights on how your
            links are performing.In a crowded online marketplace, it's not
            enough to exist; you need to shine. Our strategies will enhance your
            online visibility, making it easier for your target audience to find
            you. But visibility is just the beginning. We're here to help you
            make an impact, turning visitors into loyal customers.
          </div>

          <button
            className="text-white text-sm bg-cyan border-none rounded-[3rem] px-6 py-3 w-fit mt-4
             font-medium hover:cursor-pointer hover:opacity-[0.8]"
          >
            Get Started
          </button>
        </motion.div>
      </div>
      <motion.img
        initial={{ opacity: 0, x: "200vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={HeroImage}
        className="flex-1 tablet:mr-[-40%] laptop:mr-[-10%] mr-[0] self-center h-fit"
        alt="img"
      />
    </div>
  );
};
export default HeroSection;
