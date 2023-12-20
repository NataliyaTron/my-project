import React from "react";
import type {RootState} from "../components/slices/store";
import {useSelector, useDispatch} from "react-redux";
import { decrement, increment, incrementByAmount} from "../components/slices/counterSlice";

export default () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return
        (
          <div >
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>Прибавить</button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Отнять</button>
                <br />
                <button onClick={() => dispatch(incrementByAmount(10))}>Прибавить 10</button>
            </div>
         </div>
        )
}

