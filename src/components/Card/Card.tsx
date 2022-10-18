import type { CountryType } from "../Main/Main";

export const Card = ({ country }: { country: CountryType }) => {
  const { name, population, region, capital, flags } = country;
  return (
    <article className="card">
      <img src={flags.png} alt="flaga państwowa"></img>
      <h1>{name}</h1>
      <p>
        <span>Population:</span> {population}
      </p>
      <p>
        <span>Region:</span> {region}
      </p>
      <p>
        <span>Capital:</span> {capital}
      </p>
    </article>
  );
};
