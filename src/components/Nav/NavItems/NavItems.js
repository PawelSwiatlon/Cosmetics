import React from 'react';
import styles from './NavItems.module.scss';

const NavItems = () => {
    return(
        <div className={styles.wrapper}>
            <p>Kosmetyki</p>
            <p>Składy</p>
            <p>Info</p>
        </div>
    )
}

export default NavItems;