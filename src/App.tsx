import axios from "axios";
import { Country } from "./components/DataTypes";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";
import { useNavigate } from "react-router-dom";

const baseURL = "https://restcountries.com/v3.1/all";

const App = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [filterShow, setFilterShow] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [singleCountry, setSingleCountry] = useState<string | null>("");

  useEffect(() => {
    axios.get<Country[]>(baseURL).then((response) => {
      setCountries(response.data);
      if (singleCountry) {
        navigate(`/${singleCountry}`);
      }
    });
  }, [singleCountry, navigate]);
  if (!countries) return null;

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    setFilterShow(false);
  };

  const handleSingleCountryClick = (country: string) => {
    setSingleCountry(country);
  };

  return (
    <div
      className={`w-full min-h-screen duration-700 overflow-x-hidden ${
        darkMode ? "bg-[#202C36]" : "bg-[#FAFAFA]"
      }`}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setSelectedRegion={setSelectedRegion}
      />
      <div className="flex flex-col lg:flex-row justify-between px-4 pt-6 pb-10 lg:py-6 lg:px-20 gap-10">
        <Input darkMode={darkMode} />
        <Filter
          darkMode={darkMode}
          countries={countries}
          filterShow={filterShow}
          setFilterShow={setFilterShow}
          handleRegionClick={handleRegionClick}
          selectedRegion={selectedRegion}
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
              handleSingleCountryClick={handleSingleCountryClick}
              singleCountry={singleCountry}
            />
          }
        ></Route>
        <Route
          path={`/:${singleCountry}`}
          element={
            <SingleCountry
              countries={countries}
              singleCountry={singleCountry}
              setSingleCountry={setSingleCountry}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
