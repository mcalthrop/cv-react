import React from 'react';
import PropTypes from 'prop-types';
import Row from 'muicss/lib/react/row';

export const Education = ({ paragraphs }) => {
    return (
        <section>
            <Row>
                <h2>Education</h2>
            </Row>
            <Row>
                {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </Row>
        </section>
    );
};

Education.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
