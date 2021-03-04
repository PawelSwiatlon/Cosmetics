import React, { useState } from 'react';

// Import styles scss
import styles from './HamburgerButton.module.scss';

const HamburgerButton = ({ changeHamburgerStatus, HamburgerStatusInfo }) => {
    return (
        <div className={styles.hamburger__Box}
            onClick={changeHamburgerStatus}>
            <div className={HamburgerStatusInfo ? styles.active : ''}>
                <p className={styles.hamburger__Item}></p>
                <p className={styles.hamburger__Item}></p>
                <p className={styles.hamburger__Item}></p>
            </div>
        </div>
    );
}

export default HamburgerButton;