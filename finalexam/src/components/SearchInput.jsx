// SearchInput.js
import React from 'react';
import './SearchInput.css';

function SearchInput({ value, onChange }) {
    return (
        <div className="search-input">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search foods"
                className="input"
            />
        </div>
    );
}

export default SearchInput;
