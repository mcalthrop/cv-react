import React from 'react';
import PropTypes from 'prop-types';

export const CompanyLinkShape = PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
});

export const CompanyLink = ({ company }) => {
    if (company.link) {
        return <h3><a href={company.link} target="_blank">{company.title}</a></h3>;
    }

    return <h3>{company.title}</h3>;
};

CompanyLink.propTypes = {
    company: CompanyLinkShape.isRequired,
};
