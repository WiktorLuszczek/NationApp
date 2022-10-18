/* eslint-disable import/no-unresolved */
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { GetData } from "../../axios/GetData";
import { Card } from "../Card/Card";
export type CountryType = {
  name: string;
  population: number;
  region: string;
  flags: {
    png: string;
    svg: string;
  };
  capital: string;
};

export const Main = () => {
  const data = GetData();
  const countries = data.data?.data;
  const [region, setRegion] = useState("All");
  const [searchText, setSearchText] = useState("");
  const funcFilterCountry = () => {
    if (region === "All") {
      if (searchText === "") return countries;
      else {
        return countries.filter((country: CountryType) =>
          country.name.toUpperCase().includes(searchText.toUpperCase(), 0)
        );
      }
    } else {
      return countries.filter(
        (country: CountryType) =>
          country.region === region &&
          country.name.toUpperCase().includes(searchText.toUpperCase(), 0)
      );
    }
  };
  if (countries === undefined) return <main>Weit a moment</main>;
  else {
    const filterCountry = funcFilterCountry();
    return (
      <main>
        <form>
          <TextField
            id="filled-search"
            label="Search for a country"
            type="search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <FormControl variant="filled" sx={{ m: 0, minWidth: 130 }}>
            <InputLabel id="demo-simple-select-filled-label">Region</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={region}
              label="Age"
              onChange={(e) => setRegion(e.target.value)}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Africa"}>Africa</MenuItem>
              <MenuItem value={"Americas"}>Americas</MenuItem>
              <MenuItem value={"Asia"}>Asia</MenuItem>
              <MenuItem value={"Europe"}>Europe</MenuItem>
              <MenuItem value={"Oceania"}>Oceania</MenuItem>
            </Select>
          </FormControl>
        </form>
        <div className="container">
          {filterCountry.map((country: CountryType, index: number) => (
            <Card key={index} country={country} />
          ))}
        </div>
      </main>
    );
  }
};
