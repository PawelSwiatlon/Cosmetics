import React from 'react';

// Import library react-router-dom
import { NavLink } from 'react-router-dom';

// Import styles scss
import styles from './NavItem.module.scss';

const NavItem = ({ page, path }) => {
    return (
        <NavLink exact
            className={styles.navItem}
            activeClassName={styles.navItemActive}
            to={path}>
            {page}
        </NavLink>
    );
}

export default NavItem;