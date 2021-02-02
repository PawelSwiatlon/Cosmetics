import React from 'react';
import styles from './Nav.module.scss'

import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';

const Nav = () => {
    return(
        <div className={styles.wrapper}>
            <Logo></Logo>
            <NavItems></NavItems>
        </div>
    )
}

export default Nav;