import LeftChevron from "../../assets/icons/left-chevron.svg";
import RightChevron from "../../assets/icons/right-chevron.svg";
import UpChevron from "../../assets/icons/up-chevron.svg";
import DownChevron from "../../assets/icons/down-chevron.svg";
import Profile from "../../assets/icons/profile.svg";
import SearchIcon from "../../assets/icons/search-black.svg";
import { useState } from "react";
import { dropdownOptions } from "./meta";

const Dropdown = () => {
  return (
    <div className="flex flex-col gap-2 bg-[#282828] rounded-md absolute top-14 w-[245px] right-0 ">
      {dropdownOptions.map((item, index) => (
        <div className="px-5 py-3 flex justify-between">
          <div className="text-md text-[#fff] tracking-[-1.14px] ">
            {item.title}
          </div>
          {item?.icon && <img src={item.icon} alt={item.title} />}
        </div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-6 items-center">
        <div className="flex gap-5 h-fit">
          <img
            src={LeftChevron}
            className="rounded-[50%] p-2 w-[2.5rem] h[2.5rem] hover:bg-[#0A0A0A] cursor-pointer"
            alt="left"
          />
          <img
            src={RightChevron}
            className="rounded-[50%] p-2 w-[2.5rem] h[2.5rem] hover:bg-[#0A0A0A] cursor-pointer"
            alt="right"
          />
        </div>
        <div className="flex rounded-[2.5rem] overflow-hidden bg-white w-[28rem]">
          <img src={SearchIcon} alt="search" className="ml-5" />
          <input
            type="text"
            className="flex outline-none bg-white py-3 px-5 w-full"
            placeholder="Artists, songs, or podcasts"
          />
        </div>
      </div>
      <div
        className="flex h-[2.5rem] bg-[#0A0A0A] rounded-[2rem] gap-2 relative items-center hover:cursor-pointer "
        onClick={() => setExpanded(!expanded)}
      >
        <img src={Profile} className="rounded-[50%]" alt="profile" />
        <div className="text-white text-md font-medium sm:block hidden">
          Kayle
        </div>
        <img
          src={expanded ? UpChevron : DownChevron}
          className="rounded-[50%] pr-2 sm:block hidden"
          alt="chevron"
        />
        {expanded && <Dropdown />}
      </div>
    </div>
  );
};
export default Navbar;
