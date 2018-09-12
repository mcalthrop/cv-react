import React from 'react';
import PropTypes from 'prop-types';
import { FullWidthRow } from '..';

export const Overview = ({ paragraphs }) => {
    return (
        <section>
            <FullWidthRow>
                <h2>Overview</h2>
            </FullWidthRow>
            <FullWidthRow>
                {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </FullWidthRow>
        </section>
    );
};

Overview.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
