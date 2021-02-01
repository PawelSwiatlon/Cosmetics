import React from 'react';
import styles from './Nav.module.scss'

import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';

const Nav = () => {
    return(
        <div className={styles.wrapper}>
            <Logo></Logo>
            <NavItems></NavItems>
            {/* <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul> */}
        </div>
    )
}

export default Nav;