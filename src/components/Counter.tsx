import { useState } from 'react'
import './Counter.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement =() => {
    setCount(count + 1)
  }
  const handleDecrement =() => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}
