import React from 'react';
import PropTypes from 'prop-types';
import Row from 'muicss/lib/react/row';
import './WorkHistoryItem.css';
import { CompanyLink, Skills } from '../';

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
            <Row><CompanyLink company={item.company}/></Row>
            <Row><strong>{item.jobTitle}</strong></Row>
            <Row>{item.location} • {item.duration.start}-{item.duration.finish}</Row>
            <Row>
                {item.paragraphs.map((paragraph, index) => <p key={index} className="mui--text-dark-secondary workHistoryItem">{paragraph}</p>)}
            </Row>
            <Row>
                <Skills items={item.skills} />
            </Row>
        </section>
    );
};

WorkHistoryItem.propTypes = {
    item: WorkHistoryItemShape,
};
