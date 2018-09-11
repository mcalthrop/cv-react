import React from 'react';
import PropTypes from 'prop-types';
import Row from 'muicss/lib/react/row';
import './OnTheWeb.css';
import { OnTheWebItem } from '../';

export const OnTheWeb = ({ items }) => {
    return (
        <section>
            <Row>
                <h2>On the web</h2>
            </Row>
            <Row>
                <ul className="onTheWeb">
                    {items.map((item, index) => <li key={index} className="onTheWebItem"><OnTheWebItem item={item} /></li>)}
                </ul>
            </Row>
        </section>
    );
};

OnTheWeb.propTypes = {
    items: PropTypes.array.isRequired,
};
