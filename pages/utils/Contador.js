import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(1);

  function AddCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <div>{counter}</div>
      <button onClick={AddCounter}>Add</button>
    </>
  );
}
