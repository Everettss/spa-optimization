
import React, { PropTypes } from 'react';
import './layout.scss';
import Menu from '../Menu';
import Footer from '../Footer';

const Layout = props => (
    <div className="root">
        <Menu />
        <div className="container">
            {props.children}
        </div>
        <Footer />
    </div>
);

Layout.propTypes = {
    children: PropTypes.object,
};

export default Layout;
