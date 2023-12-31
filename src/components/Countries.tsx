import { Fragment } from "react";
import { Country } from "./DataTypes";
import { Link } from "react-router-dom";

interface Props {
  darkMode: boolean;
  countries: Country[];
  selectedRegion: string;
  singleCountry: string | null;
  handleSingleCountryClick: (country: string) => void;
  search: string;
}

const Countries = ({
  darkMode,
  countries,
  selectedRegion,
  handleSingleCountryClick,
  singleCountry,
  search,
}: Props) => {
  const filteredCountries =
    selectedRegion === "All"
      ? countries
      : countries.filter((country) => country.region === selectedRegion);

  return (
    <div className="z-10 px-[54px] lg:px-[78px] pt-8 lg:pt-12 pb-16 lg:pb-10 md:grid md:grid-cols-3 lg:grid-cols-4 flex flex-col gap-10 lg:gap-16">
      {filteredCountries
        .filter((country) =>
          country.name.official.toLowerCase().includes(search.toLowerCase())
        )
        .map((country, index) => (
          <Fragment key={index}>
            <Link to={`/${singleCountry}`}>
              <div
                onClick={() => handleSingleCountryClick(country.name.common)}
                className={`md:w-[264px] hover:scale-110 duration-500 cursor-pointer ${
                  darkMode ? "bg-[#202C36]" : "bg-white"
                } country-shadow`}
              >
                <img
                  src={country.flags.svg}
                  alt={`${country.name.common} image`}
                  className="w-full h-full md:max-w-[264px] md:max-h-[130px]"
                />
                <div
                  className={`pt-6 pl-6 pb-11 ${
                    darkMode ? "text-white" : "#111517"
                  }`}
                >
                  <h1 className="text-lg font-extrabold leading-[26px] mb-4">
                    {country.name.common}
                  </h1>
                  <div className="flex flex-col gap-2 text-sm font-semibold leading-4">
                    <p>
                      Population:{" "}
                      <span className="font-light">
                        {country.population.toLocaleString()}
                      </span>
                    </p>
                    <p>
                      Region:{" "}
                      <span className="font-light">{country.region}</span>
                    </p>
                    <p>
                      Capital:{" "}
                      <span className="font-light">{country.capital}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </Fragment>
        ))}
    </div>
  );
};

export default Countries;
