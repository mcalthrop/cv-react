import React from 'react';
import PropTypes from 'prop-types';
import { WorkHistoryItem } from '../';

export const WorkHistory = ({ items }) => {
    return (
        <section>
            <h2>Work history</h2>
            <ul>{items.map((item, index) => <li key={index}><WorkHistoryItem item={item} /></li>)}</ul>
        </section>
    );
};

WorkHistory.propTypes = {
    items: PropTypes.array.isRequired,
};
