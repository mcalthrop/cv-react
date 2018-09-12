import React from 'react';
import PropTypes from 'prop-types';
import './WorkHistory.css';
import { FullWidthRow, WorkHistoryItem } from '../';

export const WorkHistory = ({ items }) => {
    return (
        <section>
            <FullWidthRow>
                <h2>Work history</h2>
            </FullWidthRow>
            <ul className="workHistory">{items.map((item, index) => <li key={index} className="workHistoryItem"><WorkHistoryItem item={item} /></li>)}</ul>
        </section>
    );
};

WorkHistory.propTypes = {
    items: PropTypes.array.isRequired,
};
