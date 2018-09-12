import React from 'react';
import PropTypes from 'prop-types';
import './WorkHistoryItem.css';
import { CompanyLink, FullWidthRow, Skills } from '../';

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
            <FullWidthRow><CompanyLink company={item.company}/></FullWidthRow>
            <FullWidthRow><strong>{item.jobTitle}</strong></FullWidthRow>
            <FullWidthRow>{item.location} • {item.duration.start}-{item.duration.finish}</FullWidthRow>
            <FullWidthRow>
                {item.paragraphs.map((paragraph, index) => <p key={index} className="mui--text-dark-secondary workHistoryItem">{paragraph}</p>)}
            </FullWidthRow>
            <FullWidthRow>
                <Skills items={item.skills} />
            </FullWidthRow>
        </section>
    );
};

WorkHistoryItem.propTypes = {
    item: WorkHistoryItemShape,
};
