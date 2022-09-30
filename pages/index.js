import { VtmnLink } from "@vtmn/react";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <VtmnLink href="/csr">
        <div className={styles.link}>CSR</div>
      </VtmnLink>
      <VtmnLink href="/ssr">
        <div className={styles.link}>SSR</div>
      </VtmnLink>
      <VtmnLink href="/ssg">
        <div className={styles.link}>SSG</div>
      </VtmnLink>
      <VtmnLink href="/isr">
        <div className={styles.link}>ISR</div>
      </VtmnLink>
    </main>
  );
}

export default Home;
