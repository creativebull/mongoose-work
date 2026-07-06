import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Counter</button>
      <button onClick={() => setCount(c => c - 1)}>Counter</button>
    </>
  )
}

export default Counter;