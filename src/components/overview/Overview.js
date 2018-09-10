import React from 'react';
import PropTypes from 'prop-types';

export const Overview = ({ paragraphs }) => {
    return (
        <section>
            <h2>Overview</h2>
            {paragraphs.map((paragraph) => <p>{paragraph}</p>)}
        </section>
    );
};

Overview.propTypes = {
    paragraphs: PropTypes.array.isRequired,
};
