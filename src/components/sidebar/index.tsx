import AppLogo from "../../assets/icons/app-logo.svg";
import "./index.styles.css";

const Sidebar = ({ menuItems }: any) => {
  return (
    <div className="flex flex-col sm:w-[300px] bg-[#000] relative w-auto">
      <img
        src={AppLogo}
        className="my-7 h-[3rem] sm:w-[10rem] sm:ml-6 ml-3 w-[5rem]"
        alt="app-logo"
      />
      <div className="flex flex-col sm:overflow-y-scroll overflow-y-hidden">
        {menuItems?.map(
          (item: { title: string; icon: string }, index: number) => (
            <div
              className={`flex gap-4 px-4 py-3 rounded-md text-[#fff] items-center mx-2  ${
                item.title ? `hover:bg-[#282828] cursor-pointer ` : ``
              } hover:text-[#31c27c]`}
              key={index}
            >
              {item?.icon && <img src={item.icon} alt={item.title} />}
              <div className="sm:text-md text-sm tracking-[-1.14px] font-medium sm:block hidden ">
                {item.title}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default Sidebar;
