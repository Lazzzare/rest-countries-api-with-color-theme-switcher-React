import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
import { Country } from "./DataTypes";

interface Props {
  darkMode: boolean;
  countries: Country[];
  search: string;
  setSearch: (search: string) => void;
}

const Input = ({ darkMode, countries, search, setSearch }: Props) => {
  const countriesName = countries.filter((item) =>
    item.name.official.includes(search)
  );
  console.log(countriesName);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 3, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div
        className={`input-shadow w-full flex flex-row items-center gap-[26px] pl-8 py-4 rounded-[5px]
        ${darkMode ? "bg-[#2B3844]" : "bg-white"}`}
      >
        <AiOutlineSearch
          className={`w-4 h-4 lg:w-6 lg:h-6 ${darkMode ? "text-white" : ""}`}
        />
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search for a country…"
          className={`outline-none w-full ${
            darkMode ? "bg-[#2B3844] text-white" : "bg-white text-[#2B3844]"
          }`}
        />
      </div>
    </motion.div>
  );
};

export default Input;
