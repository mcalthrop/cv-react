import React from 'react';
import PropTypes from 'prop-types';
import { FullWidthRow } from '../';

export const Education = ({ paragraphs }) => {
    return (
        <section>
            <FullWidthRow>
                <h2>Education</h2>
            </FullWidthRow>
            <FullWidthRow>
                {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </FullWidthRow>
        </section>
    );
};

Education.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
