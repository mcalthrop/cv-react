import React from 'react';
import PropTypes from 'prop-types';
import './Overview.css';

export const Overview = ({ paragraphs, image }) => {
    return (
        <section className="overview">
            <span className="image">
                <img src={image.url} alt="Matt Calthrop" width="100" />
            </span>
            <span className="paragraphs">
                {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </span>
        </section>
    );
};

Overview.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.object.isRequired,
};
