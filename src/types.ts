interface ICommon {
  code: string
  name: string
}

export interface IContinent extends ICommon {
  countries: ICountry[]
}

export interface ILanguage extends ICommon {
}

export interface ICountry extends ICommon {
  languages: ILanguage[]
}
