import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/slice/CounterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Subtract</button>
    </div>
  );
}
