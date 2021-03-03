import React from 'react';

//Import styles scss 
import styles from './NavLogo.module.scss';

const NavLogo = (props) => {
    return (
        <h1 className={styles.content}>{props.children}</h1>
    );
}

export default NavLogo;