import React from 'react';

// Import library react-router-dom
import { NavLink } from 'react-router-dom';

// Import styles scss
import styles from './NavItem.module.scss';

const NavItem = (props) => {
    return (
        <NavLink exact
            className={styles.navItem}
            activeClassName={styles.navItemActive}
            to={props.children}>
            {props.children}
        </NavLink>
    );
}

export default NavItem;