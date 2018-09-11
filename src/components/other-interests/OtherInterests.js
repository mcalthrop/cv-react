import React from 'react';
import PropTypes from 'prop-types';
import Row from 'muicss/lib/react/row';

export const OtherInterests = ({ paragraphs }) => {
    return (
        <section>
            <Row>
                <h2>Other interests</h2>
            </Row>
            <Row>
                {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </Row>
        </section>
    );
};

OtherInterests.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
