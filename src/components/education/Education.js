import React from 'react';
import PropTypes from 'prop-types';

export const Education = ({ paragraphs }) => {
    return (
        <section>
            <h2>Education</h2>
            <section>
                {paragraphs.map((paragraph) => <p>{paragraph}</p>)}
            </section>
        </section>
    );
};

Education.propTypes = {
    paragraphs: PropTypes.array.isRequired,
};
