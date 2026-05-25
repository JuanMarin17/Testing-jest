import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador</h1>
      <p data-testid="count-value">{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}