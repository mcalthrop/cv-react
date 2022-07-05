import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

export const CompanyLinkShape = PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
});

export const ViaCompanyLinkShape = PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
});

export const CompanyLink = ({ company, viaCompany }) => {
    const viaCompanyMarkup = useMemo(() => {
        let markup = '';

        if (!viaCompany.title) {
            return markup;
        }

        if (viaCompany.link) {
            markup = <a href={viaCompany.link} target={"_blank"}>{viaCompany.title}</a>
        } else {
            markup = viaCompany.title; 
        }

        return <span> via {markup}</span>;
    }, [viaCompany]);

    if (company.link) {
        return <h3><a href={company.link} target="_blank">{company.title}</a>{viaCompanyMarkup}</h3>;
    }

    return <h3>{company.title}{viaCompanyMarkup}</h3>;
};

CompanyLink.propTypes = {
    company: CompanyLinkShape.isRequired,
    viaCompany: ViaCompanyLinkShape,
};
