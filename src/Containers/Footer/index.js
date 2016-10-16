
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './footer.scss';

const Footer = () => (
    <div className={s.footer}>
        Every month, about JavaScript.
    </div>
);

export default withStyles(s)(Footer);
