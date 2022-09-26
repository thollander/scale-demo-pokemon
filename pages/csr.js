import { useState, useEffect } from "react";

export default function Csr() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <h1>Pokémons</h1>
      {data.map(function (p, i) {
        return <img src={p.sprite} alt={p.name} key={i} />;
      })}
    </div>
  );
}
