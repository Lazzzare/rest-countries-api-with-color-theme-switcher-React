import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: (e: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: Props) => {
  return (
    <div
      className={`header-shadow ${
        darkMode ? "bg-[#2B3844] text-white" : "bg-white text-[#111517]"
      } w-full py-[30px] px-4 lg:py-6 lg:px-20 flex justify-between items-center`}
    >
      <h1 className="cursor-pointer text-sm lg:text-2xl font-extrabold leading-5">
        Where in the world?
      </h1>
      <div
        onClick={() => setDarkMode(!darkMode)}
        className="flex flex-row items-center gap-2 cursor-pointer"
      >
        {!darkMode ? (
          <>
            <BsFillMoonStarsFill className="w-4 h-4 lg:w-5 lg:h-5" />
            <h2 className="text-xs lg:text-base font-semibold leading-normal">
              Dark Mode
            </h2>
          </>
        ) : (
          <>
            <BsSun className="w-4 h-4 lg:w-5 lg:h-5" />
            <h2 className="text-xs lg:text-base font-semibold leading-normal">
              Light Mode
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
