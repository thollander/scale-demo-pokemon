import styles from "./PokemonList.module.css";
import Pokemon from "./Pokemon";

export default function PokemonList({ pokemons }) {
  return (
    <div className={styles.list}>
      {pokemons.map(function (p, i) {
        return <Pokemon pokemon={p} key={i} />
      })}
    </div>
  );
}