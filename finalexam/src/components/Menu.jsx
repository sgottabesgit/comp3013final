// Menu.jsx
import React from 'react';
import MenuItem from './MenuItem';
import styles from './Menu.module.css';

function Menu({ items, searchTerm }) {
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.menu}>
            {filteredItems.map(item => (
                <MenuItem key={item.id} name={item.name} description={item.description} />
            ))}
        </div>
    );
}

export default Menu;
