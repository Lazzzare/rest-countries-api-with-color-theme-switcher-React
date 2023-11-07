import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  darkMode: boolean;
}

const Input = ({ darkMode }: Props) => {
  return (
    <div>
      <div
        className={`input-shadow w-full flex flex-row items-center gap-[26px] pl-8 py-4 rounded-[5px] 
        ${darkMode ? "bg-[#2B3844]" : "bg-white"}`}
      >
        <AiOutlineSearch
          className={`w-4 h-4 ${darkMode ? "text-white" : ""}`}
        />
        <input
          type="text"
          placeholder="Search for a country…"
          className={`outline-none w-full ${
            darkMode ? "bg-[#2B3844] text-white" : "bg-white text-[#C4C4C4]"
          }`}
        />
      </div>
    </div>
  );
};

export default Input;
