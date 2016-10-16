
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './layout.scss';
import Menu from '../Menu';
import Footer from '../Footer';

const Layout = props => (
    <div className={s.root}>
        <Menu />
        <div className={s.container}>
            {props.children}
        </div>
        <Footer />
    </div>
);

Layout.propTypes = {
    children: PropTypes.object,
};

export default withStyles(s)(Layout);
