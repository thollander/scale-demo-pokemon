// This gets called on every request
export async function getServerSideProps() {
  const data = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/limit/151`);
  const pokemon = await data.json();

  // Pass data to the page via props
  return { props: { pokemon } };
}

export default function Ssg({ pokemon }) {
  return (
    <div>
      <h1>Pokémons</h1>
      {pokemon.map(function (p, i) {
        return <img src={p.sprite} alt={p.name} key={i} />;
      })}
    </div>
  );
}
