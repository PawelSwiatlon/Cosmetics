import React, { useState } from 'react';

// Import styles scss
import styles from './Nav.module.scss';

// Import private components
import NavLogo from './NavLogo/NavLogo';
import NavItem from './NavItem/NavItem';

// Import public components
import HamburgerButton from '../HamburgerButton/HamburgerButton';

const Nav = ({ logoText, navItems }) => {
    const [HamburgerStatus, setHamburgerStatus] = useState(false);
    return (
        <div className={styles.wrapper}>
            <NavLogo>{logoText}</NavLogo>
            <HamburgerButton
                changeHamburgerStatus={() => setHamburgerStatus(!HamburgerStatus)}
                HamburgerStatusInfo={HamburgerStatus} />
            <div className={HamburgerStatus ? styles.navItems__active : styles.navItems__Box}>
                {navItems.map(item => {
                    return <NavItem key={item}>{item}</NavItem>
                })}
            </div>
        </div>
    );
}
export default Nav;