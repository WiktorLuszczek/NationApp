import axios from "axios";
import { useQuery } from "react-query";

const url =
  "https://restcountries.com/v2/all?fields=name,capital,population,flags,region";

export const GetData = () => {
  const { data } = useQuery(["countries"], () => {
    const res = axios.get(url);
    return res;
  });
  return { data };
};
