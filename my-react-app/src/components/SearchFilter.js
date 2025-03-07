import React, { useState } from 'react';

function SearchFilter() {
  const [query, setQuery] = useState('');
  const records = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  const filteredRecords = records.filter(record => record.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <h2>Search Filter</h2>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      <div>
        {filteredRecords.map((record, index) => (
          <div key={index}>{record}</div>
        ))}
      </div>
    </div>
  );
}

export default SearchFilter;
