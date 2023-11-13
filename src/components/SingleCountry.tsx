import { Country } from "./DataTypes";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

interface Props {
  countries: Country[];
  singleCountry: string | null;
  setSingleCountry: (e: string) => void;
  darkMode: boolean;
}

const SingleCountry = ({
  countries,
  singleCountry,
  setSingleCountry,
  darkMode,
}: Props) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
    setSingleCountry("");
  };
  return (
    <div className="px-[54px] lg:px-[78px] pt-8 lg:pt-20 pb-16 lg:pb-10">
      <div
        onClick={handleGoBack}
        className={`country-shadow flex flex-row items-center gap-2 mb-16 lg:mb-20 justify-center w-[104px] lg:w-[136px]
        lg:h-[40px] ${
          darkMode ? "#2B3844 text-white" : "bg-white text-[#111517]"
        } rounded-md cursor-pointer`}
      >
        <BsArrowLeft />
        <h1>Back</h1>
      </div>
      {countries.map((country) => {
        return (
          <>
            {country.name.common === singleCountry && (
              <div className="flex flex-col md:flex-row gap-12 md:gap-36">
                <div>
                  <img src={country.flags.svg} className="w-[560px]" />
                </div>
                <div
                  className={`${darkMode ? "text-white" : "text-[#111517]"}`}
                >
                  <h1 className="text-[22px] md:text-[32px] font-bold leading-normal">
                    {singleCountry}
                  </h1>
                  {/*  */}
                  <div className="flex flex-col md:flex-row gap-8 md:gap-36">
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center gap-1 mt-4 md:mt-6">
                        <h2>Native Name:</h2>
                        <p>{country.name.nativeName?.eng.official}</p>
                      </div>
                      <div className="flex flex-row items-center gap-1 mt-4 md:mt-6">
                        <h2>Population:</h2>
                        <p>{country.population.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-row items-center gap-1 mt-4 md:mt-6">
                        <h2>Region:</h2>
                        <p>{country.region}</p>
                      </div>
                      <div className="flex flex-row items-center gap-1 mt-4 md:mt-6">
                        <h2>Sub Region:</h2>
                        <p>{country.subregion}</p>
                      </div>
                      <div className="flex flex-row items-center gap-1 mt-4 md:mt-6">
                        <h2>Capital:</h2>
                        <p>{country.capital}</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="mt-8">
                      <div>
                        <h2>Top Level Domain:</h2>
                        <p>
                          {country.topLevelDomain.map((domain) => (
                            <p>{domain}</p>
                          ))}
                        </p>
                      </div>
                      <div>
                        <h2>Top Level Domain:</h2>
                        <p>{country.topLevelDomain}</p>
                      </div>
                      <div>
                        <h2>Top Level Domain:</h2>
                        <p>{country.topLevelDomain}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default SingleCountry;
