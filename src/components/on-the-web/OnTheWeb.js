import React from 'react';
import PropTypes from 'prop-types';
import { OnTheWebItem } from '../';

export const OnTheWeb = ({ items }) => {
    return (
        <section>
            <h2>On the web</h2>
            <ul>
                {items.map((item, index) => <li key={index}><OnTheWebItem item={item} /></li>)}
            </ul>
        </section>
    );
};

OnTheWeb.propTypes = {
    items: PropTypes.array.isRequired,
};
