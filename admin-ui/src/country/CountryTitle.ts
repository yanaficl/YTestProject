import { Country as TCountry } from "../api/country/Country";

export const COUNTRY_TITLE_FIELD = "id";

export const CountryTitle = (record: TCountry): string => {
  return record.id?.toString() || String(record.id);
};
