import React from 'react';
import PropTypes from 'prop-types';
import './Skills.css';

export const Skills = ({ items }) => {
    if (items && items.length > 0) {
        return (
            <ul className="mui--text-dark-hint skills">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        );
    }

    return null;
};

Skills.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
};
