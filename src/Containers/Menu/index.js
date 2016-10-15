
import React from 'react';
import { Link } from 'react-router';
import './menu.scss';
import logo from './img/logo.png';

const Menu = () => (
    <div className="menu">
        <img src={logo} alt="WarsawJS" className="menu--logo" />
        <div className="menu--links">
            <Link
                className="menu--link"
                activeClassName="menu--link__active"
                onlyActiveOnIndex={true}
                to="/"
            >
                Home
            </Link>
            <Link
                className="menu--link"
                activeClassName="menu--link__active"
                to="/talks"
            >
                Talks
            </Link>
            <Link
                className="menu--link"
                activeClassName="menu--link__active"
                to="/gallery"
            >
                Gallery
            </Link>
        </div>
    </div>
);

export default Menu;
