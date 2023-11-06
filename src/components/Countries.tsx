import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);
  if (!countries) return null;
  return <div>{}</div>;
};

export default Countries;
