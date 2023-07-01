import { useState } from 'react'
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement =() => {
    setCount(count + 1)
  }
  const handleDecrement =() => {
    setCount(count - 1)
  }
  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button className={classes.green} onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}
