// App.jsx
import React, { useState } from 'react';
import { foods } from './data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h2>Search:</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search foods"
      />
      {filteredFoods.map(food => (
        <div key={food.id} className="food-item">
          <div className="food-name" dangerouslySetInnerHTML={{ __html: highlightMatches(food.name, searchTerm) }}></div>
          <div className="food-description">{food.description}</div>
        </div>
      ))}
    </div>
  );
}

// Function to highlight matches
const highlightMatches = (text, searchTerm) => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};

export default App;
