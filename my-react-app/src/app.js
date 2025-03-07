import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ProgrammingTasks from './components/ProgrammingTasks';
import Counter from './components/Counter';
import SearchFilter from './components/SearchFilter';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>React Project</h1>
      <nav>
        <Link to="/programming-tasks" className="nav-button">Programming Tasks</Link>
        <Link to="/counter" className="nav-button">Counter</Link>
        <Link to="/search-filter" className="nav-button">Search Filter</Link>
      </nav>
      <Routes>
        <Route path="/programming-tasks" element={<ProgrammingTasks />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/search-filter" element={<SearchFilter />} />
      </Routes>
    </div>
  );
}

export default App;
