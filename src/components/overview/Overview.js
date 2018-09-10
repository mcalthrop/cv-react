import React from 'react';
import PropTypes from 'prop-types';

export const Overview = ({ paragraphs }) => {
    return (
        <section>
            <h2>Overview</h2>
            <section>
                {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </section>
        </section>
    );
};

Overview.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
