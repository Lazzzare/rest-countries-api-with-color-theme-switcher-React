import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div
      className={`w-full h-screen ${
        darkMode ? "bg-[#202C36]" : "bg-[#FAFAFA]"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex flex-col lg:flex-row justify-between px-4 pt-6 pb-10 lg:py-6 lg:px-20 gap-10">
        <Input darkMode={darkMode} />
        <Filter darkMode={darkMode} />
      </div>
      <Countries />
    </div>
  );
};

export default App;
