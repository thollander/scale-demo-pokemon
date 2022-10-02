import { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import Date from "../components/Date";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
  position: "absolute",
  left: "calc(50% - 300px)",
  top: "calc(50% - 150px)",
};

export default function Csr() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  let [color] = useState("#0082C3");

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch(`https://pokebuildapi.fr/api/v1/pokemon/limit/150`).then((res) =>
        res.json()
      ),
      fetch(`https://worldtimeapi.org/api/timezone/Europe/Paris`).then((res) =>
        res.json()
      ),
    ]).then((data) => {
      setData(data);
      // add some delay intentionnally for PacmanLoader
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    });
  }, []);

  if (loading)
    return (
      <PacmanLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
      />
    );
  if (!data) return <div></div>;

  const [pokemons, date] = data;

  return (
    <main>
      <h1>Pokémons</h1>
      <Date date={date.datetime} />
      <PokemonList pokemons={pokemons} />
    </main>
  );
}
