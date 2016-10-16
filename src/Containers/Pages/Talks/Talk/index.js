
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './talk.scss';

const Talk = props => (
    <div>
        <span className={s.label}>Author: </span> {props.author}<br />
        <span className={s.label}>Description: </span> {props.description}<br />
        <span className={s.label}>Slides: </span> <a href={props.slides} className={s.slides}>{props.slides}</a>
    </div>
);

Talk.propTypes = {
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slides: PropTypes.string.isRequired,
};

export default withStyles(s)(Talk);
