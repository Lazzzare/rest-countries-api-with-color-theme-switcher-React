// import { useEffect } from "react";
import { Country } from "./DataTypes";
import { useNavigate } from "react-router-dom";

interface Props {
  countries: Country[];
  singleCountry: string | null;
  setSingleCountry: (e: string) => void;
}

const SingleCountry = ({
  countries,
  singleCountry,
  setSingleCountry,
}: Props) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
    setSingleCountry("");
  };
  return (
    <div>
      <h1 onClick={handleGoBack}>Go Back</h1>
      {countries.map((country) => {
        return (
          <div>
            {country.name.common === singleCountry && (
              <img src={country.flags.svg} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SingleCountry;
