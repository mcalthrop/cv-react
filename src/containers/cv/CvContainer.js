import React, { Component } from 'react';
import { Education, OnTheWeb, OtherInterests, Overview, WorkHistory } from '../../components';

const data = {
    overview: {
        paragraphs: [
            'Matt Calthrop is a highly experienced full-stack software engineer and trainer with 25 years\' experience in software analysis, development and systems integration.',
            'With an aptitude for teaching and mentoring, Matt\'s professional and conscientious approach ensures timely product delivery.',
        ]
    }
}
export class CvContainer extends Component {
    render() {
        return (
            <header>
                <h1>CV: Matt Calthrop</h1>
                <Overview paragraphs={data.overview.paragraphs} />
                <OnTheWeb />
                <WorkHistory />
                <Education />
                <OtherInterests />
            </header>
        );
    }
}