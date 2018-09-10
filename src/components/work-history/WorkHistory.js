import React from 'react';
import PropTypes from 'prop-types';
import { WorkHistoryItem } from '../';

export const WorkHistory = ({ items }) => {
    return (
        <section>
            <h2>Work history</h2>
            {items.map((item, index) => <WorkHistoryItem key={index} item={item} />)}
        </section>
    );
};

WorkHistory.propTypes = {
    items: PropTypes.array.isRequired,
};
