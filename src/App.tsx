import axios from "axios";
import { Country } from "./components/DataTypes";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";

const baseURL = "https://restcountries.com/v3.1/all";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [filterShow, setFilterShow] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  useEffect(() => {
    axios.get<Country[]>(baseURL).then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);
  if (!countries) return null;

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    setFilterShow(false);
  };

  return (
    <div
      className={`w-full min-h-screen duration-700 ${
        darkMode ? "bg-[#202C36]" : "bg-[#FAFAFA]"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex flex-col lg:flex-row justify-between px-4 pt-6 pb-10 lg:py-6 lg:px-20 gap-10">
        <Input darkMode={darkMode} />
        <Filter
          darkMode={darkMode}
          countries={countries}
          filterShow={filterShow}
          setFilterShow={setFilterShow}
          handleRegionClick={handleRegionClick}
        />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Countries
              darkMode={darkMode}
              countries={countries}
              selectedRegion={selectedRegion}
            />
          }
        ></Route>
        <Route path={`/rame`} element={<SingleCountry />}></Route>
      </Routes>
    </div>
  );
};

export default App;
