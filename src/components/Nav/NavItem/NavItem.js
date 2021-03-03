import React from 'react';

// Import styles scss
import styles from './NavItem.module.scss';

const NavItem = (props) => {
    return (
        <h3>{props.children}</h3>
    );
}

export default NavItem;