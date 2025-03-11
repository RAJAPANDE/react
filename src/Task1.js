import React, { useState } from 'react';

const Task1 = () => {
  const [showElement, setShowElement] = useState(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [records, setRecords] = useState(['Record 1', 'Record 2', 'Record 3']);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleAddRecord = () => {
    setRecords([...records, `Record ${records.length + 1}`]);
  };

  const handleSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div>
      <h2>Task 1</h2>
      <div>
        <h3>Simple JSX Content</h3>
        <p>This is a simple JSX content.</p>
      </div>
      <div>
        <h3>Render Array of Records</h3>
        <ul>
          {records.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Show/Hide Element</h3>
        <button onClick={() => setShowElement(!showElement)}>
          {showElement ? 'Hide' : 'Show'}
        </button>
        {showElement && <p>This element can be shown or hidden.</p>}
      </div>
      <div>
        <h3>Enable/Disable Button</h3>
        <button onClick={() => setIsButtonEnabled(!isButtonEnabled)}>
          Toggle Button
        </button>
        <button disabled={!isButtonEnabled}>I can be enabled or disabled</button>
      </div>
      <div>
        <h3>Two-Way Data Binding</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>{inputValue}</p>
      </div>
      <div>
        <h3>Dynamically Add Child Components</h3>
        <button onClick={handleAddRecord}>Add Record</button>
      </div>
      <div>
        <h3>Sum of Two Numbers</h3>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={handleSum}>Calculate Sum</button>
        {sum !== null && <p>Sum: {sum}</p>}
      </div>
    </div>
  );
};

export default Task1;
