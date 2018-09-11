import React from 'react';
import PropTypes from 'prop-types';
import { CompanyLink } from '../';

export const WorkHistoryItemShape = PropTypes.shape({
    company: PropTypes.object.isRequired,
    jobTitle: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.object.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
});

export const WorkHistoryItem = ({ item }) => {
    return (
        <section>
            <section><CompanyLink company={item.company}/></section>
            <section><strong>{item.jobTitle}</strong></section>
            <section>{item.location} • {item.duration.start}-{item.duration.finish}</section>
            <section>
                {item.paragraphs.map((paragraph, index) => <p key={index} className="mui--text-dark-secondary">{paragraph}</p>)}
            </section>
            {item.skills &&
                <section>
                    <ul className="mui--text-dark-hint">
                        {item.skills.map((paragraph, index) => <li key={index}>{paragraph}</li>)}
                    </ul>
                </section>
            }
        </section>
    );
};

WorkHistoryItem.propTypes = {
    item: WorkHistoryItemShape,
};
