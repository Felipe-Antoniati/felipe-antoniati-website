import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(1);

  function AdicionarContador() {
    setContador(contador + 1);
  }

  return (
    <>
      <div>{contador}</div>
      <button onClick={AdicionarContador}>Adicionar</button>
    </>
  );
}
