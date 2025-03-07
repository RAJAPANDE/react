import React, { useState } from 'react';

function ProgrammingTasks() {
  const [showElement, setShowElement] = useState(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [text, setText] = useState('');
  const [childComponents, setChildComponents] = useState([]);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const records = ['Record 1', 'Record 2', 'Record 3'];

  const handleAddChild = () => {
    setChildComponents([...childComponents, <div key={childComponents.length}>Child Component {childComponents.length + 1}</div>]);
  };

  const handleSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div>
      <h2>Programming Tasks</h2>
      <div>Simple JSX</div>
      <div>
        {records.map((record, index) => (
          <div key={index}>{record}</div>
        ))}
      </div>
      <button onClick={() => setShowElement(!showElement)}>Show/Hide Element</button>
      {showElement && <div>This element is toggled</div>}
      <button onClick={() => setIsButtonEnabled(!isButtonEnabled)}>Enable/Disable Button</button>
      <button disabled={!isButtonEnabled}>Conditional Button</button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <div>Two-way Data Binding: {text}</div>
      <button onClick={handleAddChild}>Add Child Component</button>
      {childComponents}
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleSum}>Calculate Sum</button>
      {sum !== null && <div>Sum: {sum}</div>}
    </div>
  );
}

export default ProgrammingTasks;
