// App.jsx
import React, { useState } from 'react';
import { foods } from './data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.toLowerCase() === searchTerm.toLowerCase()) {
        return <mark key={index}>{part}</mark>;
      } else {
        return part;
      }
    });
  };

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.description.toLowerCase().includes(searchTerm.toLowerCase())
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
          <div className="food-name">{highlightText(food.name, searchTerm)}</div>
          <div className="food-description">{highlightText(food.description, searchTerm)}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
