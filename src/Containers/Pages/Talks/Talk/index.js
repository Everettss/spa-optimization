
import React, { PropTypes } from 'react';
import './talk.scss';

const Talk = props => (
    <div>
        <span className="label">Author: </span> {props.author}<br />
        <span className="label">Description: </span> {props.description}<br />
        <span className="label">Slides: </span> <a href={props.slides} className="slides">{props.slides}</a>
    </div>
);

Talk.propTypes = {
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slides: PropTypes.string.isRequired,
};

export default Talk;
