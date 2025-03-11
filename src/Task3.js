import React, { useState } from 'react';

const Task3 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const records = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  const filteredRecords = records.filter(record =>
    record.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Task 3</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredRecords.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task3;
