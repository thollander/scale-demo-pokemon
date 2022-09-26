// This gets called on every request
export async function getStaticProps() {
  const [pokemon, date] = await Promise.all([
    (await fetch(`https://pokebuildapi.fr/api/v1/pokemon/limit/151`)).json(), // get pokemon
    (await fetch(`https://worldtimeapi.org/api/timezone/Europe/Paris`)).json(), // get date
  ]);

  // Pass data to the page via props
  return { props: { pokemon, date } };
}

export default function Ssg({ pokemon, date }) {
  return (
    <div>
      <h1>Date : {new Date(date.datetime).toLocaleString("en-US")}</h1>
      <h1>Pokémons</h1>
      {pokemon.map(function (p, i) {
        return <img src={p.sprite} alt={p.name} key={i} />;
      })}
    </div>
  );
}
