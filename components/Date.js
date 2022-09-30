import styles from "./Date.module.css";

export default function Date({ date }) {
  return (
    <div className={styles.date}>{date}</div>
  );
}
