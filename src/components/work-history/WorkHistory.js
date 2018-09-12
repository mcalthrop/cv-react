import React from 'react';
import PropTypes from 'prop-types';
import Row from 'muicss/lib/react/row';
import './WorkHistory.css';
import { WorkHistoryItem } from '../';

export const WorkHistory = ({ items }) => {
    return (
        <section>
            <Row>
                <h2>Work history</h2>
            </Row>
            <ul className="workHistory">{items.map((item, index) => <li key={index} className="workHistoryItem"><WorkHistoryItem item={item} /></li>)}</ul>
        </section>
    );
};

WorkHistory.propTypes = {
    items: PropTypes.array.isRequired,
};
