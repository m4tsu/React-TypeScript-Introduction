import React, { FC, useState } from 'react';

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0)
  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount(count-1)
  }
  return(
    <>
      <div>
        count: {count}
      </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

    </>
  )
}

export default Counter;

