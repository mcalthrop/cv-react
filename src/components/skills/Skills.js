import React from 'react';
import PropTypes from 'prop-types';
import './Skills.css';

export const Skills = ({ items }) => {
    if (items && items.length > 0) {
        const skills = {__html: items.join(' &bull; ')};

        return (
            <p className="mui--text-dark-hint skills" dangerouslySetInnerHTML={skills}></p>
        );
    }

    return null;
};

Skills.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
};
