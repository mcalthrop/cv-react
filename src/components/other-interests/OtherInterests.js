import React from 'react';
import PropTypes from 'prop-types';
import { FullWidthRow } from '..';

export const OtherInterests = ({ paragraphs }) => {
    return (
        <section>
            <FullWidthRow>
                <h2>Other interests</h2>
            </FullWidthRow>
            <FullWidthRow>
                {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </FullWidthRow>
        </section>
    );
};

OtherInterests.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
