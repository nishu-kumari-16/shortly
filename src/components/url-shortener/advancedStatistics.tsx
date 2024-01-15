import RecognitionIcon from "../../assets/url-shortner/icon-brand-recognition.svg";
import RecordIcon from "../../assets/url-shortner/icon-detailed-records.svg";
import CustomizableIcon from "../../assets/url-shortner/icon-fully-customizable.svg";
import FadeInWhenVisible from "../fade-in-visible";

const Card = ({ title, description, icon }: any) => {
  return (
    <div className="flex flex-col p-8 gap-4 bg-white rounded-md flex-1 relative shadow-md">
      <div className="rounded-[50%] w-[4rem] h-[4rem] p-3 bg-darkViolet absolute  top-[-2rem] flex items-center justify-center ">
        <img src={icon} alt="icon" className="w-[2rem] h-[2rem]" />
      </div>
      <div className="text-verDarkViolet font-extrabold mt-[2rem]">{title}</div>
      <div className="text-darkGray font-medium text-xs leading-5">
        {description}
      </div>
    </div>
  );
};

const statisticsData = [
  {
    title: "Brand Recognition",
    icon: RecognitionIcon,
    description:
      "Boost your brand recognition with each click, Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    title: "Detailed Records",
    icon: RecordIcon,
    description:
      "Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    title: "Fully Customizable",
    icon: CustomizableIcon,
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
  },
];

const AdvancedStatistics = () => {
  return (
    <FadeInWhenVisible>
      <div className="mx-[1.5rem] tablet:mx-[6rem] flex flex-col gap-6 flex-1">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-verDarkViolet font-extrabold text-[2rem] text-center">
            Advanced Statistics
          </div>
          <div className="text-darkGray font-medium text-md text-center w-full tablet:w-[40%]">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </div>
        </div>
        <div className="flex gap-8 justify-center pt-[4rem] relative  self-center flex-col tablet:flex-row">
          <div className="tablet:w-full tablet:h-2 h-[calc(100%-8rem)] w-2 bg-cyan absolute top-[4rem] tablet:top-[60%] tablet:left-auto left-[calc(50%-0.5rem)]"></div>
          {statisticsData?.map((data, index) => (
            <div style={{ marginTop: `${index * 2}rem` }}>
              <Card
                title={data.title}
                description={data.description}
                icon={data.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </FadeInWhenVisible>
  );
};
export default AdvancedStatistics;
