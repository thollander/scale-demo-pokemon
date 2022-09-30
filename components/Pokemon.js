import styles from "./Pokemon.module.css";

export default function Pokemon({ pokemon }) {
  return (
    <div className={styles.pokemon}>
      <img src={pokemon.sprite} alt={pokemon.name} />
      <div>{pokemon.name}</div>
    </div>
  );
}
