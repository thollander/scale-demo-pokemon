import PokemonList from "../components/PokemonList";
import Date from "../components/Date";

export async function getStaticProps() {
  const [pokemons, date] = await Promise.all([
    (await fetch(`https://pokebuildapi.fr/api/v1/pokemon/limit/150`)).json(),
    (await fetch(`https://worldtimeapi.org/api/timezone/Europe/Paris`)).json(),
  ]);

  return { props: { pokemons, date } };
}

export default function Ssg({ pokemons, date }) {
  return (
    <main>
      <h1>Pokémons</h1>
      <Date date={date.datetime} />
      <PokemonList pokemons={pokemons} />
    </main>
  );
}