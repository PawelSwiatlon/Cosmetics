import React, { useState } from 'react';

// Import styles scss
import styles from './Nav.module.scss';

// Import Private Components
import NavLogo from './NavLogo/NavLogo';
import NavItem from './NavItem/NavItem';


const Nav = ({ logoText, navItems }) => {
    const [openHamburger, setOpenHamburger] = useState(false);

    return (
        <div className={styles.wrapper}>
            <NavLogo>{logoText}</NavLogo>
            <div className={styles.hamburger__Box} onClick={() => setOpenHamburger(!openHamburger)}>
                <p className={styles.hamburger__Item}></p>
                <p className={styles.hamburger__Item}></p>
                <p className={styles.hamburger__Item}></p>
            </div>
            {openHamburger ?
                <div className={styles.navItems__Box}>
                    {navItems.map(item => {
                        return <NavItem>{item}</NavItem>
                    })}
                </div> : ''
            }
        </div>
    );
}
export default Nav;