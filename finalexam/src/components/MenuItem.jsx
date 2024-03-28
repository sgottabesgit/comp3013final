// MenuItem.jsx
import React from 'react';
import styles from './MenuItem.module.css'; // Import CSS module

function MenuItem({ name, description }) {
    return (
        <div className={styles['menu-item']}>
            <div className={styles.name}>{name}</div>
            <div className={styles.description}> {description}</div> {/* Add a space before description */}
        </div>
    );
}

export default MenuItem;
