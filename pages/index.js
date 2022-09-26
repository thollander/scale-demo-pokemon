import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/csr">
          <a>CSR</a>
        </Link>
      </li>
      <li>
        <Link href="/ssr">
          <a>SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/ssg">
          <a>SSG</a>
        </Link>
      </li>
      <li>
        <Link href="/isr">
          <a>ISR</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;
