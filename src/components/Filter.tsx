import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Fragment, useState } from "react";

interface Props {
  darkMode: boolean;
}

const countryArray = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Filter = ({ darkMode }: Props) => {
  const [filterShow, setFilterShow] = useState<boolean>(false);
  return (
    <div className="z-50 lg:absolute right-6 lg:right-20">
      <div
        onClick={() => setFilterShow(!filterShow)}
        className={`input-shadow flex flex-row justify-between w-[200px] items-center gap-2
        ${darkMode ? "bg-[#2B3844]" : "bg-white"} rounded-[5px]
      px-6 py-[14px] cursor-pointer`}
      >
        <h3
          className={`text-xs lg:text-sm leading-5 font-normal ${
            darkMode ? "text-white" : "text-[#111517]"
          }`}
        >
          Filter by Region
        </h3>
        {filterShow ? (
          <AiOutlineArrowUp
            className={`${
              darkMode ? "text-white" : "text-black"
            } w-[10px] h-[10px] lg:w-3 lg:h-3`}
          />
        ) : (
          <AiOutlineArrowDown
            className={`${
              darkMode ? "text-white" : "text-black"
            } w-[10px] h-[10px] lg:w-3 lg:h-3`}
          />
        )}
      </div>
      {filterShow ? (
        <div
          className={`input-shadow px-6 py-[14px] lg:py-[18px] ${
            darkMode ? "bg-[#2B3844]" : "bg-white"
          } w-[200px] mt-1`}
        >
          <ul className="gap-2 flex flex-col">
            {countryArray.map((country, index) => (
              <Fragment key={index}>
                <li
                  className={`text-xs lg:text-sm leading-4 ${
                    darkMode ? "text-white" : "text-[#111517]"
                  } cursor-pointer`}
                >
                  {country}
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Filter;
