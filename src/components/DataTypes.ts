export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        common: string;
        official: string;
      };
    };
  };
  capital: string;
  population: number;
  area: number;
  region: string;
  subregion: string;
  nativeName: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
  borders: string[];
  flags: {
    png: string;
    svg: string;
  };
  official: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
