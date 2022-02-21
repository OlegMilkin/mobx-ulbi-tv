import React from 'react';
import counter from './store/counter';
import {observer} from "mobx-react";

const Counter = observer(() => {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => {counter.decrement()}}>-</button>
      <span>{ counter.count }</span>
      <button onClick={() => {counter.increment()}}>+</button>
      Total: {counter.total}
    </div>
  );
});

export default Counter;