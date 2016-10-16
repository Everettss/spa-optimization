
import React from 'react';
import { Link } from 'react-router';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './menu.scss';
import logo from './img/logo.png';

const Menu = () => (
    <div className={s.menu}>
        <img src={logo} alt="WarsawJS" className={s.menuLogo} />
        <div className={s.menuLinks}>
            <Link
                className={s.menuLink}
                activeClassName={s.menuLinkActive}
                onlyActiveOnIndex={true}
                to="/"
            >
                Home
            </Link>
            <Link
                className={s.menuLink}
                activeClassName={s.menuLinkActive}
                to="/talks"
            >
                Talks
            </Link>
            <Link
                className={s.menuLink}
                activeClassName={s.menuLinkActive}
                to="/gallery"
            >
                Gallery
            </Link>
        </div>
    </div>
);

export default withStyles(s)(Menu);
