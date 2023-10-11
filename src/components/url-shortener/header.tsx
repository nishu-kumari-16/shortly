import { useState } from "react";
import Hamburger from "../../assets/url-shortner/hamburger.png";

interface IHeaderProps {
  appLogo?: string;
  appName?: string;
  tabs?: { name: string; onClick?: () => void }[];
  buttons?: JSX.Element[];
  className?: string;
}

const Header = (props: IHeaderProps) => {
  const { appLogo, appName, tabs, className } = props;

  const [isMenuOpen, toggleMenu] = useState<boolean>(false);

  return (
    <div
      className={`${className} px-[1.5rem] tablet:px-[6rem] pt-6 pb-4 flex justify-between fixed top-0 text-veryDarkBlue w-full z-20 bg-white items-center`}
    >
      <div className="flex gap-8 items-center">
        <div className="text-3xl font-semibold flex gap-3">
          {appLogo && <img src={appLogo} alt="img" />}
          <div>{appName}</div>
        </div>
        <div
          className={`${
            isMenuOpen &&
            `!flex absolute top-[5rem] right-6 bg-white rounded-lg shadow-lg p-4 `
          } hidden gap-6 tablet:flex tablet:relative  tablet:flex-row flex-col`}
        >
          {tabs?.map((tab, index) => (
            <div
              className="text-grayishViolet text-sm
             font-medium hover:text-veryDarkBlue cursor-pointer"
              key={index}
            >
              {tab.name}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 tablet:gap-6 items-center">
        <div
          className="text-grayishViolet text-sm
             font-medium hover:text-veryDarkBlue cursor-pointer"
        >
          Login
        </div>
        <button
          className="text-white text-sm bg-cyan border-none rounded-[3rem] px-6 py-3
             font-medium hover: cursor-pointer hover:opacity-[0.8]"
        >
          Sign up
        </button>
      </div>
      <div
        className="tablet:hidden relative hover:cursor-pointer"
        onClick={() => toggleMenu(!isMenuOpen)}
      >
        <img src={Hamburger} alt="click" />
      </div>
    </div>
  );
};
export default Header;
