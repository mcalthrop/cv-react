import React from 'react';
import PropTypes from 'prop-types';
import './OnTheWeb.css';
import { FullWidthRow, OnTheWebItem } from '../';

export const OnTheWeb = ({ items }) => {
    return (
        <section>
            <FullWidthRow>
                <h2>On the web</h2>
            </FullWidthRow>
            <FullWidthRow>
                <ul className="onTheWeb">
                    {items.map((item, index) => <li key={index} className="onTheWebItem"><OnTheWebItem item={item} /></li>)}
                </ul>
            </FullWidthRow>
        </section>
    );
};

OnTheWeb.propTypes = {
    items: PropTypes.array.isRequired,
};
