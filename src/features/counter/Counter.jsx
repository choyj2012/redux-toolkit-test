import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useState } from "react";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [addAmount, setAddAmount] = useState(0);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <input type="text" value={addAmount} onChange={e => setAddAmount(e.target.value)}/>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(Number(addAmount) || 0))}
        >add amount</button>
      </div>
    </div>
  )
}