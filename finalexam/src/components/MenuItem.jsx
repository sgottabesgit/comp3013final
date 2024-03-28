// MenuItem.jsx
import React from 'react';
import './MenuItem.css';

function MenuItem({ name, description }) {
    return (
        <div className="menu-item">
            <div className="name">{name}</div>
            <div className="description">{description}</div>
        </div>
    );
}

export default MenuItem;
