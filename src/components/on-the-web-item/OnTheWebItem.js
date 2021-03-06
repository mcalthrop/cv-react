import React from 'react';
import PropTypes from 'prop-types';

export const OnTheWebItemShape = PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
});

export const OnTheWebItem = ({ item }) => {
    return (
        <a
            href={item.link}
            target="_blank">{item.title}</a>
    );
};

OnTheWebItem.propTypes = {
    item: OnTheWebItemShape,
};
