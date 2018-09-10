import React from 'react';
import PropTypes from 'prop-types';

export const OtherInterests = ({ paragraphs }) => {
    return (
        <section>
            <h2>Other interests</h2>
            <section>
                {paragraphs.map((paragraph) => <p>{paragraph}</p>)}
            </section>
        </section>
    );
};

OtherInterests.propTypes = {
    paragraphs: PropTypes.array.isRequired,
};
