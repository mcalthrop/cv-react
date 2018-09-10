import React from 'react';
import PropTypes from 'prop-types';

export const OnTheWebItem = ({ link, title }) => {
    return (
        <a
            href={link}
            target="_blank">{title}</a>
    );
};

OnTheWebItem.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
