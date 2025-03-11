import React, { useState } from 'react';

const Task2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Task 2</h2>
      <p>Counter Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default Task2;
